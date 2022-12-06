import 'remixicon/fonts/remixicon.css';
import React, { useState } from "react"
import { divPlace, textLocation, textNameOfPlace } from './styles';
import { IPlace } from '../../models/IPlace';
import router from 'next/router';

interface IPlaceProps {
  place: IPlace;
}
function goSeeMore() {
  router.push('/lugar')
}
export default function Place({place}: IPlaceProps) {
  return (
    <button onClick={goSeeMore} className={divPlace}>
      <h1 className={textNameOfPlace}>{place.name}</h1>        
            
      <h2 className={textLocation}>{place.city} - {place.state}</h2>
      
      <div className='w-full h-full bg-black rounded-lg' >
        
      </div>
    </button>
  )
}
