"use client";
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import AddCartButton from "./AddCartButton";

interface ProductsCardProps {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
}

const ProductsCard = ({ id, name, price, thumbnail }: ProductsCardProps) => {
  return (
    <Card className="w-full max-w-[300px] hover:scale-105 transition-transform duration-200">
      <Link href={`/dashboard/products/${id}`}>
        <CardBody className="p-0">
          <div className="relative w-full aspect-square">
            <Image
              src={thumbnail}
              alt={name}
              fill
              sizes="100%"
              className="object-cover rounded-t-lg"
            />
          </div>
        </CardBody>
        <CardFooter className="flex flex-col gap-2 p-4 h-24">
          <div className="flex justify-between items-center w-full">
            <h3 className="font-semibold text-lg">{name}</h3>
            <Chip
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-purple-400 text-white"
            >
              ${price}
            </Chip>
          </div>
        </CardFooter>
      </Link>
      <CardFooter className="pt-2 px-4 pb-4 align-bottom">
        <AddCartButton id={id} />
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
