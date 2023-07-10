/* eslint-disable @next/next/no-img-element */


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

        
        <div className="container lg:max-w-screen-lg mx-auto py-12 px-6 bg-my_bg_image" >
            <div className="flex flex-col md:flex-row justify-around items-center space-y-12 md:space-y-0 md space-x-12">
            
               
                             <div className=" w-80 h-96 sm:w-50 sm:h-68">
                                 <img 
                                 src={product.product.thumbnail} 
                                 alt={product.product.title} 
                                 className="w-80 h-96"
                                style={{
                                    objectFit:'contain'
                                }}
                                
                                        />
                             </div>
            
             <div className="w-full flex-1 max-w-md">
             <h2 className="font-semibold text-center text-4xl text-gray-900">{product.product.title}</h2>
                             <div className="price px-6 py-6 ">
                             <h2 className="text-xl font-semibold"><strong className="text-2xl">Price: </strong>{product.product.variants[0]?.prices[1]?.amount}€ / ${product.product.variants[0]?.prices[0]?.amount}</h2>
                    
                             </div>
                             <div className="px-6">
                                <ProductVarients product={product.product}/>
                             </div>
                             <div className="description px-6 py-6">
                                 <strong className="text-xl">Product description: </strong>
                                 <p className="product-info">
                                     {product.product.description}
                                 </p>
                             </div>
                </div>
                         </div>
                         </div>   
        </>
    )
}