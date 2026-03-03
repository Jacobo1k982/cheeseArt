'use client';

import Image from 'next/image';
import { ScrollText, Wheat, Heart, Award } from 'lucide-react';

const milestones = [
    {
        year: "El Origen",
        title: "Un Accidente Glorioso",
        description: "Hace más de 7,000 años, un viajero en el desierto guardó leche en una bolsa de piel de cabra. El calor del sol y las bacterias naturales hicieron su magia: nació el primer queso.",
        icon: ScrollText,
    },
    {
        year: "La Tradición",
        title: "Artesanía Europea",
        description: "Durante siglos, monjes en monasterios europeos perfeccionaron el arte del quesero. Transformaron la conservación de la leche en una cocina de sabores complejos y texturas divinas.",
        icon: Wheat,
    },
    {
        year: "Nuestra Pasión",
        title: "Selección Exclusiva",
        description: "En Lactea Selecta, viajamos por el mundo en busca de estos tesoros. Probamos cientos de variedades para traerte solo lo mejor, respetando la tradición y apoyando a productores locales.",
        icon: Heart,
    },
];

export default function History() {
    return (
        <section id="historia" className="py-24 bg-white overflow-hidden relative">
            {/* Textura de fondo sutil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Encabezado de Sección */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 rounded-full bg-amber/10 text-amber text-sm font-semibold tracking-wider uppercase mb-4 border border-amber/20">
                        Nuestra Historia
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-6">
                        El Arte del Queso
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Un viaje a través del tiempo, desde los pastos antiguos hasta tu mesa.
                    </p>
                </div>

                {/* Contenedor Principal */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Columna Izquierda: Imagen Decorativa */}
                    <div className="relative hidden lg:block">
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2073&auto=format&fit=crop"
                                alt="Proceso artesanal del queso"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                        </div>
                        {/* Elemento flotante */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                            <div className="flex items-center gap-4">
                                <div className="bg-amber/10 p-3 rounded-full">
                                    <Award className="w-8 h-8 text-amber" />
                                </div>
                                <div>
                                    <p className="font-bold text-charcoal font-serif text-lg">+500 años</p>
                                    <p className="text-sm text-gray-500">De tradición láctea</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Timeline */}
                    <div className="relative">
                        {/* Línea vertical decorativa */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-amber/20 hidden md:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative flex items-start gap-6 group">
                                    {/* Icono / Círculo */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-amber rounded-full flex items-center justify-center shadow-md z-10 transition-all duration-300 group-hover:bg-amber group-hover:text-white text-amber">
                                        <milestone.icon className="w-5 h-5" />
                                    </div>

                                    {/* Contenido de Texto */}
                                    <div className="bg-cream/50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex-grow">
                                        <span className="text-xs font-bold text-amber uppercase tracking-wider">{milestone.year}</span>
                                        <h3 className="font-serif text-2xl font-bold text-charcoal mt-1 mb-3">{milestone.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}