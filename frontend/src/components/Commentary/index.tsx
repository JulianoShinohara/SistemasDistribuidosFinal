import { HStack } from "@chakra-ui/react";
import React from "react"
import { ICommentary } from "../../models/ICommentary";
import { format } from 'date-fns';

interface ICommentaryProps {
  commentary: ICommentary;
  excludeCommentary: (id: string) => void;
  userId: string;
}
export default function Commentary({commentary, excludeCommentary, userId}: ICommentaryProps) {
  
  return (
    <div className="p-2">     
          <h1 className="text-black">
            <b>{commentary.commentary.split('*t*u*r/GABY/*t*u*r/')[0]}: </b>{commentary.commentary.split('*t*u*r/GABY/*t*u*r/')[2]}
          </h1>
          <HStack justifyContent='space-between'>
            <h1 className="text-sm">Criado: {format(new Date(commentary.createdAt), 'dd/MM/yyyy')}</h1>
            {commentary.commentary.split('*t*u*r/GABY/*t*u*r/')[1] === userId && <div className="flex justify-end">
              <button className="bg-warning font-semibold rounded-lg text-sm p-1" onClick={() => excludeCommentary(commentary.id)}>excluir</button>
            </div>}

          </HStack>
    </div>
  )
}
