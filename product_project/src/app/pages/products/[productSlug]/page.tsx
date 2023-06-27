import { medusa } from "@/app/requests/medusaClient";
import { useState, useEffect } from "react";
import { Product} from "@/app/models/productModel";
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, InferGetStaticPropsType } from "next";

type Repo = {
    params:{
        productSlug:string;
    }
}

export default function ProductPage({product}:InferGetStaticPropsType<typeof getStaticProps>){
   

    return (
        <>  
        <h1>Product details</h1>
        <div>
            <h2>{product}</h2>
        </div>

      
        </>
    )
}

export const getStaticPaths:GetStaticPaths = async() =>{
    
    const response = await medusa.products.list();
    console.log(response.products);

    const paths = response.products.map((product:Product) => {
        return {
            params: {
                productSlug: product.id
            }
        }
    })
        console.log(paths);
    return {
        paths,
        fallback:false
    }
}
export const getStaticProps:GetStaticProps = async(context:any) =>{
    const id=context.params.productSlug;
    console.log('id', id);
    const response = await medusa.products.retrieve(id);
    console.log(response);
    
    return {
        props: {
            product:response
        }
    }
  }