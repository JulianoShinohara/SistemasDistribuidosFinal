import 'remixicon/fonts/remixicon.css';
import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { divCommentary, divGeneral, divStyleTitle, line, textLocation, textTitle } from "./styles"
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { IPlace } from '../../models/IPlace';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { TextArea } from '../../components/TextArea';
import Commentary from '../../components/Commentary';
import api from '../../services/api';
import { HStack, Spinner } from '@chakra-ui/react';
import { io } from 'socket.io-client';
import { useSession } from 'next-auth/client';
import { ICommentary } from '../../models/ICommentary';

type CommentaryType = {
  commentary: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  openAddModal: boolean;
}

const socket = io('http://localhost:3333');

export default function Search() {
  const [session] = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState<IPlace>({} as IPlace);
  const [commentaryStates, setCommentaryStates] = useState<CommentaryType>({ } as CommentaryType);
  const [userId, setUserId] = useState<string>('');
  const [commentary, setCommentary] = useState<ICommentary[]>([] as ICommentary[]);
  
  async function handleButtonAddCommentary(){
    setCommentaryStates({...commentaryStates, openAddModal: !commentaryStates.openAddModal});
    await api.post(`/commentary/${router.query.id}`, {
      commentary: `${session?.user?.name}*t*u*r/GABY/*t*u*r/${userId}*t*u*r/GABY/*t*u*r/${commentaryStates.commentary}`,
    }).then(() => {
      socket.emit('commentary', userId, router.query.id); // manda pro back
      getCommentary();
    }).catch(() => {
      alert('Erro ao adicionar comentário');
    })
  }

  async function excludeCommentary(id: string){
    await api.delete(`/commentary/one/${id}`).then(() => {
      socket.emit('delete', userId, router.query.id); 
      getCommentary();
    }).catch(() => {
      alert('Erro ao excluir comentário');
    })
  }

  async function handleAddCommentary() {
    if(commentaryStates.commentary){
      handleButtonAddCommentary();
    }
  }

  async function getPlace(){
    try {
      const response = await api.get(`/places/one/${router.query.id}`);
      setLoading(false);
      setPlace(response.data);
    } catch {}
  }

  async function getCommentary() {
    try {
      const response = await api.get(`/commentary/all`);
      console.log(response.data)
      setCommentary(response.data.filter((commentary: ICommentary) => commentary.places.id === router.query.id));
    } catch {}
  }

  socket.on('getCommentary', (placeId: string) => getCommentary())
  
  useEffect(() => {
    getPlace();
    socket.emit('newUser', userId);
    socket.emit('joinPlace', userId, router.query.id);
    socket.on('getCommentary', (placeId: string) => getCommentary())
    getCommentary();
  }, [router]);

  useEffect(() => {
    if(typeof window !== 'undefined'){
      setUserId(localStorage.getItem('userId') as string);
    }
  }, [])


  return (
    <div>
      <Header/>
      <Sidebar/>

      <div className={divGeneral}>  
        {loading ? (
          <Spinner/>
        ) : (
          <div key={place.id} className='flex space-x-10'>
            <div>
              <div className='flex items-center pt-10 justify-between'>
                <h1 className={textTitle}>{place.name}</h1>
              </div>

              <h1 className={textLocation}>{place.address?.city} - {place.address?.state}</h1>

              <div 
                className='w-559 h-462 bg-cover rounded-3xl'
                style={{
                  backgroundImage: `url(${place.images.length > 0 ? place.images[0]?.image : 'https://images.unsplash.com/photo-1653161752453-0e00805678b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'})`
                }}
              />
              
              <HStack>
                <i className="ri-map-pin-line"/>
                <b className='px-2 text-2xl'>Endereço</b>
                <h1 className='text-2xl'>
                  {place.address?.street}
                </h1>
              </HStack>
             
            </div>

            <div>  
              <div className={divStyleTitle}>
                <h1 className='text-3xl text-textTitle font-semibold'>Comentários</h1>
                <Button 
                  bg='bg-textTitle' 
                  rounded='rounded-full' 
                  w='w-44' 
                  h='h-10' 
                  textColor='text-white' 
                  textWeight='font-semibold'
                  onClick={() => setCommentaryStates({...commentaryStates, openAddModal: !commentaryStates.openAddModal})}
                >
                    Adicionar comentário
                </Button>
              </div>   

              <div className={divCommentary}>
                {commentary.map((commentary, i) => (
                  <div key={i} className={line}>
                    <Commentary commentary={commentary} excludeCommentary={(id) => excludeCommentary(id)} userId={userId}/>  
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        )}

          <Modal 
              isOpen={commentaryStates.openAddModal} 
              onClose={handleButtonAddCommentary} 
              title='Adicionar Comentário'
              footer={
                  <Button 
                      bg='bg-textTitle' 
                      rounded='rounded' 
                      w='w-full' 
                      h='h-12' 
                      textColor='text-white' 
                      textWeight='font-bold'
                      onClick={handleAddCommentary}
                  >
                      Salvar
                  </Button>
              }
          >
              <div className='flex flex-col'>
                <TextArea 
                haslabel 
                label='Comentário' 
                placeholder='ex: Lugar bonito'                       
                top='mt-2'  
                value={commentaryStates.commentary}   
                onChange={(e) => setCommentaryStates({ ...commentaryStates, commentary: e.target.value })}                                      
              />                   
              </div>
          </Modal>
      </div>  
    </div>  
  )
}
