import React, {useState} from "react";
import { useParams } from "react-router";
import Carousel from "../../Carousel/Carousel";
import Carts from "../../Carts/Carts";
import ItemListContainer from "../../ItemListContainer/ItemListContainer";


function Home() {
    

    return (
<>
        <Carousel/>
        <Carts/>
        <ItemListContainer/>
</>            
    );
}


export default Home;
  