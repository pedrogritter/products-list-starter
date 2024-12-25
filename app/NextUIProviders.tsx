"use client";

import { NextUIProvider } from "@nextui-org/react";

function NextUIProviders({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
export default NextUIProviders;
