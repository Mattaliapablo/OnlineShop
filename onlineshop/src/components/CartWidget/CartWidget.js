import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

 function CartWidget() {
     return (
 
         <button className="btn">
         <FontAwesomeIcon className="cart-widget" icon={faShoppingCart} color="gray"/>
         <p className="contador-carrito"></p>
        </button>
      
      
     );
   }
  
   export default CartWidget;