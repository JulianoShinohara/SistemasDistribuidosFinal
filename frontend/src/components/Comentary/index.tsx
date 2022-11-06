import React from "react"
import { IPlace } from "../../models/IPlace";

interface IPlaceProps {
  place: IPlace;
}
export default function Comentary({place}: IPlaceProps) {
  
  return (
    <div className="p-2">     
          <h1 className="text-black">
            <b>Comentário: </b>{place.comentary}
          </h1>
    </div>
  )
}
