import 'remixicon/fonts/remixicon.css';
import React from "react"
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
      
      <div 
        className='w-full h-full bg-cover rounded-lg'
        style={{
          backgroundImage: `url(${place.images.length > 0 ? place.images[0]?.image : 'https://images.unsplash.com/photo-1653161752453-0e00805678b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'})`
        }}
      />
    </button>
  )
}
