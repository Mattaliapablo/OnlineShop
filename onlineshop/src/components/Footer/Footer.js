import React from "react";

import '../Footer/Footer.css'

import img1 from '../docs-src/whatsappfooter.png';
import img2 from '../docs-src/placesfooter.png';
import img3 from '../docs-src/facebookfooter.png';
import img4 from '../docs-src/instagramfooter.png';

import img5 from '../docs-src/maletin-en-circulo.png'
import img6 from '../docs-src/tarjeta-de-credito.png'
import img7 from '../docs-src/avion-de-papel.png'

function Footer() {


    return (
<>
<div className="container-fluid footer mt-5">
      
      <div className="row">
        <div className="col-12 col-xl-4 logo">
          <h1>OnlineShop</h1>
        </div>
        <div className="col-12 col-xl-4 " >
          <p><img src={img6} className="img-fluid" alt="tarjeta footer"/>Formas de pago - 
            Efectivo | Transferencia</p>
          <p><img src={img7} className="img-fluid" alt="envios footer"/>Envío gratis - 
            A todo el país</p>
          <p><img src={img5} className="img-fluid" alt="ventas footer"/>Ventas mayoristas -
            Consultar precios</p>
        </div>
        <div className="col-12 col-xl-4 iconos-footer mt-3">
          <a href=""> <img src={img4} alt=""/></a>
          <a href="" target="_blank"> <img src={img3} alt=""/></a>
          <a href="" target="_blank"> <img src={img2} alt=""/></a>
          <a href="" target="_blank"> <img src={img1} alt=""/></a>
        </div>
      </div>
    
  </div>

</> 
          
    );
  }


   export default Footer;