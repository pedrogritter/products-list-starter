import { Button } from "@nextui-org/react";
import { ShoppingBasket } from "lucide-react";

const AddCartButton = ({ id }: { id: number }) => {
  return (
    <Button
      className="text-white
    bg-gradient-to-r from-[#a8c0ff], to-[#3f2b96]
    hover:bg-gradient-to-l
    transition-all duration-300"
      endContent={<ShoppingBasket size={24} color="white" />}
    >
      Add to Cart
    </Button>
  );
};

export default AddCartButton;
