import { Layout } from "@/components/Layout";
import { FC } from "react";
import { IProduct } from "@/@types";

type Props = {
  pageContext: {
    product: IProduct;
  };
};
const Product: FC<Props> = ({ pageContext }) => {
  const { image, title, desc, price, availability, inStock } =
    pageContext.product;
  return (
    <Layout>
      <section className="text-gray-700 body-font bg-white">
        <div className="mx-auto">
          <div className=" mx-auto flex flex-wrap">
            <span className="p-2 h-80 lg:h-auto lg:w-96 mx-auto items-center">
              <img
                src={image}
                alt={title}
                className="lg:w-full w-full h-full object-cover object-center rounded border border-gray-200"
              />
            </span>
            <div className="lg:w-1/2 p-2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                G-Shop
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>

              <p className="leading-relaxed">{desc}</p>
              <div className="mt-2 pb-5 border-b-2 border-gray-200 mb-5" />
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${price}
                </span>
                <button
                  disabled={!availability}
                  aria-label="buy"
                  className="flex disabled:opacity-50 ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  {availability ? `Add to cart` : `Not available`}
                </button>
              </div>
              <div className="mt-2 pb-5 border-b-2 border-gray-200 mb-5" />
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {inStock} in stock
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
