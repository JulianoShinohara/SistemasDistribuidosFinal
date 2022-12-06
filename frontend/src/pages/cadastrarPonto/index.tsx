import 'remixicon/fonts/remixicon.css';
import React, { useCallback, useState } from "react"
import { useRouter } from 'next/router';
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import CityValues from '../../contents/city';
import { divGeneral, divImage, divInput, divRegister, textTitle } from "./styles"
import { TextArea } from '../../components/TextArea';
import api  from '../../services/api';

export interface ICadastro {
  name: string;
  city: string;
  state: string;
  image: string;
  commentary: string;
  address: string;
}

export default function PlaceRegistration() {
  const [cadastro, setCadastro] = useState<ICadastro>({} as ICadastro);
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>(''); 
  const [commentary, setCommentary] = useState<string>(''); 
  const [imgs, setImgs] = useState<string>('');


  const handleUF = useCallback((state:string) => {
    setState(state)
  }, [state])
  
  const handleCity = useCallback((city:string) => {
    setCity(city)
  }, [city])
  
  function goBack() {
    router.push('/PesquisarLocais')
  }

  const registerFunction = useCallback((name: any, state: any, city: any, commentary: any, address: any, images: any) => {
    api.post('/places/total', {
        name,
        city,
        state,
        images,
        commentary,
        address
    }).then(() => router.push('/PesquisarLocais'))
}, [])

  

  return (
    <div>
      <Header/>
      
      <div className={divGeneral}>
        <div className={divRegister}>
          <div  className='space-x-1'>
            <i className="ri-arrow-go-back-line"></i>            
            <button 
              className="underline"
              onClick={goBack}
            >
              Voltar
            </button>
          </div>
          <h1 className={textTitle}>Cadastro de ponto turistico</h1>

          <Input 
            haslabel 
            label='*Nome' 
            placeholder='ex: Parque nacional da Tijuca'
            top='mt-5'
            value={cadastro.name} 
            onChange={(e) => setName(e.target.value)}
          />
          <div className={divInput}>
            <Input 
              haslabel 
              label='*Endereço' 
              placeholder='ex: av. paulista, 1000' 
              top='mt-5'
              value={cadastro.address}
              onChange={(e) => setAddress(e.target.value)}
            />           
          </div>
          <TextArea
            haslabel 
            label='*Comentário' 
            placeholder='ex: Lugar lindo'
            top='mt-5'
            value={cadastro.commentary}
            onChange={(e) => setCommentary(e.target.value)}
          />

          <div className={divInput}>
            <Select onChange = {(e) => handleUF(e.target.value)} value = {cadastro.state} 
                haslabel label='*Estado' top='mt-5'
                >
                <option key = 'init'>Selecione o Estado</option>
                {CityValues.estados.map((uf, index) => (
                    <option key ={index.toString()} value = {uf.nome}>{uf.nome}</option>
                ))}
            </Select>
            <Select onChange = {(e) => handleCity(e.target.value)} value = {cadastro.city} 
                haslabel label='*Cidade' top='mt-5'
                >
                <option key = 'init'>Selecione a cidade</option>
                {CityValues.estados.find((city) => city.nome == cadastro.state)?.cidades.map((cities, index) => (
                    <option key ={index.toString()}  value = {cities}>{cities} </option>
                ))}
            </Select>
          </div>
          
          <div className={divImage}>
            <Input   
              haslabel
              label='*Adicione uma imagem'           
              type='file' 
              id='image' 
              multiple             
              />
          </div>

          <div className="pt-8">
            <Button 
              bg='bg-textTitle' 
              rounded='rounded' 
              w='w-full' 
              h='h-14' 
              textColor='text-white' 
              textWeight='font-bold'
              onClick={() => registerFunction(name, state, city, commentary, address, imgs)}
            >
                CADASTRAR
            </Button>

          </div>
        </div>      
      </div>  
    </div>  
  )
}
