'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const scrollToProducts = () => {
        document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-amber-light/20" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber/5 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-up">
                        <span className="inline-block px-4 py-2 rounded-full bg-amber/10 text-amber-dark text-sm font-semibold tracking-wider uppercase mb-6 border border-amber/20">
                            Desde 1985
                        </span>
                        <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight mb-6 text-charcoal">
                            Excelencia <br />
                            <span className="text-amber italic">Láctea</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                            Descubre nuestra selección de quesos artesanales y productos lácteos premium.
                            Tradición, calidad y sabor en cada bocado.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="px-8 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-charcoal-light transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Ver Catálogo
                            </button>

                            {/* BOTÓN MODIFICADO */}
                            <Link
                                href="/historia"
                                className="px-8 py-4 border-2 border-charcoal text-charcoal rounded-full font-medium hover:bg-charcoal hover:text-white transition-all"
                            >
                                Conoce Más
                            </Link>
                        </div>
                    </div>

                    <div className="relative animate-float hidden lg:block">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://st.depositphotos.com/3228923/4301/i/450/depositphotos_43016267-stock-photo-traditional-smoked-cheese.jpg"
                                alt="Quesos artesanales"
                                width={800}
                                height={600}
                                className="w-full h-[600px] object-cover"
                                priority
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="glass-effect p-6 rounded-xl">
                                    <p className="font-serif text-xl font-semibold text-charcoal">Selección del Mes</p>
                                    <p className="text-sm text-gray-600 mt-1">Queso Manchego Curado</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-amber/20 rounded-full blur-3xl" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-amber-light/20 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}