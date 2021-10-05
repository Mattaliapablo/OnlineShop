import React,{useState,useEffect} from "react";
import { Router } from "react-router";

import ItemDetail from "../ItemDetail/ItemDetail";
import data from '../Data/Data'




function ItemDetailContainer() {
const [infoProduct,setInfoProduct] = useState()
const getProduct = new Promise ((resolve)=>{

    setTimeout(()=>{
        resolve(data)
    },2000)
})

useEffect(()=>{
    getProduct.then((response)=>{
        setInfoProduct(response);
    })
},[])









    return (
        
	
        <div className="detail-container mt-5">
            { infoProduct && <ItemDetail data={infoProduct}/>}
        </div>
            
    );
  }


   export default ItemDetailContainer;
  