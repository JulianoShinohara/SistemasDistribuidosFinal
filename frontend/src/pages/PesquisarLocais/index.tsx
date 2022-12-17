import 'remixicon/fonts/remixicon.css';
import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { divGeneral } from "./styles"
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Place from '../../components/Place';
import { IPlace } from '../../models/IPlace';
import api from '../../services/api';

export default function Search() {
  const router = useRouter();
  const [place, setPlace] = useState<IPlace[]>([] as IPlace[]);

  async function getPlace() {
    try {
      const response = await api.get('/places/all');
      console.log(response.data)
      if(router.query && 
        router.query.city as string && 
        router.query.state as string
      ) {
        const filteredPlaces = response.data.filter((place: IPlace) => 
          place.address &&
          (place.address.city).toLowerCase() === (router.query.city as string).toLowerCase() &&
          (place.address.state).toLowerCase() === (router.query.state as string).toLowerCase());
        setPlace(filteredPlaces);
      } else if(router.query &&  
        router.query.state as string) {
        const filteredPlaces = response.data.filter((place: IPlace) => 
          place.address &&
          (place.address.state).toLowerCase() === (router.query.state as string).toLowerCase());
        setPlace(filteredPlaces);
      } else {
        setPlace(response.data);
      }
    } catch { }
  }

  useEffect(() => {
    getPlace();
  }, [router.query]);

  return (
    <div>
      <Header/>
      <Sidebar/>

      <div className={divGeneral}>   
        {place.map((place, i) => (
          <Place key={i} place={place}/>
        ))}
      </div>  
    </div>  
  )
}
