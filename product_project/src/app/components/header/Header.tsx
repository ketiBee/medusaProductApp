import { JsxElement } from "typescript";
import { ShoppingCartIcon} from '@heroicons/react/24/outline'
import Link from "next/link";



export function Header():JSX.Element {


    return(
        <>
       <header className="sticky top-0 bg-red-300 z-10 shadow">
        <div className="container mx-auto p-6 flex justify-between">
            
                
                 <Link href={'/pages/products'} className="font-extrabold text-3xl text-gray-700">Medusa Store</Link>
            
            <div className="relative">
                <ShoppingCartIcon className="w-7 h-7 flex-shrink-0"/>

            </div>
           
        </div>
       </header>
        </>
    )
}