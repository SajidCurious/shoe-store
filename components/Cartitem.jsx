import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cartitem = ({ data }) => {
  const p = data.attributes;
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image start  */}

      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          width={120}
          height={120}
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
        />
      </div>
      {/* image end */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* product title  */}

          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>

          {/* product subtitle  */}

          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>

          {/* product price  */}

          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377;{p.price}
          </div>
        </div>

        {/* product subtitle  */}

        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {p.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">6</option>
                <option value="2">6</option>
                <option value="3">6</option>
                <option value="4">6</option>
                <option value="5">6</option>
                <option value="6">6</option>
                <option value="7">6</option>
                <option value="8">6</option>
                <option value="9">6</option>
                <option value="10">6</option>
                <option value="11">6</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
