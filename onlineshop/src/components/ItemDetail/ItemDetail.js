import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'


function ItemDetail(props) {

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
   <ItemCount stock={props.data[0].stock}/><br/>
   <button className="btn btn-dark mt-5" type="submit">Comprar</button><br/><br/>
   <h5 className="devolucion text-center d-none d-md-block">Devolucion grátis</h5>
   <p className="devolucion text-center d-none d-md-block">Tenés 30 días desde que lo recibís</p>
 </div> 
 </div> 
 </div>
 </> 
          
    );
  }


   export default ItemDetail;
  