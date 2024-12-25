"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import Logo from "@/images/sword.png";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="h-[65px] border-b border-default-50 flex items-center px-6 gap-4">
      <div>
        <figure>
          <Image src={Logo} alt="sword" width={100} height={60} />
        </figure>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="w-1/2">
        <Input size="sm" variant="faded" placeholder="search" />
      </div>
    </nav>
  );
};

export default Nav;
