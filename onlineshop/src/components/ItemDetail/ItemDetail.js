import React, { useState } from "react";
import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";



function ItemDetail(props) {
  const [stock, setStock] = useState(props.data[0].stock);
  const [items, setItems] = useState(1);
  const [text,setText] = useState();

  const showName = (texto) => {
      setText(texto)
  }


  const onAdd = () => {
    if(items < stock){
    setItems(items + 1)
    setStock(props.data[0].stock)
    }
    
  }

  const onLess = () => {
    if(items !== 0){
    setItems(items - 1)
    setStock(props.data[0].stock)
    }
    
  }


    return (
<>


<div className="container">
 <div className="row presentacion">
 
 <div className="col-6">
   
   <img class="img-fluid" src={props.data[0].pictureUrl}/>
 </div>

 <div className="col-6 text-left "> 
 <h3 className="text-left">{props.data[0].title}</h3><hr/>
   <h3>${props.data[0].price}.-</h3>
   <span className="text-muted">Stock disponible: {props.data[0].stock}</span><br/>
   <span className="text-muted">     {props.data[0].description} </span><br/>
   <br/>
   <p>{text}</p>
   <ItemCount onAdd={onAdd} onLess={onLess} quantity={items} showName={showName}/><br/>
   <h5 className="devolucion text-center d-none d-md-block">Devolucion grátis</h5>
   <p className="devolucion text-center d-none d-md-block">Tenés 30 días desde que lo recibís</p>
 </div> 
 </div> 
 </div>
 </> 
          
    );
  }


   export default ItemDetail;


//    import React from "react";
// import { useParams } from "react-router";
// import ItemCount from "../ItemCount/ItemCount";



// function ItemDetail(props) {


//     return (
// <>


// <div className="container">
//  <div className="row presentacion">
 
//  <div className="col-6">
   
//    <img class="img-fluid" src={props.data[0].pictureUrl}/>
//  </div>

//  <div className="col-6 text-left "> 
//  <h3 className="text-left">{props.data[0].title}</h3><hr/>
//    <h3>${props.data[0].price}.-</h3>
//    <span className="text-muted">Stock disponible: {props.data[0].stock}</span><br/>
//    <span className="text-muted">     {props.data[0].description} </span><br/>
//    <br/>
//    <ItemCount stock={props.data[0].stock}/><br/>
//    <button className="btn btn-dark mt-5" type="submit">Comprar</button><br/><br/>
//    <h5 className="devolucion text-center d-none d-md-block">Devolucion grátis</h5>
//    <p className="devolucion text-center d-none d-md-block">Tenés 30 días desde que lo recibís</p>
//  </div> 
//  </div> 
//  </div>
//  </> 
          
//     );
//   }


//    export default ItemDetail;
  