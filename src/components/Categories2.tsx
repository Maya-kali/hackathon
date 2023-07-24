import Image from "next/image";
import React from "react";
import cate_1 from "/public/1/promo1.jpg";
import { LineChart } from "lucide-react";
import Link from "next/link";

const Categories2 = () => {
  return (
    <div className="mx-auto p-10">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Our Category
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-gray-900 inline-flex" />
        </div>
      </div>
      {/* Categories Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1 */}
        <div className="md-7 lg:mb-0 overflow-hidden z-10 mx-auto rounded-xl group relative">
          <Link href={"#"}>
            <Image
              alt="man"
              src={cate_1}
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div
              className="absolute -bottom-24 duration-300 scale-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl
            group-hover:bottom-0 bg-black/70 text-center text-white w-full"
            >
              <h1 className="uppercase">Man</h1>
            </div>
          </Link>
        </div>
        {/* 2 */}
        <div className="md-7 lg:mb-0 overflow-hidden z-10 mx-auto rounded-xl group relative">
          <Link href={"#"}>
            <Image
              alt="woman"
              src={cate_1}
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div
              className="absolute -bottom-24 duration-300 scale-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl
group-hover:bottom-0 bg-black/70 text-center text-white w-full"
            >
              <h1 className="uppercase">Woman</h1>
            </div>
          </Link>
        </div>
         {/* 3 */}
         <div className="md-7 lg:mb-0 overflow-hidden z-10 mx-auto rounded-xl group relative">
          <Link href={"#"}>
            <Image
              alt="kids"
              src={cate_1}
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div
              className="absolute -bottom-24 duration-300 scale-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl
group-hover:bottom-0 bg-black/70 text-center text-white w-full"
            >
              <h1 className="uppercase">Kids</h1>
            </div>
          </Link>
        </div>
         {/* 4 */}
         <div className="md-7 lg:mb-0 overflow-hidden z-10 mx-auto rounded-xl group relative">
          <Link href={"#"}>
            <Image
              alt="new-born"
              src={cate_1}
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div
              className="absolute -bottom-24 duration-300 scale-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl
group-hover:bottom-0 bg-black/70 text-center text-white w-full"
            >
              <h1 className="uppercase">New Born</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories2;
