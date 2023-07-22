import CartCard from "@/components/CartCard";
import React from "react";

const cart = () => {
  return (
    <div className="my-20 mx-auto px-12">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {/* Items */}
        <div className="col-span-2">
          <CartCard
            src="/1/promo1.jpg"
            title="Man shoes"
            size="L"
            price={1500}
          />
        </div>

        {/* Summary */}
        <div className="bg-gray-100 rounded-xl p-4">
          {/* Heading */}
          <h2 className="text-2xl capitalize font-medium ">order summary</h2>

          {/* divider */}
          <div className="divider"></div>

          {/* Pricing */}
          <div className="">
            <div className="flex justify-between items-center capitalize">
              <h2>sub total</h2>
              <h2> $ 1500</h2>
            </div>

            {/* devliry charges */}
            <div className="flex justify-between items-center capitalize">
              <h2>delivery charges</h2>
              <h2> TBD</h2>
            </div>
            {/* service charges */}
            <div className="flex justify-between items-center capitalize">
              <h2>Sales tax</h2>
              <h2> TBD</h2>
            </div>

            {/* divider */}
            <div className="divider"></div>
          </div>
          {/* estimated total */}
          <div className="flex justify-between items-center uppercase font-semibold">
            <h2>total</h2>
            <h2> $ 1500</h2>
          </div>
          {/* divider */}
          <div className="divider"></div>

          {/* checkout button */}
          <div className=" flex items-center justify-center w-full">
            <button className="bg-gray-900 text-white hover:bg-gray-600 px-4 py-3 capitalize rounded-xl">
              proceed to checkout
            </button>
          </div>

          {/* divider */}
          <div className="divider"></div>

          <p className="capitalize w-[97%] text-center ">{`* delivery charges and the sales tax will be calculated in the checkout page`}</p>
        </div>
      </div>
    </div>
  );
};

export default cart;
