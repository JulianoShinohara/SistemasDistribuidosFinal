import { HStack } from "@chakra-ui/react";
import React from "react"
import { IPlace } from "../../models/IPlace";

interface IPlaceProps {
  place: IPlace;
}
export default function Commentary({place}: IPlaceProps) {
  
  return (
    <div className="p-2">     
          <h1 className="text-black">
            <b>Comentário: </b>{place.commentary}
          </h1>
          <HStack >
            <h1>Criado: </h1>
            <div className="flex justify-end">
              <button className="bg-warning font-semibold rounded-lg text-sm p-1">excluir</button>
            </div>

          </HStack>
    </div>
  )
}
