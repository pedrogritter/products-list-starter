"use client";
import { Spinner } from "@nextui-org/react";

interface LoaderProps {
  message?: string;
  size: "sm" | "md" | "lg";
}

const Loader = ({ message = "Loading...", size = "md" }: LoaderProps) => {
  const sizeClasses = {
    sm: "gap-2 text-sm",
    md: "gap-3 text-base",
    lg: "gap-4 text-lg",
  };

  const spinnerSizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[200px]">
      <div className={`flex items-center ${sizeClasses[size]}`}>
        <Spinner
          size={spinnerSizes[size] as "sm" | "md" | "lg"}
          color="secondary"
          classNames={{
            wrapper: "w-auto",
          }}
        />
      </div>
      <p className={`mt-2 text-gray-600 ${sizeClasses[size]}`}>{message}</p>
    </div>
  );
};

export default Loader;
