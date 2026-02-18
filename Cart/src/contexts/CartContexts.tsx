import React, { createContext, useContext, useState, type ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};
type Product = Omit<CartItem, 'quantity'>;
type UpProduct=Omit<CartItem,|"price"|"name"|"image">
type CartContextType = {
  items: CartItem[];
  addToCart: (product:Product) => void;
  totalItems: number;
  UpdateCart:(product:UpProduct)=>void;
  reMoveItem:(id:number)=>void
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode}) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product:Product) => {
    setItems((prev)=>{
      const exsiting=prev.find((item)=>item.id===product.id);
      if(exsiting){
        return prev.map((item)=>item.id===product.id?{...item, quantity:item.quantity+1}:item)
      };
      return [...prev,{...product,quantity:1}];
    });
  };
  const UpdateCart=(product:UpProduct)=>{
    if(product.quantity<=0){
      reMoveItem
      return ;
    }
    setItems((prev)=>prev.map((item)=>item.id===product.id?{...item,quantity:product.quantity}:item)
      
    );
  }
  const reMoveItem=(id:number)=>{
       setItems((prev)=>prev.filter((item)=>item.id!==id))
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, totalItems ,reMoveItem,UpdateCart}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart ត្រូវប្រើក្នុង CartProvider");
  return context;
}