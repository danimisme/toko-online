import { Fragment } from "react";
import CardProduct from "../componnents/Fragments/CardProduct";
import Button from "../componnents/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 2000.000",
    image: "/images/shoes-1.jpg",
    description:
      "hehe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae lorem lorem lorem  lorem   ",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp. 1000.000",
    image: "/images/shoes-1.jpg",
    description:
      "hehe lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Sepatu Adadong",
    price: "Rp. 2000.000",
    image: "/images/shoes-1.jpg",
    description: "ini adalah sepatu baru dari brand adadong.",
  },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}{" "}
        <Button classname="ml-5 bg-red-600" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
