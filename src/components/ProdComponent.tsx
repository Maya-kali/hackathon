"use client"
import Image from 'next/image'
import React, { useState} from 'react'

const ProdComponent = () => {
    const [path, setPath] = useState("")
  return (
    <div>
        <Image src={path ? path :  '/1/promo1.jpg'} alt='ecomerce' width={400} height={400}/>
        <div className='flex items-center justify-evenly mx-auto mt-2'>
            <div className='cursor-pointer w-16 h-16'>
                <Image src={'/1/promo1.jpg'} alt='/' width={60} height={60} 
                onClick={()=> setPath("/1/promo1.jpg")} />
            </div>
            <div className='cursor-pointer w-16 h-16'>
                <Image src={'/1/promo2.jpg'} alt='/' width={60} height={60} 
                onClick={()=> setPath("/1/promo2.jpg")} />
            </div>
            <div className='cursor-pointer w-16 h-16'>
                <Image src={'/1/promo3.jpg'} alt='/' width={60} height={60} 
                onClick={()=> setPath("/1/promo3.jpg")} />
            </div>
            
            
        </div>
    </div>
  )
}

export default ProdComponent