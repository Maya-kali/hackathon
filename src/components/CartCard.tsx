import { Delete, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const CartCard = ({
  src,
  title,
  size,
  price,
}: {
  src: string;
  title: string;
  size: string;
  price: number;
}) => {
  return (
    <div className="flex border-b-2 border-gray-300 mr-4 p-2 pb-6 mb-4">
      {/* Image */}
      <Image
        src={src}
        alt={title}
        width={80}
        height={80}
        className="w-[100px] h-[100px]"
      />

      {/* some info */}

      <div className="flex px-5 justify-between items-center  w-full">
        <div>
          {/* title */}
          <h2 className="">{title}</h2>
          {/* size */}
          <p>Size: {size}</p>
          {/* price */}
          <h2> Price: $ {price}</h2>
          {/* quantity */}
          <div className="flex items-center justify-between mt-4">
            <button
              className="group mr-1 bg-gray-800 hover:bg-gray-600 text-white
        "
            >
              <Minus />
            </button>
            <p>2</p>
            <button
              className="group ml-1 bg-gray-800 hover:bg-gray-600 text-white
        "
            >
              <Plus />
            </button>
          </div>
          {/* delete btn */}
        </div>
      </div>
      <div>
       
      
        <button>
          <Trash2 className="text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
