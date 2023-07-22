import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='mb-[50px]'>
    {/* style={{backgroundImage: 'url(https://mallofamerica.com/sites/default/files/2022-09/Shopping_1920x1080.jpg)'}} */}
    <div className="hero min-h-screen Hero_bg_image bg-fixed bg-center bg-no-repeat" >
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">An Industrial <span className='text-gray-900'> Take </span> on Streetwear</h1>
      <p className="mb-5">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
      <button className="btn bg-gray-900 text-white hover:text-gray-900"> <ShoppingBag className='animate-bounce' />Shop Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero