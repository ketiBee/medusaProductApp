import Image from 'next/image'

import RootLayout from './layout'
import { Header } from './components/header/Header'
import Link from 'next/link'

export default function Home() {
  return (
   <>
   
   {/* <Header />
   <ProductList /> */}

   <h1>VIEW OUR COLLECTION</h1>
   <Link href={'/pages/products'}>
   <button type="button" className='w-20 h-10 bg-red-800'>SHOP</button>
   </Link>
   </>
   
  
  )
}
