"use client";
import { Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { cartService } from "@/services/cart";

interface CartCardProps {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  quantity: number;
  onUpdate: () => void;
}

const CartCard = ({
  id,
  name,
  price,
  thumbnail,
  quantity,
  onUpdate,
}: CartCardProps) => {
  const handleQuantityChange = (change: number) => {
    cartService.updateQuantity(id, quantity + change);
    onUpdate();
  };

  const handleRemove = () => {
    cartService.removeFromCart(id);
    onUpdate();
  };

  return (
    <Card className="w-full">
      <CardBody className="flex flex-row items-center gap-4 p-4">
        {/* Product Image */}
        <div className="relative w-24 h-24">
          <Image
            src={thumbnail}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-grow">
          <Link href={`/dashboard/${id}`}>
            <h3 className="font-semibold text-lg hover:text-purple-600 transition-colors">
              {name}
            </h3>
          </Link>
          <p className="text-purple-600 font-bold">${price}</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
          >
            <Minus size={16} />
          </Button>
          <span className="w-12 text-center font-semibold">{quantity}</span>
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onClick={() => handleQuantityChange(1)}
          >
            <Plus size={16} />
          </Button>
        </div>

        {/* Total and Remove */}
        <div className="flex flex-col items-end gap-2">
          <p className="font-bold">${(price * quantity).toFixed(2)}</p>
          <Button
            size="sm"
            color="danger"
            variant="light"
            startContent={<Trash2 size={16} />}
            onClick={handleRemove}
          >
            Remove
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default CartCard;
