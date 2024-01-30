// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   _id: string;
//   quantity: number;
//   // Add other properties of CartItem if needed
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   isCartOpen: boolean;
//   toggleCart: () => void;
//   addToCart: (newItem: CartItem) => void;
//   removeCartItem: (cartItem: CartItem) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const toggleCart = () => {
//     setIsCartOpen((prev) => !prev);
//   };

//   const addToCart = (newItem: CartItem) => {
//     setCartItems((prev) => {
//       const itemExistsIndex = prev.findIndex((item) => item._id === newItem._id);
//       if (itemExistsIndex !== -1) {
//         const updatedItem = { ...prev[itemExistsIndex], quantity: prev[itemExistsIndex].quantity + newItem.quantity };
//         return [...prev.slice(0, itemExistsIndex), updatedItem, ...prev.slice(itemExistsIndex + 1)];
//       } else {
//         return [...prev, newItem];
//       }
//     });
//   };

//   const removeCartItem = (cartItem: CartItem) => {
//     setCartItems((prev) => prev.filter((item) => item._id !== cartItem._id));
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         toggleCart,
//         isCartOpen,
//         addToCart,
//         removeCartItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export function useCartContext(): CartContextType {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCartContext must be used within a CartProvider');
//   }
//   return context;
// }
