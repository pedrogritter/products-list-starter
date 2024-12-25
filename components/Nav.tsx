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
        <figure>
          <Image src={Logo} alt="sword" width={100} height={60} />
        </figure>
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className="w-1/2">
        <Input size="sm" variant="faded" placeholder="search" />
      </div>
      <div className="">
        <CartIcon />
      </div>
    </nav>
  );
};

export default Nav;
