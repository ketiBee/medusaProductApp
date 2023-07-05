"use client";

import { SetStateAction, useEffect, useMemo, useState } from "react";
import { Product } from "../../models/productModel";

import { medusa } from "../../requests/medusaClient";
import Image from "next/image"
import Link from "next/link";
import { resolve } from "path";
const {v4: uuidv4} = require('uuid');

export default function ProductList():JSX.Element {

    const [productList, setProductList] = useState<Product[]>([]);
    const [selectedCollection, setSelectedCollection]=useState();


    useEffect(() => {
        const product = async () => {
            const response = await medusa.products.list();
            
            

            response.products.map((product:Product) => {
              
              if(product.handle==="hoodie" || product.handle==="sweatshirt")
                  product.collection="sweatshirts";
              else if(product.handle === "shorts")
                  product.collection="shorts"
              else if(product.handle ==="t-shirt" || product.handle === "longsleeve")
                  product.collection="shirts"
              else if(product.handle ==="pants" || product.handle==="sweatpants")
                  product.collection="pants"
              else{
                  product.collection="other"
              }

              
                
            })
            
            setProductList(response.products)
           
            
        }

        product();
      
        
    }, )

    function handleCollectionChange(event: any) {
      setSelectedCollection(event.target.value);
    }

    function getFilteredList(){
      if(!selectedCollection){
        return productList;
      }

      return productList.filter((product) => product.collection===selectedCollection)
    }

    var filteredList = useMemo(getFilteredList, [selectedCollection, productList]);
  
  //console.log(productList);


  return (
  <>
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="filter-container">
        <div>Filter by collection</div>
        <div>
          <select
            name="collection-list"
            id="collection-list"
            onChange={handleCollectionChange}
          >
            <option value="">All</option>
            
            <option value="shirts">Shirts</option>
            <option value="shorts">Shorts</option>
            <option value="pants">Pants</option>
            <option value="sweatshirts">Sweatshirts</option>
            <option value="other">Other</option>
          </select>
        </div>

      </div>
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-2 grid-cols-1" >
        
        {filteredList.map((prod:Product) => (
          <Link href={"products/" + prod.id} key={prod.id} >
            <div className="img">
                <img
                  src={prod.thumbnail}
                  alt={prod.title}
                className="w-80 h-96"
                style={{
                  objectFit:'contain'
                }}
                
                />
            </div>
            <div className="p-6">
                
                <p className="font-semibold text-lg self-center">{prod.title}</p>
               
            </div>
          </Link>
           ))}  
           
      </div>
     
    </div>

  </>
  
  )
   
  
    
}