import ProductDetailClient from "@/components/ProjectDetailClient";
import { getProduct } from "@/services/product";

type Props = {
  params: Promise<{ id: string }>;
};

async function ProductDetail({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(parseInt(id));

  return <ProductDetailClient product={product} />;
}

export default ProductDetail;
