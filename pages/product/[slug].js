import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import React from "react";

const productDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordand Retro 6 G
            </div>

            {/* product subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            {/* product price */}
            <div className="text-lg font-semibold">MRP : ₹ 19,695.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">{`(Also include all applicable duties)`}</div>
          </div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default productDetails;
