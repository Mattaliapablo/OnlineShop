import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import ItemDetailContainer from "../../ItemDetailContainer/ItemDetailContainer"


  function Items() {
    
    return (
      <>
      <ItemDetailContainer/>
       </>
    );
  }

export default Items;
