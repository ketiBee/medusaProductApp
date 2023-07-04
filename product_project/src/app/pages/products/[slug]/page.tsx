

import { medusa } from "@/app/requests/medusaClient";
import { useState, useEffect, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from "react";
import { Product} from "@/app/models/productModel";
import { GetServerSideProps, GetStaticPaths, GetStaticPathsContext, GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage, NextPageContext } from "next";
import { ParsedUrlQuery } from "querystring";
import ProductVarients from "@/app/pages/products/[slug]/productVarients";

interface PageParams  {
    slug:string;
}
interface PageProps {
    params: PageParams
}

async function getProduct(id:string) {
   /* const response = await medusa.products.list();
    
    return response.products.filter((product:Product) => product.id===id);*/

    const res = await fetch(`http://localhost:9000/store/products/${id}`)
    const data = await res.json()

    return data;
    
    
}
export async function generateStaticParams(){
    const response = await medusa.products.list();

    return response.products.map((product:Product) => {
        slug:product.id
    })
}

export default async function ProductPage ({params}: {params : {slug:string}}) {
    

    const product = await getProduct(params.slug);
    console.log(product);

    

    return (
        <>

        
        <div className="container" >
                             <div className="company">
                                 <h2>{product.product.title}</h2>
                             </div>
                             <div className="image-container">
                                 <img src={product.product.thumbnail} alt={product.product.title} 
                                        width={200} height={200}/>
                             </div>
                             <div className="price">
                                <h2><strong>Price: </strong>{product.product.variants[0]?.prices[1]?.amount}€ / ${product.product.variants[0]?.prices[0]?.amount}</h2>
                    
                             </div>
                             <div>
                                <ProductVarients product={product.product}/>
                             </div>
                             <div className="description">
                                 <strong>Product description: </strong>
                                 <p className="product-info">
                                     {product.product.description}
                                 </p>
                             </div>
                           
                         </div>
                 
        </>
    )
}