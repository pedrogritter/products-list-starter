import ProductDetailClient from "@/components/ProjectDetailClient";
import { getProduct } from "@/services/product";

type Props = {
  params: {
    id: string;
  };
};

async function ProductDetail({ params }: Props) {
  const product = await getProduct(parseInt(params.id));

  console.log(product);

  return <ProductDetailClient product={product} />;
}

export default ProductDetail;
