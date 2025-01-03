"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
  products: ReactNode;
  cart: ReactNode;
}

const Dashboard = ({ children, products, cart }: DashboardLayoutProps) => {
  const path = usePathname();

  return (
    <div>
      {path === "/dashboard" ? (
        <div className="flex w-full h-full">
          <div className="w-2/3 border-r p-8 border-default-50">{products}</div>
          <div className="w-1/3 flex flex-col">
            <div className="border-b border-default-50 w-full p-8">{cart}</div>
            <div className="w-full h-1/3">{children}</div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Dashboard;
