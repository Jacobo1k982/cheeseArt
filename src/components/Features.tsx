import { Award, Truck, Heart } from 'lucide-react';

const features = [
    {
        icon: Award,
        title: 'Calidad Premium',
        description: 'Seleccionamos solo los mejores productos de queserías artesanales con denominación de origen.'
    },
    {
        icon: Truck,
        title: 'Envío Refrigerado',
        description: 'Transporte especializado con control de temperatura para garantizar la frescura perfecta.'
    },
    {
        icon: Heart,
        title: 'Atención Personalizada',
        description: 'Expertos en quesos disponibles para asesorarte en tu selección y maridajes perfectos.'
    }
];

export default function Features() {
    return (
        <section id="nosotros" className="py-24 bg-charcoal text-white relative overflow-hidden">
            {/* Patron de fondo sutil */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-amber/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <feature.icon className="w-8 h-8 text-amber" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}