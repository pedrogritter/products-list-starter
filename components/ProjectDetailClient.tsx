"use client";

import { Card, CardBody, CardHeader, Chip, Divider } from "@nextui-org/react";
import { StarIcon, BoxIcon, ScaleIcon, PackageIcon } from "lucide-react";
import Image from "next/image";
import AddCartButton from "@/components/AddCartButton";
import { Product } from "@/utils/types";

type Props = {
  product: Product;
};

function ProductDetailClient({ product }: Props) {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Card className="p-4">
        {/* Product Header */}
        <CardHeader className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span>{product.rating} rating</span>
            </div>
            <Chip color="primary" variant="flat">
              {product.category}
            </Chip>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">${product.price}</p>
            {product.discountPercentage > 0 && (
              <p className="text-sm text-success">
                {product.discountPercentage}% OFF
              </p>
            )}
          </div>
        </CardHeader>

        <Divider className="my-4" />

        {/* Product Content */}
        <CardBody className="gap-6">
          {/* Image and Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-square">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="100%"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">{product.description}</p>
              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-3">
                  <div className="flex items-center gap-2">
                    <BoxIcon className="w-5 h-5" />
                    <div>
                      <p className="text-sm text-gray-500">Stock</p>
                      <p className="font-semibold">{product.stock} units</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-3">
                  <div className="flex items-center gap-2">
                    <ScaleIcon className="w-5 h-5" />
                    <div>
                      <p className="text-sm text-gray-500">Weight</p>
                      <p className="font-semibold">{product.weight} kg</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Shipping Info */}
              <Card className="p-4">
                <div className="flex items-center gap-2">
                  <PackageIcon className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Shipping Information</p>
                    <p className="text-sm text-gray-500">
                      {product.shippingInformation}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Add to Cart */}
              <div className="pt-4">
                <AddCartButton id={product.id} />
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
              {product.reviews.map((review, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{review.reviewerName}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                      <p className="mt-2">{review.comment}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-5 h-5 text-yellow-400" />
                      <span>{review.rating}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductDetailClient;
