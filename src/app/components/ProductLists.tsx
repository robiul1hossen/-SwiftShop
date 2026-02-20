"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import ProductSkeleton from "./ProductSkeleton ";

const ProductLists = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    };
    const loadCategory = async () => {
      setIsLoading(true);
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
      setIsLoading(false);
    };
    loadProducts();
    loadCategory();
  }, []);
  useEffect(() => {
    setFiltered(products);
  }, [products]);
  // console.log(category);

  const handleCategory = async (category: string) => {
    setActiveCategory(category);
    setIsLoading(true);
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    const data = await res.json();
    setFiltered(data);
    setIsLoading(false);
  };
  const handleAllProducts = async () => {
    setActiveCategory("all");
    const loadProducts = async () => {
      setIsLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    };
    loadProducts();
  };

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max,
    );
    setFiltered(filteredProducts);
  }, [products, priceRange]);

  return (
    <div className="md:grid grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="col-span-3">
        <div className="sticky top-10">
          <div className="w-full px-10 flex flex-col bg-white min-h-screen">
            <div className="md:hidden">
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                Search
              </label>
              <input
                type="text"
                placeholder="Keyword..."
                className="w-full bg-gray-50 border-gray-200 rounded-lg py-2 px-4 focus:ring-2 focus:ring-indigo-500 text-sm mb-4"
              />
            </div>
            <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider mt-6">
              Categories
            </h3>

            <button
              onClick={handleAllProducts}
              className={`w-full px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}>
              All Products
            </button>

            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategory(category)}
                className={`w-full mt-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}>
                {category}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-8">
              <h3 className="text-sm font-bold text-gray-700  uppercase tracking-wider">
                Price Range
              </h3>
              <div className="flex gap-2">
                <input
                  type="number"
                  className="bg-white outline-none border-b px-2 py-2 rounded-xl w-1/2 shadow-2xl"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      min: Number(e.target.value),
                    })
                  }
                  placeholder="Min Price"
                />

                <input
                  type="number"
                  className="bg-white outline-none border-b px-2 py-2 rounded-xl w-1/2 shadow-2xl"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      max: Number(e.target.value),
                    })
                  }
                  placeholder="Max Price"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="col-span-9">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {filtered.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLists;
