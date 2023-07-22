import Categories from '@/components/Categories'
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
      <Selling />
      </div>
  )
}
