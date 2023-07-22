"use client"
import BestSellingCart from '@/components/BestSellingCart';
import React from 'react'
import { useAppSelector } from '../store/hooks';

const Woman = () => {
  const bestSell = useAppSelector((state)=>state.products);
//   const bestSell = [
//     {

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
//   {

//     src: '/1/promo1.jpg',
//     alt: "White T-Shirt",
//     title: "White Printed tee",
//     description: "Best Quality T-shirt for women",
//     price: 150,
//     category:"White",
//     prod:"White T-Shirt",
// },
// {

//     src: '/1/promo2.jpg',
//     alt: "Black T-Shirt",
//     title: "Black Printed tee",
//     description: "Best Quality T-shirt for women",
//     price: 250,
//     category:"White",
//     prod:"White T-Shirt",
// },
// {

//     src: '/1/promo3.jpg',
//     alt: "Black T-Shirt",
//     title: "Black Printed tee",
//     description: "Best Quality T-shirt for women",
//     price: 250,
//     category:"White",
//     prod:"White T-Shirt",
// },
// {

//   src: '/1/promo1.jpg',
//   alt: "White T-Shirt",
//   title: "White Printed tee",
//   description: "Best Quality T-shirt for women",
//   price: 150,
//   category:"White",
//   prod:"White T-Shirt",
// },
// {

//   src: '/1/promo2.jpg',
//   alt: "Black T-Shirt",
//   title: "Black Printed tee",
//   description: "Best Quality T-shirt for women",
//   price: 250,
//   category:"White",
//   prod:"White T-Shirt",
// },
// {

//   src: '/1/promo3.jpg',
//   alt: "Black T-Shirt",
//   title: "Black Printed tee",
//   description: "Best Quality T-shirt for women",
//   price: 250,
//   category:"White",
//   prod:"White T-Shirt",
// },
// {

//   src: '/1/promo1.jpg',
//   alt: "White T-Shirt",
//   title: "White Printed tee",
//   description: "Best Quality T-shirt for women",
//   price: 150,
//   category:"White",
//   prod:"White T-Shirt",
// },
// {

//   src: '/1/promo2.jpg',
//   alt: "Black T-Shirt",
//   title: "Black Printed tee",
//   description: "Best Quality T-shirt for women",
//   price: 250,
//   category:"White",
//   prod:"White T-Shirt",
// },
// {

//   src: '/1/promo3.jpg',
//   alt: "Black T-Shirt",
//   title: "Black Printed tee",
//   description: "Best Quality T-shirt for women",
//   price: 250,
//   category:"White",
//   prod:"White T-Shirt",
// },
    
//   ];
  return (
    <div className='my-20'> 
      {/* Heading */}
    <div className="text-center mb-20">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 capitalize">
    Woman
    </h1>
  </div>

   {/* Sale */}
   <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
        {
            bestSell.map((items : any,i) => (
                <BestSellingCart
                key={i} 
                src={items.image[ 0]} 
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

export default Woman