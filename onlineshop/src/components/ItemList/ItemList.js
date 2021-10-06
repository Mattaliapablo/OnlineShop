import React, {useState,useEffect} from 'react'
import Item from '../Item/Item';
import data from '../Data/Data'
import { useParams } from 'react-router';


const ItemList = () => {
  const [products,setProducts]= useState([])
  const {category} = useParams();

          const listProducts = new Promise((resolve) => {
          setTimeout(() => {
        
            resolve(data);
          }, 2000);

      });


      useEffect(() => {

        listProducts.then((res) => {
          console.log('respuesta: ', res);
          if(category) {
            setProducts(res.filter(product => product.category === category));
          }else{
            setProducts(res)
          }
        });
      
      }, [category])


          


  return (
    <>
    
    <div className="container text-center mt-5">
			 
				{products.length !==0 ? (
          products.map(products => <Item key={products.id} {...products} />)
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      ) }
					
					 

		</div>
    </>
  )
}

export default ItemList