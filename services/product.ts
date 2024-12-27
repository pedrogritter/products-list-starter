"server only";
import { memoize } from "nextjs-better-unstable-cache";

// Type definitions
interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const getProducts = memoize(
  async (): Promise<ProductsResponse> => {
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
  async (id: number): Promise<Product> => {
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
