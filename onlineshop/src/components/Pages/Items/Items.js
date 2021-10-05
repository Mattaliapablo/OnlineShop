import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import ItemDetailContainer from "../../ItemDetailContainer/ItemDetailContainer"
import {useParams} from 'react-router-dom'
import datos from '../../Data/Data'

  function Items() {
    //  const {id} = useParams();
    //  const {data,setData} = useState([])
    
    //  useEffect(()=>{
      
    //   const datos_filtrados = data.filter(data => data.id === id)
    //    setData(datos_filtrados)
    //  },[])

    return (
      <>
      <ItemDetailContainer />
       </>
    );
  }

export default Items;
