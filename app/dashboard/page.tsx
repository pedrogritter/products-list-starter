import { getProducts } from "@/services/product";

const ProductsList = async () => {
  const productsJson = await getProducts();

  console.log(productsJson);
  return (
    <div className="w-full flex h-full justify-center items-start">
      <div>
        <h4 className="text-lg">Items in Cart</h4>
        <h2 className="text-6xl font-semibold my-8 text-center">0</h2>
      </div>
    </div>
  );
};

export default ProductsList;
