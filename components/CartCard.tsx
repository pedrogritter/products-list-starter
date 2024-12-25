import React from "react";
import RemoveCartButton from "./RemoveCartButton";
import Link from "next/link";
import { Card } from "@nextui-org/react";

interface CartCardProps {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

const CartCard = ({ id, name, price, thumbnail, quantity }: CartCardProps) => {
  return (
    <Card className="p-1 items-center">
      <Link href={`/dashboard/${id}`}>
        <div>
          <p className="font-bold">{name}</p>
          <p>{price}$</p>
          <p>Quantity: {quantity}$</p>
        </div>
      </Link>
      <RemoveCartButton id={id} />
    </Card>
  );
};

export default CartCard;
