"use client"
import BestSellingCart from '@/components/BestSellingCart';
import { useAppSelector } from '../store/hooks';

const CategoryPage = ({params}:{params:{category:string}}) => {
  const product = useAppSelector((state)=>state.products)
  const bestSell = product.filter((val) => val.category == params.category);
  return (
    <div>
       {/* Heading */}
    <div className="text-center mb-20">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 capitalize">
      {params.category}
    </h1>
  </div>

   {/* Sale */}
   <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
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
      {/* <BestSellingCart />
      <BestSellingCart />
      <BestSellingCart /> */}


        
      </div>

    </div>
  )
}

export default CategoryPage
