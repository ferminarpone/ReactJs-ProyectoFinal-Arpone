import { createContext, useState } from "react";

export const CarritoContext = createContext(null);

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalAmount = () => {
    let parcial = cart.map(
      (item) => Number(item.precio.replace(".", "")) * item.quantity
    );
    return parcial.reduce((acc, prod) => acc + prod, 0).toLocaleString("de-DE");
  };

  return (
    <CarritoContext.Provider value={{ cart, setCart, totalAmount }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CartContext;
