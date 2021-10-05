import React, {useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'
import {useParams} from "react-router-dom";

function ItemDetail(props) {


    return (
<>


<div className="container">
 <div className="row presentacion">
 
 <div className="col-6">
   
   <img class="img-fluid" src={props.data.pictureUrl}/>
 </div>

 <div className="col-6 text-left "> 
 <h3 className="text-left">{props.data.title}</h3><hr/>
   <h3>${props.data.price}.-</h3>
   <span className="text-muted">Stock disponible: {props.data.stock}</span><br/>
   <span className="text-muted">     {props.data.description} </span><br/>
   <br/>
   <ItemCount stock={props.data.stock}/><br/>
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
  