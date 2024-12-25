import { Button } from "@nextui-org/react";
import { DeleteIcon } from "lucide-react";

const RemoveCartButton = ({ id }: { id: number }) => {
  return (
    <Button
      className="text-white
    bg-gradient-to-r from-[#a8c0ff], to-[#3f2b96]
    hover:bg-gradient-to-l
    transition-all duration-300"
      endContent={<DeleteIcon size={24} color="white" />}
    >
      Remove
    </Button>
  );
};

export default RemoveCartButton;
