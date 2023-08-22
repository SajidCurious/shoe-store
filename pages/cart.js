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

          {/* cart items end */}
        </div>
        {/* cart content end */}
      </Wrapper>
    </div>
  );
};

export default Cart;
