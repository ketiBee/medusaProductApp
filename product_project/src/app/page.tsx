import Image from 'next/image'
import { ProductList } from './components/products/ProductList'
import RootLayout from './layout'
import { Header } from './components/header/Header'

export default function Home() {
  return (
   <>
   
   <Header />
   <ProductList />
   
   </>
   
  
  )
}
