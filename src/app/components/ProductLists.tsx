"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProducts(data);
    };
    loadProducts();
  }, []);
  console.log(products);
  return (
    <div className="grid grid-cols-12">
      <div className="grid col-span-3">side bar</div>
      <div className="grid col-span-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
