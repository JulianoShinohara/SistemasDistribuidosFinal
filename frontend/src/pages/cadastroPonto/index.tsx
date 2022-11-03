import React, { useCallback, useState } from "react"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { Stack } from "../../components/Stack"
import CityValues from '../../contents/city';
import { divGeneral, divInput, divRegister, textTitle } from "./styles"

export default function Teste() {
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>(''); 

  const handleUF = useCallback((state:string) => {
    setState(state)
  }, [])
  
  const handleCity = useCallback((city:string) => {
    setCity(city)
  }, [])
    
  return (
    <Stack bg='bg-white'>      
      <div className={divGeneral}>
        <div className={divRegister}>
          <h1 className={textTitle}>Cadastro de ponto turistico</h1>

          <Input 
            haslabel 
            label='Nome' 
            placeholder='nome do local' 
            top='mt-5'
          />
          <div className={divInput}>
            <Input 
              haslabel 
              label='Endereço' 
              placeholder='endereço' 
              top='mt-5'
            />

            <Input 
              haslabel 
              label='Complemento' 
              placeholder='complemento' 
              top='mt-5'
            />

          </div>


          <div className={divInput}>
            <Select onChange = {(e) => handleUF(e.target.value)} value = {state} 
                haslabel label='Estado' top='mt-5'
                >
                <option key = 'init'>Selecione o Estado</option>
                {CityValues.estados.map((uf, index) => (
                    <option key ={index.toString()} value = {uf.nome}>{uf.nome}</option>
                ))}
            </Select>
            <Select onChange = {(e) => handleCity(e.target.value)} value = {city} 
                haslabel label='Cidade' top='mt-5'
                >
                <option key = 'init'>Selecione a cidade</option>
                {CityValues.estados.find((city) => city.nome == state)?.cidades.map((cities, index) => (
                    <option key ={index.toString()}  value = {cities}>{cities} </option>
                ))}
            </Select>
          </div>
          
          <div className="pt-12">
            <Button 
              bg='bg-textTitle' 
              rounded='rounded' 
              w='w-full' 
              h='h-16' 
              textColor='text-white' 
              textWeight='font-bold'
            >
                CADASTRAR
            </Button>

          </div>
        </div>      
      </div>  
    </Stack>
  )
}
