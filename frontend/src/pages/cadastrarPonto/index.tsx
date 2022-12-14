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

export default function PlaceRegistration() {
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

  const register = useCallback(async () => {
    console.log(name, address, state, city, commentary, imgs)
    if(state && city && name && address && commentary && imgs) {
        alert('Estamos fazendo o seu cadastro, por favor aguarde.')
        registerFunction(name, state, city, commentary, address, imgs)     
    } else {
        alert('Por favor, preencha todos os campos necessários (*).')
    }
  }, [name, address, state, city, commentary, imgs])

  async function registerFunction(name: string, state: string, city: string, commentary: string, address: string, images: string) {
    try {
      const response = await api.post('/places', {
        name,
        images,
        commentary,
        address
      })

      if(response.status.toString().startsWith('2')) {
        try {
          const responseAddress = await api.post(`/addresses/${response.data.id}`, {
            state,
            city,
            reference: '_',
            street: address
          });
  
          if(responseAddress.status.toString().startsWith('2')) {
            alert('Cadastro realizado com sucesso!')
            router.push('/PesquisarLocais')
          }
        } catch {
          alert('Erro ao cadastrar, tente novamente.')
        }
      }
    } catch {
      alert('Erro ao cadastrar, tente novamente.')
    }
}
  

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
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <div className={divInput}>
            <Input 
              haslabel 
              label='*Endereço' 
              placeholder='ex: av. paulista, 1000' 
              top='mt-5'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />           
          </div>
          <TextArea
            haslabel 
            label='*Comentário' 
            placeholder='ex: Lugar lindo'
            top='mt-5'
            value={commentary}
            onChange={(e) => setCommentary(e.target.value)}
          />

          <div className={divInput}>
            <Select onChange = {(e) => handleUF(e.target.value)} value = {state} 
                haslabel label='*Estado' top='mt-5'
                >
                <option key = 'init'>Selecione o Estado</option>
                {CityValues.estados.map((uf, index) => (
                    <option key ={index.toString()} value = {uf.nome}>{uf.nome}</option>
                ))}
            </Select>
            <Select onChange = {(e) => handleCity(e.target.value)} value = {city} 
                haslabel label='*Cidade' top='mt-5'
                >
                <option key = 'init'>Selecione a cidade</option>
                {CityValues.estados.find((city) => city.nome == state)?.cidades.map((cities, index) => (
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
              onChange={(e) => setImgs(e.target.value)}        
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
              onClick={() => register()}
            >
                CADASTRAR
            </Button>

          </div>
        </div>      
      </div>  
    </div>  
  )
}
