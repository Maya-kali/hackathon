import Image from "next/image";
import React from "react";
import selling1 from "../../public/1/promo1.jpg";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

const BestSellingCart = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  prod,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  prod: string;
  discount: number;
}) => {
  return (
    <div>
      <div className="max-w-[300px] max-h-[35rem] p-4 shadow-md rounded-xl relative group mx-auto">
        <Link href={`/${category}/${prod}`}>
          {/* image */}
          <div className="block relative h-[23rem] rounded overflow-hidden">
            <Image src={src} alt="/" height={450} width={400} />
          </div>

          {/* Typography */}
          <div className="">
            <h2 className="font-bold text-2xl">{title}</h2>
            <p className="line-clamp-1 ">{description}</p>
            <div className="flex gap-4">

            <p className={`line-clamp-1 ${discount > 0 && "line-through decoration-2 decoration-gray-800"}`} > $ {price}</p>
            {/* discounted value */}
            {discount >0 && (
            <p className="line-clamp-1 "> $ {price - (price*discount)/100}</p>
            )}
            </div>
          </div>
        </Link>

        {/* button */}
        <div className=" mt-8 justify-between items-center flex">
          <button className="bg-gray-900 p-2 text-white text-sm flex rounded hover:bg-gray-700 transition-all duration-300 ease-in ">
            <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
          </button>
          <button className="bg-gray-900 p-2 text-white text-sm flex rounded hover:bg-gray-700 transition-all duration-300 ease-in ">
            <Heart className="h-5 w-5 mr-2" /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSellingCart;
