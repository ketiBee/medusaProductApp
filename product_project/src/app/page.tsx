import Image from 'next/image'

import RootLayout from './layout'
import { Header } from './components/header/Header'
import Link from 'next/link'

export default function Home() {
  return (
   <>
   
   
    <div className="grid h-screen place-items-center bg-my_bg_image" >
      <div className='px-6 py-6'>
        <p className='text-5xl'>Sustainable materials and even better prices</p>
        <div className='py-6'>
        <p className='text-7xl text-center font-serif text-gray-800'>MEDUSA STORE</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md space-x-12">
        <div>
          <h1 className='text-4xl font-semibold'>VIEW OUR COLLECTION</h1>
          </div>
          <div>
          <Link href={'/pages/products'}>
            <button type="button" className='w-20 h-10 bg-red-200 hover:bg-red-400 font-semibold' >SHOP</button>
          </Link>
          </div>
      </div>
   </div>
   </>
   
  
  )
}
