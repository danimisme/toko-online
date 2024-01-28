import CardProduct from "../componnents/Fragments/CardProduct";

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

const ProductsPage = () => {
  return (
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
  );
};

export default ProductsPage;
