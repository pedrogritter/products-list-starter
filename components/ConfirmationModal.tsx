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

  const onSubmit = async (data: OrderFormData) => {
    // Here you would typically send the order to your backend
    console.log("Order submitted:", {
      ...data,
      items: cartItems,
      total: totalAmount,
    });

    // Clear cart and show success message
    cartService.clearCart();
    refreshCart();
    setShowSuccess(true);
    reset();
  };

  if (showSuccess) {
    return (
      <Modal
        isOpen={true}
        onClose={() => {
          setShowSuccess(false);
          onClose();
        }}
      >
        <ModalContent>
          <ModalBody className="text-center py-8">
            <h3 className="text-xl font-bold text-green-600 mb-4">
              Order Confirmed!
            </h3>
            <p>
              Thank you for your purchase. You will receive an email
              confirmation shortly.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onPress={() => {
                setShowSuccess(false);
                onClose();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
      <ModalContent>
        <ModalHeader className="text-xl font-bold">
          Confirm Your Order
        </ModalHeader>
        <ModalBody>
          {/* Order Summary */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Order Summary</h4>
            <div className="space-y-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
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
              <Button color="danger" variant="light" onPress={onClose}>
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
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
