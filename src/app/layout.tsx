"use client"; // Make it a client component

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "../hooks/useLenis";
import "./globals.css"; 
import Navbar from "../components/navbar/navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  useLenis();
  const pathname = usePathname();
  const hiddenPaths = ["/login", "/register"];

  return (
    <html lang="en">
      <body>
        {!hiddenPaths.includes(pathname) && <Navbar />}
        
        {/* <SmoothScroller /> */}
        <main className="min-h-screen ">{children}</main>
      </body>
    </html>
  );
}
