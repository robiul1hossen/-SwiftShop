import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "SwiftShop Mini E-Commerce",
  description:
    "A high-performance, responsive e-commerce frontend built with React, Tailwind CSS, and the FakeStore API. Features dynamic filtering, product details, and a seamless shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${roboto.className} bg-[#f9fafb] antialiased`}>
        {children}
      </body>
    </html>
  );
}
