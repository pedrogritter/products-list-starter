"use client";
import { Card } from "@nextui-org/react";
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
    <Card className="p-1 items-center">
      <Link href={`/dashboard/${id}`}>
        <Image src={thumbnail} alt="alt" width={100} height={100} />
        <div>
          <p className="font-bold">{name}</p>
          <p>{price}$</p>
        </div>
      </Link>
      <AddCartButton id={id} />
    </Card>
  );
};

export default ProductsCard;
