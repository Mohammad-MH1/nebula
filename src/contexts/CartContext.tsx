import { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  category: string;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
  deleteItem: (id: number) => void;
  isCartOpen: boolean;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (item: CartItem) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(prev =>
        prev.map(cartItem =>
          cartItem.id === existingItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems(prev => [...prev, item]);
    }
  };

  const removeItem = (item: CartItem) => {
    const existingItem: CartItem | undefined = cartItems.find(
      cartItem => cartItem.id === item.id
    );

    const existingItemQuantity = existingItem?.quantity;
    if (existingItem && existingItemQuantity! > 1) {
      setCartItems(prev =>
        prev.map(cartItem =>
          cartItem.id === existingItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCartItems(prev => prev.filter(cartItem => cartItem.id !== item.id));
    }
  };

  const deleteItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        deleteItem,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
