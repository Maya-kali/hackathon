import Image from 'next/image'
import React from 'react'
import category1 from '../../public/1/promo1.jpg'
import category2 from '../../public/1/promo2.jpg'
import category3 from '../../public/1/promo3.jpg'
import category4 from '../../public/1/promo4.jpg'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className='my-20 px-10'>
        {/* Heading */}
        <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Our Categories
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-900 inline-flex" />
        </div>

        
      </div>

      {/* Categories */}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2'>
        {/* category 1 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto rounded-xl group relative'>
            <Link href={'/man'}>

            <Image src={category4} width={350} height={250} alt='/' 
            className='group-hover:scale-125 duration-500 rounded-xl'/>

            <div className=' hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 text-3xl text-white text-center font-bold bg-black/70 w-full'>
                <h1 className='uppercase '>Man</h1>
            </div>
            <div className='block  lg:hidden absolute bottom-28 duration-500  text-3xl text-white text-center font-bold bg-black/70 w-full'>
                <h1 className='uppercase '>Man</h1>
            </div>
            </Link>
        </div>
        
         {/* category 2 */}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto rounded-xl group relative'>
            <Link href={'/woman'}>

            <Image src={category2} width={350} height={350} alt='/' 
            className='group-hover:scale-125 duration-500 rounded-xl'/>

            <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 text-3xl text-white text-center font-bold bg-black/70 w-full'>
                <h1 className='uppercase '>Women</h1>
            </div>
            <div className='block  lg:hidden absolute bottom-28 duration-500 group-hover:bottom-0 text-3xl text-white text-center font-bold bg-black/70 w-full'>
                <h1 className='uppercase '>Women</h1>
            </div>
            

            </Link>
        </div>
        
         {/* category 3 */}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto rounded-xl group relative'>
            <Link href={'/kids'}>

            <Image src={category3} width={350} height={350} alt='/' 
            className='group-hover:scale-125 duration-500 rounded-xl'/>

            <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 text-3xl text-white text-center font-bold bg-black/70 w-full'>
                <h1 className='uppercase'>Kids</h1>
            </div>
            <div className='block  lg:hidden absolute bottom-28 duration-500 group-hover:bottom-0 text-3xl text-white text-center font-bold bg-black/70 w-full'>
                <h1 className='uppercase'>Kids</h1>
            </div>
            </Link>
        </div>
        
         {/* category 4 */}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto rounded-xl group relative'>
            <Link href={'/new-born'}>

            <Image src={category1} width={350} height={350} alt='/' 
            className='group-hover:scale-125 duration-500 rounded-xl'/>

            <div className='hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 text-3xl text-white text-center font-bold bg-black/70 w-full'>
                <h1 className='uppercase '>New Born</h1>
            </div>
            <div className='block  lg:hidden absolute bottom-28 duration-500 group-hover:bottom-0 text-3xl text-white text-center font-bold bg-black/70 w-full'>
                <h1 className='uppercase '>New Born</h1>
            </div>
            </Link>
        </div>
        



      </div>


    </div>
  )
}

export default Categories