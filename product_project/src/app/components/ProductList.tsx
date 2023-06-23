"use client";

import { useEffect, useState } from "react";
import { Product } from "../models/productModel";
import * as MedusaApiReq from "../medusaApiReq"
import { medusa } from "../requests/medusaClient";

export function ProductList():JSX.Element {

    const [productList, setProductList] = useState<Product[]>([]);

    useEffect(() => {
        const product = async () => {
            const response = await medusa.products.list();
            setProductList(response.products)
        }

        product();
    }, [])

  
    return(
        <>
        {productList.map((prodList:Product, key:number) => (
            <div key={key}>
                <p>{prodList.title}</p>
            </div>
        ))}
        </>
    )
}