'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/src/types';
import { products, filters } from '@/src/data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductsProps {
    onAddToCart: (product: Product, weightLabel: string, multiplier: number) => void;
}

// Configuración de opciones de peso
const weightOptions = [
    { label: '1/4 kg', multiplier: 0.25 },
    { label: '1/2 kg', multiplier: 0.5 },
    { label: '1 kg +', multiplier: 1 }, // El "+" indica que pueden poner más cantidad en el carrito
];

// Componente interno para la Tarjeta de Producto
function ProductCard({ product, onAddToCart }: { product: Product, onAddToCart: ProductsProps['onAddToCart'] }) {
    // Estado local para saber qué peso está seleccionado en esta tarjeta
    const [selectedWeight, setSelectedWeight] = useState(weightOptions[2]); // Por defecto: 1 kg

    // Calculamos el precio dinámico basado en el precio base y el multiplicador
    const displayPrice = product.price * selectedWeight.multiplier;

    // Función que se ejecuta al hacer click en "Añadir"
    const handleAdd = () => {
        // Enviamos el producto, la etiqueta del peso y el multiplicador al padre
        onAddToCart(product, selectedWeight.label, selectedWeight.multiplier);
    };

    return (
        <div className="cheese-card group/card flex-shrink-0 w-[300px] md:w-[340px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 snap-center flex flex-col">
            {/* Imagen del Producto */}
            <div className="relative overflow-hidden h-56">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="340px"
                    className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    unoptimized // Necesario para imágenes externas sin configurar en next.config.js
                />

                {/* Overlay con botón de añadir (visible en desktop hover o siempre en móvil) */}
                <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 group-hover/card:md:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                        onClick={handleAdd}
                        className="bg-white text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-amber hover:text-white transition-all transform hover:scale-105 shadow-lg"
                    >
                        Añadir al carrito
                    </button>
                </div>

                {/* Badge de Origen */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-charcoal shadow-sm">
                    {product.origin}
                </div>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>

                {/* Selector de Peso */}
                <div className="flex gap-2 mb-4">
                    {weightOptions.map((opt) => (
                        <button
                            key={opt.label}
                            onClick={() => setSelectedWeight(opt)}
                            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${selectedWeight.label === opt.label
                                    ? 'bg-amber text-white border-amber'
                                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-amber'
                                }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>

                {/* Precio Final */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div>
                        <span className="text-2xl font-bold text-amber">₡{displayPrice.toFixed(2)}</span>
                        {/* Mostrar precio por kg si no es 1kg completo */}
                        {selectedWeight.multiplier !== 1 && (
                            <span className="text-xs text-gray-400 block">Base: ₡{product.price.toFixed(2)}/kg</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Componente Principal de Productos
export default function Products({ onAddToCart }: ProductsProps) {
    const [activeFilter, setActiveFilter] = useState('all');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Filtrado de productos
    const filteredProducts = activeFilter === 'all'
        ? products
        : products.filter(p => p.category === activeFilter);

    // Función para mover el carrusel
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Ancho aproximado de la tarjeta
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="productos" className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-12 animate-fade-in">
                    <span className="text-amber font-semibold tracking-wider uppercase text-sm">Nuestro Catálogo</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">Productos Seleccionados</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Selecciona el peso deseado y añade tus quesos favoritos al carrito.
                    </p>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-amber text-white border-amber shadow-md'
                                    : 'border-gray-300 hover:border-amber hover:text-amber bg-white'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Contenedor del Carrusel */}
                <div className="relative group">
                    {/* Botones de Navegación */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-amber hover:text-white text-charcoal p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-2"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-amber hover:text-white text-charcoal p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:-translate-x-2"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Pista del Carrusel */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-8 pt-4 px-2 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={onAddToCart}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}