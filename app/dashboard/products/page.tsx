import ProductListCard from "@/components/ProductListCard";
import { getProducts } from "@/services/product";
import React from "react";

const Products = async () => {
  const productsJson = await getProducts();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="space-y-4">
        {productsJson.products.map((product) => (
          <ProductListCard
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            description={product.description}
            rating={product.rating}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
