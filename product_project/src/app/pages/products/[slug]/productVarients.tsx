"use client"

import { Product } from "@/app/models/productModel"
import { connect } from "http2";
import { Vazirmatn } from "next/font/google";
import { useState } from "react";

interface ProductProps {
    product:Product;
}

export default function ProductVarients ({product}: ProductProps) {
    
    console.log(product);
    const allVarientsOptions = product.variants?.map((variant) => {
        const allOptions: Record<string, any>= {}

        variant.options.map(item => {
            
            allOptions[item.value]=item.value;
        })

       return {
        options: allOptions
       } 
        
    })

    const defaultValues: Record<string, any>= {}

    defaultValues[product.variants[0].options[0].value]=product.variants[0].options[0].value
       
    

const[selectedVariant, setSelectedVariant]=useState(allVarientsOptions[0]);
const [selectedOptions, setSelectedOptions]=useState(defaultValues)


console.log('defaultValues', defaultValues);
console.log('allVariantsOptions', allVarientsOptions);  

function setOptions(value:string) {
    setSelectedOptions(prevState => {    
        return {[value]:value}
    })

    console.log('setOptions', selectedOptions);
}

    return (
        <>
        <div>
            <h2><strong>Choose Size</strong></h2>
            <div className="inline-flex items-center flex-wrap">
            {product.variants.map((variant:any, id:number) => {
                return(
                    <div key={id}>
                        {variant.options.map((item:any) => {
                            
                            const id=`option-${item.value}`
                            const checked = selectedOptions[item.value] === item.value
                            
                            return(
                                <label key={id} htmlFor={id}>
                                    <input
                                    className="sr-only"
                                    id={id}
                                    type='radio'
                                    name={item.value}
                                    value={item.value}
                                    checked={checked}
                                    
                                    onChange={() => {
                                        setOptions(item.value)
                                    }}
                                    
                                    />
                                    <div className={`p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 ${checked ? 
                                    "text-white bg-gray-900" : "text-gray-900 bg-gray-200"}`}>
                                        <span className="px-2">{item.value}</span>

                                    </div>

                                </label>
                            )
                        }
                        

                    
                        )}

                    </div>
                )
            })}
            </div>
        </div>
        </>
    )
}


