import React, { useCallback, useState } from 'react';
import { Select } from '../Select';
import CityValues from '../../contents/city';
import { divGeneral, divInput, line, textTitle } from './styles';
import { Button } from '../Button';

export default function Sidebar() { 
    const [state, setState] = useState<string>('');
    const [city, setCity] = useState<string>(''); 

    const handleUF = useCallback((state:string) => {
    setState(state)
    }, [])

    const handleCity = useCallback((city:string) => {
    setCity(city)
    }, [])

    return ( 
        <div className={divGeneral}> 
            <div className={line}>
                <div className={divInput}>
                    <Button 
                    bg='bg-textTitle' 
                    rounded='rounded' 
                    w='w-full' 
                    h='h-12' 
                    textColor='text-white' 
                    textWeight='font-semibold'
                    >
                        CADASTRAR PONTO TURISTICO
                    </Button>
                </div>
                <div className={divInput}>
                    <h1 className={textTitle}>Pesquisar Ponto de interesse</h1>
                    <Select onChange = {(e) => handleUF(e.target.value)} value = {state} 
                        haslabel label='Estado' top='mt-5'
                        >
                        <option key = 'init'>Selecione o Estado</option>
                        {CityValues.estados.map((uf, index) => (
                            <option key ={index.toString()} value = {uf.nome}>{uf.nome}</option>
                        ))}
                    </Select>
                    <Select onChange = {(e) => handleCity(e.target.value)} value = {city} 
                        haslabel label='Cidade' top='mt-8'
                        >
                        <option key = 'init'>Selecione a cidade</option>
                        {CityValues.estados.find((city) => city.nome == state)?.cidades.map((cities, index) => (
                            <option key ={index.toString()}  value = {cities}>{cities} </option>
                        ))}
                    </Select>
                </div>

                <div className={divInput}>
                    <div className='pt-10'>
                        <Button 
                        bg='bg-textTitle' 
                        rounded='rounded' 
                        w='w-full' 
                        h='h-14' 
                        textColor='text-white' 
                        textWeight='font-bold'
                        >
                            FILTRAR
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}