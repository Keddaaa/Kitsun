'use client';

import { createContext, useContext, useState } from 'react';

export type CartItem = {
  id: number;
  name: string;
  price: string;
  size: string;
  qty: number;
  video: string;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (item: CartItem) => void;
  remove: (id: number, size: string) => void;
  update: (id: number, size: string, qty: number) => void;
};

const CartContext = createContext<CartCtx>({
  items: [],
  count: 0,
  isOpen: false,
  openCart: () => {},
  closeCart: () => {},
  add: () => {},
  remove: () => {},
  update: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const add = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.size === item.size);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, qty: i.qty + item.qty }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const remove = (id: number, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
  };

  const update = (id: number, size: string, qty: number) => {
    if (qty <= 0) { remove(id, size); return; }
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.size === size ? { ...i, qty } : i))
    );
  };

  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, count, isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false), add, remove, update }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
