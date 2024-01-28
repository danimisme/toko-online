import CardProduct from "../componnents/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          hehe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          temporibus molestiae, impedit voluptas sunt perferendis voluptatum
          fuga vero quibusdam dolore. Est consectetur ullam ratione reiciendis
          itaque vel, placeat rerum in?
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 2000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
