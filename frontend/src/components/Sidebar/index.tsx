import React, { useCallback, useState } from 'react';
import { Select } from '../Select';
import CityValues from '../../contents/city';
import { divGeneral, divInput, divInput2, line, textTitle } from './styles';
import { Button } from '../Button';
import router from 'next/router';
import { InfoNavSection } from './InfoNavSection';
import { signOut, useSession } from 'next-auth/client';

export default function Sidebar() { 
    const [session] = useSession();
    const [state, setState] = useState<string>('');
    const [city, setCity] = useState<string>(''); 

    const handleUF = useCallback((state:string) => {
    setState(state)
    }, [])

    const handleCity = useCallback((city:string) => {
    setCity(city)
    }, [])

    const logout = useCallback(() => {
        signOut({ callbackUrl: '/' });
    }, []);

    function goRegistration() {
        router.push('/cadastrarPonto')
    }
      
    return ( 
        <div className={divGeneral}> 
            <div className={line}>
                <div className={divInput2}>
                    <Button 
                        bg='bg-textTitle' 
                        rounded='rounded-none' 
                        w='w-full' 
                        h='h-12' 
                        textColor='text-white' 
                        textWeight='font-semibold'
                        onClick={goRegistration}
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

                <div className={divInput2}>
                    <div className='pt-10'>
                        <Button 
                        bg='bg-textTitle' 
                        rounded='rounded-none' 
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
            <InfoNavSection 
                email={session ? session.user.email as string : ''} 
                name={session ? session.user.name as string: ''} 
                logout={logout} 
            />
        </div>
    );
}