import { createContext } from "react";
import { Cart } from "./Cart";

type CartContextProviderProps = {
  children: React.ReactNode;
};

const CartContext = createContext(Cart);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  return <CartContext.Provider value={Cart}>{children}</CartContext.Provider>;
};
