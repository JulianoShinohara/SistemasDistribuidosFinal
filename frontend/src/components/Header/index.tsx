import React from "react"
import { Button } from "../../components/Button";

export default function Header() {

  return (
    <div className="absolute w-full bg-cover bg-black p-5">
     
        <div className="w-5 h-5 bg-no-repeat bg-logo"/>

        <div className="text-right">
          <Button 
            bg='bg-textTitle' 
            rounded='rounded-full' 
            w='w-64' 
            h='h-12' 
            textColor='text-white' 
            textWeight='font-semibold'
          >
              Voltar para tela incial
          </Button>
        </div>
     
    </div>
  )
}
