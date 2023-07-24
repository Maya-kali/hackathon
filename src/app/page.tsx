// import Categories from '@/components/Categories1'
import Categories from '@/components/Categories'
import Categories2 from '@/components/Categories2'
import FeatureProducts from '@/components/FeatureProducts'
import Hero from '@/components/Hero'
import Promotion from '@/components/Promotion'
import Selling from '@/components/Selling'
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureProducts />
      <Services />
      <Promotion /> 
      <Categories />
      {/* <Categories2/>      */}
         <Selling />
      </div>
  )
}
