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

  // Función existente para agregar al carrito
  const addToCart = (product: Product, weightLabel: string, multiplier: number) => {
    const calculatedPrice = product.price * multiplier;
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedWeight === weightLabel);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.selectedWeight === weightLabel
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        ...product,
        quantity: 1,
        selectedWeight: weightLabel,
        weightMultiplier: multiplier,
        calculatedPrice: calculatedPrice
      }];
    });
  };

  // Función existente para actualizar cantidad
  const updateQuantity = (id: number, change: number, weightLabel: string) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedWeight === weightLabel) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  // Función existente para eliminar
  const removeFromCart = (id: number, weightLabel: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedWeight === weightLabel)));
  };

  // 👇 NUEVA FUNCIÓN PARA VACIAR EL CARRITO
  const clearCart = () => {
    setCartItems([]);
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
      <Products onAddToCart={addToCart} />
      <Features />

      {/* 👇 AQUÍ DEBES AGREGAR onClearCart={clearCart} */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClearCart={clearCart}
      />
    </main>
  );
}