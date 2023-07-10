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

 const defaultValues: Record<string, any>= {}
 defaultValues[filteredArray[0]]=filteredArray[0];

console.log('default', defaultValues);

const [selectedOptions, setSelectedOptions]=useState( defaultValues);

function setOptions(value:string) {
    setSelectedOptions(prevState => {    
        return {prevState,[value]:value}
    })

    console.log('setOptions', selectedOptions);
}

    return (
        <>
        <div>
            <h2><strong className="text-xl">Choose</strong></h2>
            <div className="inline-flex items-center flex-wrap">
    
          
                        
                        {filteredArray.map((item:any, iden:number) => {
                            
                            const id=`option-${item}`
                            const checked = selectedOptions[item] === item
                            


                            return(
                                <label key={iden} htmlFor={id}>
                                    <input
                                    className="sr-only"
                                    id={id}
                                    type='radio'
                                    name={item}
                                    value={item}
                                    checked={checked}
                                    
                                    onChange={() => {
                                        setOptions(item)
                                    }}
                                    
                                    />
                                    <div className={`p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 ${checked ? 
                                    "text-white bg-gray-900" : "text-gray-900 bg-gray-200"}`}>
                                        <span className="px-2">{item}</span>

                                    </div>

                                </label>
                            )
                        }
                    

                    
                        )}

                    </div>
             
           
            </div>
        
        </>
    )
}




