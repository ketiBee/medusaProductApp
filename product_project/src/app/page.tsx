import Image from 'next/image'

import RootLayout from './layout'
import { Header } from './components/header/Header'

export default function Home() {
  return (
   <>
   
   {/* <Header />
   <ProductList /> */}
   <h1>VIEW OUR COLLECTION</h1>
   <button type="button" className='w-20 h-10 bg-red-800'>SHOP</button>
   
   </>
   
  
  )
}
