'use client';

import { useState } from 'react'; // Importamos useState
import { X, Trash2, Plus, Minus, Send, Store, Truck } from 'lucide-react';
import Image from 'next/image';
import { CartItem } from '@/src/types';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (id: number, change: number, weightLabel: string) => void;
    onRemove: (id: number, weightLabel: string) => void;
}

// 👇 CAMBIA ESTE NÚMERO POR EL TUYO
const WHATSAPP_NUMBER = "50612345678";

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
    // Estados para el método de entrega
    const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');
    const [address, setAddress] = useState('');

    const total = items.reduce((sum, item) => sum + (item.calculatedPrice * item.quantity), 0);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const handleWhatsAppOrder = () => {
        if (items.length === 0) return;

        // Validación simple si elige envío
        if (deliveryMethod === 'delivery' && address.trim() === '') {
            alert('Por favor ingresa tu dirección de envío.');
            return;
        }

        let message = '*🛒 Nuevo Pedido - Lactea Selecta*\n\n';
        message += '*Productos:*\n';
        
        items.forEach(item => {
            const subtotal = item.calculatedPrice * item.quantity;
            message += `• ${item.name} (${item.selectedWeight}) x${item.quantity} - ₡${subtotal.toFixed(2)}\n`;
        });

        message += `\n*Total:* ₡${total.toFixed(2)}\n`;
        
        // Agregar info de entrega
        message += `\n*📦 Método de Entrega:*\n`;
        if (deliveryMethod === 'pickup') {
            message += 'Retiro en tienda\n';
        } else {
            message += `Envío a domicilio\n📍 Dirección: ${address}\n`;
        }

        message += '\n¡Gracias por tu compra! 🧀';

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={onClose}
            />
            
            <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
                
                {/* Encabezado */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white">
                    <h3 className="font-serif text-2xl font-bold text-charcoal">Tu Carrito ({totalItems})</h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Contenido desplazable (Productos + Opciones de entrega) */}
                <div className="flex-1 overflow-y-auto bg-gray-50">
                    
                    {/* Lista de Productos */}
                    <div className="p-6 space-y-4">
                        {items.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-5xl mb-4">🧀</div>
                                <p className="text-gray-500 font-medium">Tu carrito está vacío</p>
                                <p className="text-gray-400 text-sm mt-1">¡Añade algunos quesos!</p>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={`${item.id}-${item.selectedWeight}`} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="80px"
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-semibold text-charcoal leading-tight">{item.name}</h4>
                                            <span className="text-xs bg-amber/10 text-amber font-medium px-2 py-0.5 rounded-full">
                                                {item.selectedWeight}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, -1, item.selectedWeight)}
                                                    className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                                >
                                                    <Minus className="w-3 h-3 text-gray-600" />
                                                </button>
                                                <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, 1, item.selectedWeight)}
                                                    className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                                >
                                                    <Plus className="w-3 h-3 text-gray-600" />
                                                </button>
                                            </div>
                                            <p className="text-amber font-bold text-sm">₡{item.calculatedPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => onRemove(item.id, item.selectedWeight)}
                                        className="text-gray-300 hover:text-red-500 self-start transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Sección de Entrega (Dentro del scroll en móvil, pero visualmente separada) */}
                    {items.length > 0 && (
                        <div className="p-6 pt-0">
                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <h4 className="font-semibold text-charcoal mb-3 text-sm">Opciones de Entrega</h4>
                                
                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    {/* Botón Retirar */}
                                    <button
                                        onClick={() => setDeliveryMethod('pickup')}
                                        className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-all text-sm ${
                                            deliveryMethod === 'pickup' 
                                            ? 'bg-amber/10 border-amber text-amber font-semibold' 
                                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                                        }`}
                                    >
                                        <Store className="w-4 h-4" />
                                        Retirar
                                    </button>
                                    
                                    {/* Botón Delivery */}
                                    <button
                                        onClick={() => setDeliveryMethod('delivery')}
                                        className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-all text-sm ${
                                            deliveryMethod === 'delivery' 
                                            ? 'bg-amber/10 border-amber text-amber font-semibold' 
                                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                                        }`}
                                    >
                                        <Truck className="w-4 h-4" />
                                        Delivery
                                    </button>
                                </div>

                                {/* Input de Dirección (Condicional) */}
                                {deliveryMethod === 'delivery' && (
                                    <div className="animate-fade-in">
                                        <label className="text-xs text-gray-500 mb-1 block">Dirección de envío:</label>
                                        <textarea 
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Escribe tu dirección completa..."
                                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-amber focus:border-amber focus:outline-none resize-none"
                                            rows={2}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer con Total y Botón */}
                <div className="p-6 border-t border-gray-100 bg-white">
                    <div className="flex justify-between mb-4 items-baseline">
                        <span className="text-gray-600 font-medium">Total estimado:</span>
                        <span className="text-3xl font-bold text-charcoal">₡{total.toFixed(2)}</span>
                    </div>
                    <button 
                        onClick={handleWhatsAppOrder}
                        disabled={items.length === 0}
                        className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
                    >
                        <Send className="w-5 h-5" />
                        Enviar Pedido por WhatsApp
                    </button>
                    <p className="text-xs text-gray-400 text-center mt-3">
                        Los precios pueden variar según el peso exacto.
                    </p>
                </div>
            </div>
        </>
    );
}