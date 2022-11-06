import React from "react"
import { Button } from "../../components/Button";

export default function Header() {

  
  return (
    <div className="absolute w-full bg-cover bg-header p-5 flex justify-between">
     
      <div className="h-28 w-28 bg-cover bg-teste "/> 

      <div className="flex items-center">       
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
