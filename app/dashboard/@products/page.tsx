import ProductsCard from "@/components/ProductsCard";
import { getProducts } from "@/services/product";
import React from "react";

const Products = async () => {
  const productsJson = await getProducts();

  console.log(productsJson);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {productsJson.products.map((product) => (
          <ProductsCard
            key={product.id}
            name={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
