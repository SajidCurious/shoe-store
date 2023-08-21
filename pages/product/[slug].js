import Wrapper from "@/components/Wrapper";
import React from "react";

const productDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            left
          </div>
          {/* left column end */}

          {/* right column start */}

          <div className="flex-[1] py-3">right</div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default productDetails;
