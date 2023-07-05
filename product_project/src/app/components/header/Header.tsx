import { JsxElement } from "typescript";
import { ShoppingCartIcon} from '@heroicons/react/24/outline'



export function Header():JSX.Element {


    return(
        <>
       <header className="sticky top-0 bg-red-100 z-10 shadow">
        <div className="container mx-auto p-6 flex justify-between">
            
                
                 <span className="font-extrabold text-3x1 text-gray-700">Medusa Store</span>
            
            <div className="relative">
                <ShoppingCartIcon className="w-7 h-7 flex-shrink-0"/>

            </div>
           
        </div>
       </header>
        </>
    )
}