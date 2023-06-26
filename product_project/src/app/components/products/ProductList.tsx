"use client";

import { useEffect, useState } from "react";
import { Product } from "../../models/productModel";

import { medusa } from "../../requests/medusaClient";
import Image from "next/image"
const {v4: uuidv4} = require('uuid');

export function ProductList():JSX.Element {

    const [productList, setProductList] = useState<Product[]>([]);

    useEffect(() => {
        const product = async () => {
            const response = await medusa.products.list();
            
            setProductList(response.products)
        }

        product();
      
        
    }, )

  
  //console.log(productList);


  return (
  <>
    <div className="container">
      <div className="cont grid grid-cols-4 gap-4 flex space-x-1" >
        {productList.map((prod:Product, key:number) => (
          <div key={key}>
            <div className="img">
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                className="w-80 h-96"
                
                />
            </div>
            <div className="title justify-self-center">
                
                <p className="text-center font-medium">{prod.title}</p>
            </div>
          </div>
           ))}  
      </div>
     
    </div>

  </>
  
  )
   
  
    
}