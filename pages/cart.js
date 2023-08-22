import Cartitem from "@/components/Cartitem";
import Wrapper from "@/components/Wrapper";
import React from "react";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* heading and paragraph start */}

        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>

        {/* heading and paragraph end */}

        {/* cart content start */}

        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* cart items start */}

          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <Cartitem />
            <Cartitem />
            <Cartitem />
          </div>

          {/* cart items end */}

          {/* summary start  */}

          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
          </div>

          {/* summary end  */}
        </div>
        {/* cart content end */}
      </Wrapper>
    </div>
  );
};

export default Cart;
