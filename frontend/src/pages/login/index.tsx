import 'remixicon/fonts/remixicon.css';
import React, { useEffect, useState } from "react"
import router from 'next/router';
import Header from '../../components/Header';
import { Button } from '../../components/Button';
import { divGeneral, textTitle } from './styles';
import {signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';


export default function Login() { 

  return (
    <div>
      <Header/>
     
      <div className={divGeneral}>
        <div className='bg-white p-5 rounded-lg w-471'>
          <h1 className={textTitle}>Login</h1>

          <h1 className='font-normal text-3xl mt-3'>Entre com</h1>                

          <div className='pt-5'>
       
              <Button 
                type="submit" 
                icon='ri-github-fill' 
                bg='bg-textTitle' 
                rounded='rounded-lg' 
                w='w-full' 
                h='h-12' 
                textColor='text-white' 
                textWeight='font-bold'
                onClick = {() => signIn('github')}
                >
                  GITHUB
              </Button>  
              
          </div> 
        </div>
      </div>      
    </div>  
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
 /*  const session = await getSession(context); */

 
  return {
    props: {
      user: 'Gaby'
    }
  }

}
