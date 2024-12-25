import { getProducts } from "@/services/product";
import React from "react";

const Products = async () => {
  const productsJson = await getProducts();
  console.log(productsJson);

  return (
    <div>
      <div className="flex flex-col gap-3 justify-center">
        {productsJson.products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Products;
