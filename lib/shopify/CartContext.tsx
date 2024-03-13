"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useMemo,
  useEffect,
} from "react";

// Define a context and a reducer for updating the context
type CartItem = {
  id: string;
  quantity: number;
  price: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  title: string;
  description: string;
  color: string;
  href: string;
  variant: string;
};

type Cart = CartItem[];

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number }
  | { type: "CLEAR_CART" };

type CartState = {
  cart: Cart;
  dispatch: React.Dispatch<CartAction>;
};

const CartContext = createContext<CartState | undefined>(undefined);

function cartReducer(state: Cart, action: CartAction) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingCartItemIndex = state.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingCartItemIndex >= 0) {
        const updatedCartItems = [...state];
        updatedCartItems[existingCartItemIndex].quantity +=
          action.item.quantity;

        return updatedCartItems;
      }

      return [...state, action.item];
    }

    case "REMOVE_ITEM": {
      const updatedCartItems = state.filter((item) => item.id !== action.id);
      return updatedCartItems;
    }

    case "UPDATE_QUANTITY": {
      const existingCartItemIndex = state.findIndex(
        (item) => item.id === action.id
      );

      if (existingCartItemIndex >= 0) {
        const updatedCartItems = [...state];
        updatedCartItems[existingCartItemIndex].quantity = action.quantity;

        return updatedCartItems;
      }

      // In case there's no such item in the cart, just return the current state
      return state;
    }

    case "CLEAR_CART": {
      return [];
    }

    default: {
      throw new Error(`Unhandled action type: ${(action as CartAction).type}`);
    }
  }
}

let initialCartState: CartItem[] = [];

if (typeof window !== "undefined") {
  try {
    const cartFromLocalStorage = window.localStorage.getItem("cart");
    const parsedCart = cartFromLocalStorage
      ? JSON.parse(cartFromLocalStorage)
      : [];
    initialCartState = Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error("Error reading cart from localStorage:", error);
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Error storing cart in localStorage:", error);
      }
    }
  }, [cart]);

  const value = useMemo(() => ({ cart, dispatch }), [cart, dispatch]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Export a hook which allows components to use the cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
