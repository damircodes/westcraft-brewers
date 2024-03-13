import Image from "next/image";
import Link from "next/link";

// ProductCard.tsx

interface ImageNode {
  id: string;
  url: string;
}

interface Images {
  edges: {
    node: ImageNode;
  }[];
}

interface PriceRange {
  maxVariantPrice: {
    amount: string;
  };
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

interface ProductCardProps {
  product: Product;
}

interface ImageNode {
  id: string;
  url: string;

  altText?: string; // add this line
}

export default function ProductCard({ product }: ProductCardProps) {
  const { handle, title, images } = product.node;
  const { url: originalSrc, altText } = images.edges[0].node;
  console.log(product);

  return (
    <div>
      <h2 className="text-black text-md pb-8">{title}</h2>
      <Link href={`/products/${handle}`}>
        <div className="w-full bg-slate-400 rounded-3xl">
          <div className="relative group-hover:opacity-75">
            <Image
              className=""
              src={originalSrc}
              alt={altText ?? "Image description"} // Use a default value if altText is undefined
              width={300}
              height={300}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
