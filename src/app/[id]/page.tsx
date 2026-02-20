"use client";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setIsLoading(false);
    };
    loadProducts();
  }, [id]);

  return isLoading ? (
    <ProductDetailsSkeleton />
  ) : (
    <>
      <Header />
      <div className="max-w-6xl mx-auto py-8 lg:py-12">
        <Link
          href={"/"}
          // onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Link>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-100/20 border border-gray-100">
          <div className="relative group bg-white flex items-center justify-center p-8 rounded-3xl border border-gray-50">
            <Image
              fill
              src={product?.image || "/placeholder.png"}
              alt={product?.title || "product"}
              className="max-h-125 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-100">
                {product?.category}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {product?.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-500 fill-current"
                  viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-yellow-700 font-bold text-sm">
                  {product?.rating?.rate}
                </span>
                <span className="text-gray-400 text-xs">
                  ({product?.rating?.count} reviews)
                </span>
              </div>
              <div className="h-4 w-px bg-gray-200"></div>
              <span className="text-green-600 font-semibold text-sm">
                In Stock
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {product?.description}
            </p>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">
                    Price
                  </p>
                  <p className="text-4xl font-black text-gray-900">
                    ${product?.price?.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm hover:text-indigo-600 hover:shadow transition-all cursor-pointer">
                    -
                  </button>
                  <span className="font-bold text-lg w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-gray-600 shadow-sm hover:text-indigo-600 hover:shadow transition-all cursor-pointer">
                    +
                  </button>
                </div>
              </div>

              <button
                //   onClick={() => {
                //     for(let i=0; i<quantity; i++) addToCart(product);
                //   }}
                className="w-full bg-indigo-600 text-white py-5 rounded-3xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transform hover:-translate-y-1 transition-all active:scale-95">
                Add to Shopping Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
