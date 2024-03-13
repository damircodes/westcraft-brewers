"use client";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
      // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

import { usePathname } from "next/navigation";

import Image from "next/image";

import NavFixed from "@/components/NavFixed";
import formatter from "../../../../utils/helpers";

import { getProductByHandle } from "../../../../lib/shopify/shopify";
import { useCart } from "../../../../lib/shopify/CartContext";

const sizes = {
  types: [
    { name: "6 Pack", inStock: true },
    { name: "Case", inStock: true },
  ],
};

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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

interface VariantNode {
  id: string;
  title: string;
}

interface VariantEdge {
  node: VariantNode;
}

interface Variants {
  edges: VariantEdge[];
}

interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: PriceRange;
  images: Images;
  variants: Variants;
}

export default function ProductPage() {
  const pathname = usePathname();
  const urlPath = pathname;
  const parts = urlPath.split("/");
  const slug = parts.pop();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cart, dispatch } = useCart();

  const [selectedSize, setSelectedSize] = useState(sizes.types[0].name);

  const [product, setProduct] = useState<Product | null>(null);

  const addToCart = (event: React.FormEvent | React.MouseEvent) => {
    event.preventDefault();

    // Check if product is not null before accessing its properties
    if (product !== null) {
      const variant =
        selectedSize === "6 Pack"
          ? product.variants.edges[0]
          : product.variants.edges[1];

      dispatch({
        type: "ADD_ITEM",
        item: {
          id: variant.node.id,
          title: product.title,
          description: product.description,
          imageSrc: product.images.edges[0]?.node.url,
          quantity: 1,
          variant: variant.node.title,
          price: product.priceRange.maxVariantPrice.amount,
          imageAlt: product.images.edges[0]?.node.altText || "",
          name: product.title,
          color: "default-color", // Replace with actual color
          href: "/default-path", // Replace with actual href
        },
      });
    } else {
      // Handle the case where product is null
      // This could be showing an error message to the user, or whatever makes sense in your application
      console.error("Product is null");
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (slug !== undefined) {
        const data = await getProductByHandle(slug);
        setProduct(data);
      }
    };

    fetchProduct();
  }, [slug]);

  return (
    <div className="bg-slate-400">
      <NavFixed />
      <div className="pt-6">
        {/* Image gallery */}

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {product?.images?.edges?.[0]?.node.url ? (
              <Image
                src={product.images.edges[0].node.url}
                alt={product.images.edges[0]?.node.altText || ""}
                width={300}
                height={300}
              />
            ) : null}
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product?.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl pt-80 tracking-tight text-gray-900">
              {formatter.format(
                Number(product?.priceRange?.maxVariantPrice?.amount || "0")
              )}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={(newSize) => setSelectedSize(newSize)}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-2 gap-4">
                    {sizes.types.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size.name}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                onClick={addToCart}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
