// import { getProducts } from "@/services/product";
"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex align-middle justify-center flex-col items-center gap-5">
      <div>
        Get started by editing <code>app/page.tsx</code>.
      </div>
      <div>
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
