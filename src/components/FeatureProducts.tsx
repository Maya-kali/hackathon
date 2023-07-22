"use client"
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCart from './BestSellingCart';
import { useAppSelector } from '@/app/store/hooks';


const FeatureProducts = () => {
// my data
const bestSell = useAppSelector((state)=>state.products);

    
// BestSelling
// const bestSell = [
//     {

//         src: '/1/promo1.jpg',
//         alt: "White T-Shirt",
//         title: "White Printed tee",
//         description: "Best Quality T-shirt for women",
//         price: 150,
//         category:"White",
//         prod:"White T-Shirt",
//     },
//     {

//         src: '/1/promo2.jpg',
//         alt: "Black T-Shirt",
//         title: "Black Printed tee",
//         description: "Best Quality T-shirt for women",
//         price: 250,
//         category:"White",
//         prod:"White T-Shirt",
//     },
//     {

//         src: '/1/promo3.jpg',
//         alt: "Black T-Shirt",
//         title: "Black Printed tee",
//         description: "Best Quality T-shirt for women",
//         price: 250,
//         category:"White",
//         prod:"White T-Shirt",
//     },
//     {

//         src: '/1/promo2.jpg',
//         alt: "Black T-Shirt",
//         title: "Black Printed tee",
//         description: "Best Quality T-shirt for women",
//         price: 250,
//         category:"White",
//         prod:"White T-Shirt",
//     },
//     {

//         src: '/1/promo3.jpg',
//         alt: "Black T-Shirt",
//         title: "Black Printed tee",
//         description: "Best Quality T-shirt for women",
//         price: 250,
//         category:"White",
//         prod:"White T-Shirt",
//     },
//     {

//         src: '/1/promo2.jpg',
//         alt: "Black T-Shirt",
//         title: "Black Printed tee",
//         description: "Best Quality T-shirt for women",
//         price: 250,
//         category:"White",
//         prod:"White T-Shirt",
//     },
//     {

//         src: '/1/promo3.jpg',
//         alt: "Black T-Shirt",
//         title: "Black Printed tee",
//         description: "Best Quality T-shirt for women",
//         price: 250,
//         category:"White",
//         prod:"White T-Shirt",
//     },
//   ]

    // carousel
    var settings = {
        dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='my-20 px-10'>
         {/* Heading */}
         <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Featured Products
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-900 inline-flex" />
        </div>

        
      </div>
      {/* carousel  */}
      <Slider {...settings}>
      
        {
            bestSell.map((items: any,i) => (
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
        </Slider>
    </div>
  )
}

export default FeatureProducts