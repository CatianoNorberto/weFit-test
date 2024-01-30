import { createContext, ReactNode, useEffect, useState } from "react";

interface Book {
  id: string;
  price: number;
  title: string;
  image: string;
  quantity: number;
}

interface Cart {
  products: Book[];
  total: number;
  addCart: (data: Book) => void;
  productAlreadyAdded: (id: string) => boolean;
  removeProduct: (id: string) => void;
  handleIncrease(id: string): void;
  handleDecrease(id: string): void;
}

interface Props {
  children?: ReactNode;
}

const CartContext = createContext<Cart>({} as Cart);

export const CartProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Book[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tot = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    setTotal(tot)

  }, [products, total]);

  //função para adicionar os produtos
  function addCart(data: Book) {
    setProducts([...products, data]);
  }

  //função que permite que o produto seja chamado uma unica vez
  function productAlreadyAdded(id: string) {
    return products.some((book) => book.id === id);
  }

  //função para remover o produto 
  function removeProduct(id: string) {
    const filteredProducts = products.filter((book) => book.id !== id);
    setProducts(filteredProducts);
  }

  function handleIncrease(id: string) {
    const productUpdated = products.map((book) => {
      if (book.id === id) {
        return { ...book, quantity: book.quantity + 1 };
      }else{
        return book;
      }
    });

    setProducts(productUpdated);
  }

  function handleDecrease(id: string) {
    const productUpdated = products.map((book) => {
      if (book.id === id) {
        return { ...book, quantity: book.quantity - 1 };
      }else{
        return book;
      }
    });

    setProducts(productUpdated);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addCart,
        total,
        productAlreadyAdded,
        removeProduct,
        handleIncrease,
        handleDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
