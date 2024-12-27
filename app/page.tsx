"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Hero Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full">
              <ShoppingBag size={48} className="text-white" />
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
            Welcome to SwordStore
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a dummy collection of products with a simple shopping
            experience. Start exploring the catalog and you probably will not
            find what you are looking for.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-lg px-8
                  hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                endContent={<ArrowRight className="ml-2" />}
              >
                Browse Products
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Easy Shopping</h3>
              <p className="text-gray-600">
                Browse through a totally random catalog with an intuitive
                interface
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Secure Checkout</h3>
              <p className="text-gray-600">
                Shop with zero confidence using our non existent payment system
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your products delivered indefinetly to your doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
