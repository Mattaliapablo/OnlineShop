import React, {useState,useEffect} from 'react'
import Item from '../Item/Item';
import { useParams } from "react-router";



const ItemList = () => {
  const [products,setProducts]= useState([])
  const {catId} = useParams ()  

          const listProducts = new Promise((resolve) => {
          setTimeout(() => {
            const data = [{
              id: '1',
              title: 'Remera Nike',
              description:'aaaaa aas sdasd assd',
              price: 1300,
              stock:5,
              pictureUrl: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/5/1/510020ck2379010-1.jpg',
              category:'remera'
            },
            {id: '2',
              title: 'Campera Nike',
              description:'aaaaa aas sdasd assd',
              price: 1200,
              stock:10,
              pictureUrl: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/c/a/campera-con-capucha-nike-print-mujer-gris-510020cj2022050-1.jpg',
              category:'campera'
            }, 
            { id: '3',
            title: 'Zapatilla Nike',
            description:'Zapatilla Fresh Foam Cruz v2 Sport ',
            price: 300,
            stock:15,
            pictureUrl: 'https://cdn.shopify.com/s/files/1/1161/3498/products/11-2_1_5723f2b6-71ae-496d-8476-0a7362e5e3cc_medium.progressive.png.jpg',
            category:'zapatilla'
          },
          { id: '4',
          title: 'Zapatilla Nike',
          description:'Zapatilla Fresh Foam Cruz v2 Sport ',
          price: 300,
          stock:7,
          pictureUrl: 'https://cdn.shopify.com/s/files/1/1161/3498/products/11-2_1_5723f2b6-71ae-496d-8476-0a7362e5e3cc_medium.progressive.png.jpg',
          category:'zapatilla'
        }
          ]
            resolve(data);
          }, 2000);

      });


useEffect(() => {

  listProducts.then((res) => {
    console.log('respuesta: ', res);
  setProducts(res);
  });

}, [])
          


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