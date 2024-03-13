import "./globals.css";
import { Oswald } from "next/font/google";
import { CartProvider } from "../../lib/shopify/CartContext";
import CartButton from "../components/CartButton";

const oswald = Oswald({
  weight: "400", // Adjust the weight as needed
  subsets: ["latin"], // Specify subsets if needed
  style: "normal", // Choose the style
  display: "swap", // Recommended for font display
});

export const metadata = {
  title: "WestCraft Brewers California",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oswald.className}>
      <CartProvider>
        <body>
          <CartButton />
          {children}
        </body>
      </CartProvider>
    </html>
  );
}
