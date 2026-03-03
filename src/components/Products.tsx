'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/src/types';
import { products, filters } from '@/src/data/products';
import { ChevronLeft, ChevronRight, ChevronDown, Check } from 'lucide-react';

interface ProductsProps {
    onAddToCart: (product: Product, weightLabel: string, multiplier: number) => void;
}

const weightOptions = [
    { label: '1/4 kg', multiplier: 0.25 },
    { label: '1/2 kg', multiplier: 0.5 },
    { label: '1 kg +', multiplier: 1 },
];

function ProductCard({ product, onAddToCart }: { product: Product, onAddToCart: ProductsProps['onAddToCart'] }) {
    const [selectedWeight, setSelectedWeight] = useState(weightOptions[2]);
    const displayPrice = product.price * selectedWeight.multiplier;

    const handleAdd = () => {
        onAddToCart(product, selectedWeight.label, selectedWeight.multiplier);
    };

    return (
        <div className="cheese-card group/card flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 snap-center flex flex-col w-[85vw] md:w-[60vw] lg:w-[40vw] max-w-2xl">
            {/* Imagen del Producto */}
            <div className="relative overflow-hidden h-56 md:h-72">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 group-hover/card:md:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                        onClick={handleAdd}
                        className="bg-white text-charcoal px-6 py-3 rounded-full font-semibold hover:bg-amber hover:text-white transition-all transform hover:scale-105 shadow-lg"
                    >
                        Añadir al carrito
                    </button>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-charcoal shadow-sm">
                    {product.origin}
                </div>
            </div>

            {/* Detalles del Producto */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>

                <div className="flex gap-2 mb-4">
                    {weightOptions.map((opt) => (
                        <button
                            key={opt.label}
                            onClick={() => setSelectedWeight(opt)}
                            className={`flex-1 py-2 text-sm font-semibold rounded-lg border transition-all ${selectedWeight.label === opt.label
                                ? 'bg-amber text-white border-amber'
                                : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-amber'
                                }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div>
                        <span className="text-2xl font-bold text-amber">₡{displayPrice.toFixed(2)}</span>
                        {selectedWeight.multiplier !== 1 && (
                            <span className="text-xs text-gray-400 block">Base: ₡{product.price.toFixed(2)}/kg</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Products({ onAddToCart }: ProductsProps) {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredProducts = activeFilter === 'all'
        ? products
        : products.filter(p => p.category === activeFilter);

    const activeLabel = filters.find(f => f.id === activeFilter)?.label || 'Seleccionar';

    // Función de scroll dinámica adaptada al nuevo ancho
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            // Obtenemos el ancho real de la primera tarjeta
            const firstCard = container.querySelector('div') as HTMLElement;

            if (firstCard) {
                const cardWidth = firstCard.offsetWidth;
                // Obtenemos el gap definido en tailwind (gap-6 = 1.5rem = 24px)
                const gap = 24;
                const scrollAmount = cardWidth + gap;

                container.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

    const handleSelect = (filterId: string) => {
        setActiveFilter(filterId);
        setIsDropdownOpen(false);
    };

    return (
        <section id="productos" className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-fade-in">
                    <span className="text-amber font-semibold tracking-wider uppercase text-sm">Nuestro Catálogo</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">Productos Seleccionados</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Desliza para descubrir nuestra selección.
                    </p>
                </div>

                {/* Filtro Dropdown */}
                <div className="flex justify-center mb-10">
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-between w-64 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber/50"
                        >
                            <span className="font-medium text-charcoal">{activeLabel}</span>
                            <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <div
                            className={`absolute top-full left-0 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 z-20 overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen
                                    ? 'opacity-100 scale-y-100 translate-y-0'
                                    : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                                }`}
                        >
                            <div className="py-2">
                                {filters.map((filter) => (
                                    <button
                                        key={filter.id}
                                        onClick={() => handleSelect(filter.id)}
                                        className={`flex items-center justify-between w-full px-6 py-3 text-left transition-colors duration-200 ${activeFilter === filter.id
                                                ? 'bg-amber/10 text-amber font-semibold'
                                                : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span>{filter.label}</span>
                                        <div className={`transition-all duration-200 ${activeFilter === filter.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                                            <Check className="w-5 h-5 text-amber" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenedor del Carrusel */}
                <div className="relative group">
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

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
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