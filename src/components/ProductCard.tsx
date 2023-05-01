import { FC } from "react";
import { Link } from "gatsby";

type ImageUrl = string;
type Props = {
  price: string;
  title: string;
  image: ImageUrl;
  id: number;
};
const ProductCard: FC<Props> = (data) => {
  const link = `/product/${data.id}`;
  return (
    <div
      aria-label="guitar"
      className="max-w-xs bg-white rounded-lg hover:shadow-xl shadow dark:bg-gray-800 hover:bg-gray-600 m-2 "
    >
      <Link to={link}>
        <img
          className="rounded-t-lg w-full h-fit object-center min-h-80 h-80"
          src={data.image}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5 pt-2 w-full h-30">
        <Link to={link}>
          <h5 className="text-lg h-14 font-semibold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
        </Link>
        <div className="flex items-center justify-center pt-2">
          <span className="text-xl text-red-500 text-gray-900 dark:text-red-500">
            ${data.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
