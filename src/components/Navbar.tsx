'use client';

import { useState, useEffect } from 'react';
import { Milk, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
    cartCount: number;
    onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full z-50 glass-effect border-b border-amber/10 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Milk className="w-8 h-8 text-amber" />
                        <span className="font-serif text-2xl font-bold tracking-tight">Lactea Selecta</span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium hover:text-amber transition-colors">
                            Inicio
                        </button>
                        <button onClick={() => scrollToSection('productos')} className="text-sm font-medium hover:text-amber transition-colors">
                            Productos
                        </button>
                        <button onClick={() => scrollToSection('nosotros')} className="text-sm font-medium hover:text-amber transition-colors">
                            Nosotros
                        </button>
                        <button onClick={() => scrollToSection('contacto')} className="text-sm font-medium hover:text-amber transition-colors">
                            Contacto
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onCartClick}
                            className="p-2 hover:bg-amber/10 rounded-full transition-colors relative"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-amber text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>


            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-amber/10 rounded-md">
                            Inicio
                        </button>
                        <button onClick={() => scrollToSection('productos')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-amber/10 rounded-md">
                            Productos
                        </button>
                        <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-amber/10 rounded-md">
                            Nosotros
                        </button>
                        <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-3 py-2 text-base font-medium hover:bg-amber/10 rounded-md">
                            Contacto
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}