import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
 import Data from "../../Data/Data";
 import ItemList from '../../ItemList/ItemList'

function Categories() {
  const [infoProduct,setInfoProduct] = useState()
  const {category} = useParams();
  console.log("use params category : ", category)
  const getProduct = new Promise ((resolve)=>{

    setTimeout(()=>{
        resolve(Data)
    },2000)
})

useEffect(()=>{
    getProduct.then((response)=>{
        setInfoProduct(response)
        setInfoProduct(response.map(product => product.category === category))
    })
},[])


    


    return (
      <>
      <ItemList data={infoProduct}/>

    </>
    );
  }

export default Categories;
