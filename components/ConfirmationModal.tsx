"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { cartService } from "@/services/cart";
import { useCart } from "@/app/CartContext";
import { CheckCircle2 } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
}

interface OrderFormData {
  name: string;
  email: string;
  address: string;
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  cartItems,
  totalAmount,
}: ConfirmationModalProps) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { refreshCart } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OrderFormData>();

  const handleClose = () => {
    // Clear cart and close modal
    cartService.clearCart();
    refreshCart();
    onClose();
    // Reset states after modal is closed
    setTimeout(() => {
      setShowSuccess(false);
      reset();
    }, 200); // Small delay to ensure smooth transition
  };

  const onSubmit = async (data: OrderFormData) => {
    // Here you would typically send the order to your backend
    console.log("Order submitted:", {
      ...data,
      items: cartItems,
      total: totalAmount,
    });
    // Show success message
    setShowSuccess(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="2xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        {showSuccess ? (
          <>
            <ModalBody className="text-center py-12">
              <div className="flex flex-col items-center gap-4">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h3 className="text-xl font-bold text-green-600">
                  Order Confirmed!
                </h3>
                <p className="text-gray-600 max-w-md">
                  Thank you for your purchase. You will receive an email
                  confirmation shortly with your order details.
                </p>
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-center pb-8">
              <Button
                className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8"
                onPress={handleClose}
                size="lg"
              >
                Continue Shopping
              </Button>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalHeader className="text-xl font-bold">
              Confirm Your Order
            </ModalHeader>
            <ModalBody>
              {/* Order Summary */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Order Summary</h4>
                <div className="space-y-2">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Input
                  label="Full Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  errorMessage={errors.name?.message}
                  isInvalid={!!errors.name}
                />
                <Input
                  label="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  errorMessage={errors.email?.message}
                  isInvalid={!!errors.email}
                />
                <Input
                  label="Delivery Address"
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 10,
                      message: "Please enter a complete address",
                    },
                  })}
                  errorMessage={errors.address?.message}
                  isInvalid={!!errors.address}
                />

                <ModalFooter className="px-0">
                  <Button color="danger" variant="light" onPress={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                  >
                    Place Order
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
