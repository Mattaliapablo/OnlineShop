// import CartWidget from './CartWidget';
import React from "react";
import { Link, NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { useParams } from "react-router";

import '../Navbar/NavBar.css';

function NavBar() {


const {categoryId} = useParams();


    return (
      
    <>
        <nav className="navbar navbar-expand-lg navbar-dark navb">
        <div className="container-fluid">
        <Link className="text" to="/"> <button className="btn navbar-brand logo" >OnlineShop</button></Link>
          <button className="navbar-toggler borde" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-end aa">
              <NavLink className="text" to="/" activeClassName="active"><button className="btn nav-link" aria-current="page">INICIO</button></NavLink>
              <NavLink className="text" to={`/category/remera`} activeClassName="active"><button className="btn nav-link" >REMERAS</button></NavLink>
              <NavLink className="text" to={`/category/campera`} activeClassName="active"><button className="btn nav-link " >CAMPERAS</button></NavLink>
              <NavLink className="text" to={`/category/zapatilla`} activeClassName="active"><button className="btn nav-link" >ZAPATILLAS</button></NavLink>
              <CartWidget/>
            </div>
          </div>
        </div>
      </nav>
      </>
      
    );
  }
  
  export default NavBar;