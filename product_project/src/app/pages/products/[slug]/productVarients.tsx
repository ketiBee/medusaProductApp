"use client"

import { Product } from "@/app/models/productModel"
import { useState } from "react";

interface ProductProps {
    product:Product;
}

export default function ProductVarients ({product}: ProductProps) {
    
    console.log(product)
    const defaultValuesOptions = product.variants.map(variant => {
        const defaultValuesOptions: Record<string, any>= {}
    
        variant.options.map(item => {
            defaultValuesOptions[item.value]=item.value;
        })

        return{
            value:defaultValuesOptions
        }
    })
     

   


const [selectedOptions, setSelectedOptions]=useState( defaultValuesOptions[0].value);


console.log('defaultValuesOptions', defaultValuesOptions[0].value);
  

const filtered = product.variants.map(variant => variant.options)

var newArray: string[] = [];
const uniqueValues = filtered.map(item => {
    item.map(element => {
        newArray.push(element.value);
    })
})




function deduplicate(newArray:string[]){
    return Array.from(new Set(newArray).values());
}

 const filteredArray = deduplicate(newArray);
 console.log(filteredArray);



function setOptions(value:string) {
    setSelectedOptions(prevState => {    
        return {prevState,[value]:value}
    })

    console.log('setOptions', selectedOptions);
}

    return (
        <>
        <div>
            <h2><strong className="text-xl">Choose Size</strong></h2>
            <div className="inline-flex items-center flex-wrap">
    
            {product.variants.map((variant:any, id:number) => {
                return(
                    <div  key={id}>
                        
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




