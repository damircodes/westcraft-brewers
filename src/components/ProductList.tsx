import React, { useEffect, useState } from "react";
import { getProductsInCollection } from "../../lib/shopify/shopify";

import { FadeIn } from "./FadeIn";

import ProductCard from "./ProductCard";

interface PriceRange {
  maxVariantPrice: {
    amount: string;
  };
}

interface ImageNode {
  id: string;
  url: string;
  altText?: string; // add this line
}

interface Images {
  edges: {
    node: ImageNode;
  }[];
}

interface Node {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: PriceRange;
  images: Images;
}

interface Product {
  node: Node;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsInCollection();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <FadeIn>
      <div className="bg-slate-400">
        <div className="w-full mx-auto py-16 px-4">
          <h2 className="text-5xl 2xl:mx-24 text-white font-semibold text-gray-900 mb-6">
            Craft Beers
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 2xl:grid-cols-4 gap-y-10 gap-x-20">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
