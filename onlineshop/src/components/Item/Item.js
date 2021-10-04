import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import '../Item/Item.css';

const Item = ({
  id,
  title,
  description,
	price,
	pictureUrl,
	stock
	}) => (


    <div className="carta col-4 mb-5" >
       <Link to={`/item/${id}`}><img src={pictureUrl} alt="imagen"/></Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
          <b><p className="card-text">$ {price} .-</p></b>
          <p>Stock: {stock}</p>  
          <ItemCount stock={stock}/>               
        </div>
    </div>


)

export default Item