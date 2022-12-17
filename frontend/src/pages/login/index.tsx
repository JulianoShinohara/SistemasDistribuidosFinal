import 'remixicon/fonts/remixicon.css';
import React, { useState } from "react";
import { divGeneral, textTitle } from './styles';
import { ButtonGitHub } from '../../components/ButtonGitHub';
import { signIn, useSession } from 'next-auth/client';
import { Spinner } from '@chakra-ui/react';

export default function Login() { 
  const [loading, setLoading] = useState(false);
  const [session] = useSession();

  async function handleSignIn() {
    setLoading(true);
    localStorage.setItem('userId', Math.random().toString());
    await signIn('github', { callbackUrl: '/PesquisarLocais' }).finally(() => {
      setLoading(false);
    })
  }

  async function handleSignInGoogle() {
    setLoading(true);
    localStorage.setItem('userId', Math.random().toString());
    await signIn('google', { callbackUrl: '/PesquisarLocais' }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <div>
      <div className="fixed w-full bg-cover bg-header p-5 flex justify-between">     
      <div className="h-28 w-28 bg-cover bg-teste "/>        
    </div>
     
      <div className={divGeneral}>
        <div className='bg-white p-5 rounded-lg w-471'>
          <h1 className={textTitle}>Login</h1>
         
          <div className='pt-5'>       
            <ButtonGitHub 
              type="submit" 
              icon={!loading ? 'ri-github-fill' : ''} 
              bg='bg-textTitle' 
              rounded='rounded-lg' 
              w='w-full' 
              h='h-12' 
              textColor='text-white' 
              textWeight='font-bold'
              onClick = {handleSignIn}
            >
              {loading ? <Spinner size='sm'/> : <span className='mb-2 text-3xl'>GitHub</span>}
            </ButtonGitHub>                
          </div> 

          <div className='pt-5'>       
            <ButtonGitHub 
              type="submit" 
              icon={!loading ? 'ri-google-line' : ''} 
              bg='bg-textTitle' 
              rounded='rounded-lg' 
              w='w-full' 
              h='h-12' 
              textColor='text-white' 
              textWeight='font-bold'
              onClick = {handleSignInGoogle}
            >
              {loading ? <Spinner size='sm'/> : <span className='mb-2 text-3xl'>Google</span>}
            </ButtonGitHub>                
          </div> 
        </div>
      </div>      
    </div>  
  )
}
