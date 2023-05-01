type imageUrl = string;

type AllProducts = {
  id: number;
  title: string;
  price: string;
  image: imageUrl;
};
type Data = {
  data: {
    allProducts: AllProducts[];
  };
};

interface IProduct {
  availability: boolean;
  desc: string;
  id: number;
  image: string;
  inStock: number;
  price: string;
  title: string;
}

export { Data, AllProducts, IProduct };
