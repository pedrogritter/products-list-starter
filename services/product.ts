"server only";
import { memoize } from "nextjs-better-unstable-cache";

export const getProducts = memoize(
  async (): Promise<unknown[]> => {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error("Error fetching products");
    }
    return res.json();
  },
  {
    persist: true,
    revalidateTags: () => ["products"],
    suppressWarnings: true,
    logid: "products",
  }
);

export const getProduct = memoize(
  async (id: number): Promise<unknown[]> => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) {
      throw new Error("Error fetching product");
    }
    return res.json();
  },
  {
    persist: true,
    revalidateTags: () => ["product_info"],
    suppressWarnings: true,
    logid: "product_info",
  }
);
