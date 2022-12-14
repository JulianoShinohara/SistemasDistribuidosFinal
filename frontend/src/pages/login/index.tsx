import 'remixicon/fonts/remixicon.css';
import React, { useEffect, useState } from "react"
import router from 'next/router';
import Header from '../../components/Header';
import { divGeneral, textTitle } from './styles';
import { GetServerSideProps } from 'next';
import { ButtonGitHub } from '../../components/ButtonGitHub';
import { signIn, useSession } from 'next-auth/client';
import { Spinner } from '@chakra-ui/react';

export default function Login() { 
  const [loading, setLoading] = useState(false);
  const [session] = useSession();

  async function handleSignIn() {
    setLoading(true);
    await signIn('github', { callbackUrl: '/PesquisarLocais' }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <div>
      <Header/>
     
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
        </div>
      </div>      
    </div>  
  )
}
