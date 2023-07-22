"use client"
import Image from 'next/image'
import React from 'react'
import selling1 from '../../public/1/promo1.jpg'
import { Heart, ShoppingCart } from 'lucide-react'
import BestSellingCart from './BestSellingCart'
import { useAppSelector } from '@/app/store/hooks'

const Selling = () => {
  const product = useAppSelector((state)=>state.products);
  const bestSell = product.slice(0,3)
  //   const bestSell = [
  //   {

  //       src: '/1/promo1.jpg',
  //       alt: "White T-Shirt",
  //       title: "White Printed tee",
  //       description: "Best Quality T-shirt for women",
  //       price: 150,
  //       category:"White",
  //       prod:"White T-Shirt",
  //   },
  //   {

  //       src: '/1/promo2.jpg',
  //       alt: "Black T-Shirt",
  //       title: "Black Printed tee",
  //       description: "Best Quality T-shirt for women",
  //       price: 250,
  //       category:"White",
  //       prod:"White T-Shirt",
  //   },
  //   {

  //       src: '/1/promo3.jpg',
  //       alt: "Black T-Shirt",
  //       title: "Black Printed tee",
  //       description: "Best Quality T-shirt for women",
  //       price: 250,
  //       category:"White",
  //       prod:"White T-Shirt",
  //   },
  // ]

  return ( 
    <div className='my-20 px-10'>
        {/* Heading */}
        <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Hot Selling Products
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-900 inline-flex" />
        </div>

        
      </div>

      {/* Sale */}
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
        {
            bestSell.map((items : any,i) => (
                <BestSellingCart 
                key={i} 
                src={items.image[0]} 
                alt={items.title} 
                title={items.title}
                description={items.description} 
                price={items.price}
                category={items.category}
                prod={items.prod}
                discount={items.discount}
                
                 />
            ) )
        }
      {/* <BestSellingCart />
      <BestSellingCart />
      <BestSellingCart /> */}


        
      </div>

     
      
      
      </div>
  )
}

export default Selling