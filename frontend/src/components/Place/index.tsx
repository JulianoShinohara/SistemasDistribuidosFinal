import 'remixicon/fonts/remixicon.css';
import React, { useState } from "react"
import { divPlace, textLocation, textNameOfPlace } from './styles';
import { IPlace } from '../../models/IPlace';
import router from 'next/router';

interface IPlaceProps {
  place: IPlace;
}
function goSeeMore(id: string) {
  router.push(`/lugar/${id}`)
}

export default function Place({place}: IPlaceProps) {
  return (
    <button onClick={() => goSeeMore(place.id)} className={divPlace}>
      <h1 className={textNameOfPlace}>{place.name}</h1>        
            
      <h2 className={textLocation}>{place.address?.city ? place.address?.city : 'Cidade'} - {place.address?.state ? place.address?.state : 'Estado'}</h2>
      
      <div className='w-full h-full bg-black rounded-lg' >
        
      </div>
    </button>
  )
}
