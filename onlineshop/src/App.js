import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';

import NavBar from './components/Navbar/NavBar';
import Categories from './components/Pages/Categories/Categories';
import Home from './components/Pages/Home/Home';
import Items from './components/Pages/Items/Items';


  function App() {
    
    return (
      <BrowserRouter>
        {/* NAVBAR */}
        <NavBar/>
        
        <Switch>
          
          <Route exact path="/">
              {/* <Home/> */}
                <Home/>
          </Route>

          <Route exact path="/category/:id">
            <Categories/>
          </Route>

          <Route exact path="/item/:id">
            <Items></Items>
          </Route>

          {/* PARA MOSTRAR SI ALGUNA DE LAS RUTAS NO EXISTE */}
          <Route path="*">
            {/* PARA REDIRIGIR */}
            <h1>NO SE ENCUENTRA LA URL INGRESADA</h1>
            <Redirect to="/"/>
          </Route>
        </Switch>

        {/* FOOTER */}
        <Footer/>
      </BrowserRouter>
    );
  }

export default App;
