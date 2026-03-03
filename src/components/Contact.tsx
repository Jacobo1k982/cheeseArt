'use client';

import { useState } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mensaje enviado correctamente. Te contactaremos pronto.');
        setFormData({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <section id="contacto" className="py-24 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-amber font-semibold tracking-wider uppercase text-sm">Contacto</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">Visítanos</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Gracias por visitarnos, ven y recoge tus pedidos.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-amber/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-amber" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Dirección</h4>
                                    <p className="text-gray-600">Calle Topo , San Pedro, Montes de Oca.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-amber/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-amber" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Horario</h4>
                                    <p className="text-gray-600">Lun - Sáb: 9:00 - 17:00<br />Domingo: 10:00 - 14:00</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-amber/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-amber" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Teléfono</h4>
                                    <p className="text-gray-600">+506 87 36 14 32</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        value={formData.nombre}
                                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all"
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea
                                    rows={4}
                                    value={formData.mensaje}
                                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition-all"
                                    placeholder="¿En qué podemos ayudarte?"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-amber hover:bg-amber-dark text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}