import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { getDiscountedPricePercentage } from "@/utils/helper";

const productDetails = ({ product, products }) => {
  const p = product?.data?.[0]?.attributes;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p.image.data} />
          </div>

          {/* left column end */}

          {/* right column start */}

          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>

            {/* product subtitle */}

            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

            {/* product price */}

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{p.price}
              </p>
              {p.original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#8377;{p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">{`(Also include all applicable duties)`}</div>

            {/* product size range start */}

            <div className="mb-10">
              {/* heding start */}

              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              {/* heding end */}

              {/* size start */}

              <div className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    }`}
                  >
                    UK 14
                  </div>
                ))}
                {/* <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 11
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 12
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 13
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 14
                </div> */}
              </div>

              {/* size end */}

              {/* show error start */}

              <div className="text-red-600 mt-1">
                Size selection is required
              </div>

              {/* show error end */}
            </div>

            {/* product price range end */}

            {/* cart button start */}

            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>

            {/* cart button end */}

            {/* wishlist button start */}

            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist <IoMdHeartEmpty size={20} />
            </button>

            {/* wishlist button end */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                laboriosam quas commodi consectetur tempore quam, sequi, id
                provident ipsa asperiores mollitia! Vel quod architecto sapiente
                laborum veniam voluptas quibusdam culpa necessitatibus sunt
                laudantium exercitationem, unde porro a! Sint nulla temporibus
                odit cum magnam nisi delectus, praesentium, eum deserunt nemo
                reiciendis?
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                laboriosam quas commodi consectetur tempore quam, sequi, id
                provident ipsa asperiores mollitia! Vel quod architecto sapiente
                laborum veniam voluptas quibusdam culpa necessitatibus sunt
                laudantium exercitationem, unde porro a! Sint nulla temporibus
                odit cum magnam nisi delectus, praesentium, eum deserunt nemo
                reiciendis?
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        {/* <RelatedProducts /> */}
      </Wrapper>
    </div>
  );
};

export default productDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
