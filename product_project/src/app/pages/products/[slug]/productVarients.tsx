"use client"

import { Product } from "@/app/models/productModel"
import { useState } from "react";

interface ProductProps {
    product:Product;
}

export default function ProductVarients ({product}: ProductProps) {
    
    console.log(product);
    return (
        <>
        <h2>Product Varients</h2>
        </>
    )
}


