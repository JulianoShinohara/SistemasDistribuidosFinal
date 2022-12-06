import 'remixicon/fonts/remixicon.css';
import React, { useCallback, useEffect, useState } from "react"
import router from 'next/router';
import { divGeneral } from "./styles"
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Place from '../../components/Place';
import { IPlace } from '../../models/IPlace';

export default function Search() {
  const [place, setPlace] = useState<IPlace[]>([] as IPlace[]);

  function getPlace(){
    setTimeout(() => {
      setPlace([
       { id: '1',
        name: 'Praia de Gravata ',
        city: 'Navegantes' ,
        state: 'SC',
        image: '',
        commentary: 'ggfg',
        address: 'gfgfg',
      },
      { id: '1',
        name: 'Praia de Gravata ',
        city: 'Navegantes' ,
        state: 'SC',
        image: '',
        commentary: 'ggfg',
        address: 'gfgfg',
      },
      { id: '1',
        name: 'Praia de Gravata ',
        city: 'Navegantes' ,
        state: 'SC',
        image: '',
        commentary: 'ggfg',
        address: 'gfgfg',
      },
      { id: '1',
        name: 'Praia de Gravata ',
        city: 'Navegantes' ,
        state: 'SC',
        image: '',
        commentary: 'ggfg',
        address: 'gfgfg',
      },
      { id: '1',
        name: 'Praia de Gravata ',
        city: 'Navegantes' ,
        state: 'SC',
        image: '',
        commentary: 'ggfg',
        address: 'gfgfg',
      },
      { id: '1',
        name: 'Praia de Gravata ',
        city: 'Navegantes' ,
        state: 'SC',
        image: '',
        commentary: 'ggfg',
        address: 'gfgfg',
      },
      { id: '1',
        name: 'Praia de Gravata ',
        city: 'Navegantes' ,
        state: 'SC',
        image: '',
        commentary: 'ggfg',
        address: 'gfgfg',
      },
      { id: '1',
        name: 'Praia de Gravata ',
        city: 'Navegantes' ,
        state: 'SC',
        image: '',
        commentary: 'ggfg',
        address: 'gfgfg',
      },
      { id: '1',
        name: 'Praia de Gravata ',
        city: 'Navegantes' ,
        state: 'SC',
        image: '',
        commentary: 'ggfg',
        address: 'gfgfg',
      }

      ])
    })
  }

  useEffect(() => {
    getPlace();
  }, []);

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
