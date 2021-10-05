import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from '../Data/Data'




function ItemDetailContainer() {
const [infoProduct,setInfoProduct] = useState()
const {id} = useParams();
console.log("use params id : ", id)
const getProduct = new Promise ((resolve)=>{

    setTimeout(()=>{
        resolve(data)
    },2000)
})

useEffect(()=>{
    getProduct.then((response)=>{
        setInfoProduct(response)
        setInfoProduct(response.filter(product => product.id === id))
    })
},[])









    return (
        
        <div className="container text-center mt-5">
      
	{infoProduct !== 0 ? (
       <div className="detail-container mt-5">
            { infoProduct && <ItemDetail data={infoProduct}/>}
        </div>
      ) : (
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      )}
        
          </div>  
    );
  }


   export default ItemDetailContainer;
  