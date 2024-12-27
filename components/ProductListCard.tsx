"use client";
import { Card, CardBody, Chip, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import AddCartButton from "./AddCartButton";
import { StarIcon, PackageIcon, BoxIcon } from "lucide-react";

interface ProductListCardProps {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: number;
  stock: number;
}

const ProductListCard = ({
  id,
  name,
  price,
  thumbnail,
  description,
  rating,
  stock,
}: ProductListCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-200">
      <CardBody className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative w-full md:w-[300px] aspect-square">
            <Image
              src={thumbnail}
              alt={name}
              fill
              sizes="100%"
              className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6">
            <div className="flex flex-col h-full gap-4">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <Link href={`/dashboard/products/${id}`}>
                    <h3 className="text-xl font-semibold hover:text-purple-600 transition-colors">
                      {name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-600">
                      {rating} rating
                    </span>
                  </div>
                </div>
                <Chip
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                >
                  ${price}
                </Chip>
              </div>

              {/* Description */}
              <p className="text-gray-600 line-clamp-2">{description}</p>

              {/* Product Stats */}
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <BoxIcon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {stock} in stock
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <PackageIcon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-auto pt-4">
                <AddCartButton id={id} />
                <Link href={`/dashboard/products/${id}`}>
                  <Button
                    variant="bordered"
                    className="border-purple-400 text-purple-600"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductListCard;
