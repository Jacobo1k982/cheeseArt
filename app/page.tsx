'use client';

import { useState } from 'react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Stats from '@/src/components/Stats';
import Products from '@/src/components/Products';
import Features from '@/src/components/Features';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';
import Cart from '@/src/components/Cart';
import { Product, CartItem } from '@/src/types';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Añadimos weightLabel y multiplier
  const addToCart = (product: Product, weightLabel: string, multiplier: number) => {
    const calculatedPrice = product.price * multiplier;

    setCartItems(prev => {
      // Buscamos si ya existe el producto CON EL MISMO PESO
      const existing = prev.find(item => item.id === product.id && item.selectedWeight === weightLabel);

      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.selectedWeight === weightLabel
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Si no existe, creamos el nuevo item con los datos de peso
      return [...prev, {
        ...product,
        quantity: 1,
        selectedWeight: weightLabel,
        weightMultiplier: multiplier,
        calculatedPrice: calculatedPrice
      }];
    });
  };

  const updateQuantity = (id: number, change: number, weightLabel: string) => {
    setCartItems(prev => prev.map(item => {
      // Solo modificamos si coincide ID y PESO
      if (item.id === id && item.selectedWeight === weightLabel) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: number, weightLabel: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedWeight === weightLabel)));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <Stats />
      {/* Pasamos la función actualizada */}
      <Products onAddToCart={addToCart} />
      <Features />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </main>
  );
}