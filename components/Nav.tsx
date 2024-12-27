"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import Logo from "@/images/sword.png";
import Image from "next/image";
import CartIcon from "./CartIcon";

const Nav = () => {
  return (
    <nav className="h-[65px] border-b border-default-50 flex justify-between items-center px-6 gap-4">
      <div className="flex flex-row gap-3 items-center justify-center">
        <Link href="/">
          <figure>
            <Image src={Logo} alt="sword" width={100} height={60} priority />
          </figure>
        </Link>
        <div className="flex gap-5">
          <Link href="/dashboard" className="font-bold text-sky-950">
            Dashboard
          </Link>
          <Link href="/dashboard/products" className="font-bold text-sky-950">
            Products
          </Link>
        </div>
      </div>
      <div className="w-1/3">
        <Input size="sm" variant="faded" placeholder="search" />
      </div>
      <div className="">
        <CartIcon />
      </div>
    </nav>
  );
};

export default Nav;
