export default function Stats() {
    const stats = [
        { value: '20+', label: 'Variedades' },
        { value: '100%', label: 'Artesanal' },
        { value: '5', label: 'Años de experiencia' },
        { value: '20+', label: 'Clientes felices' },
    ];

    return (
        <section className="py-12 bg-white border-y border-amber/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <p className="font-serif text-4xl font-bold text-amber">{stat.value}</p>
                            <p className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}