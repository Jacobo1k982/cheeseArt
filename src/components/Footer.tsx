import { Milk, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Milk className="w-6 h-6 text-amber" />
                            <span className="font-serif text-xl font-bold">Lactea Selecta</span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Comprometidos con la excelencia láctea desde 1985.
                            Tradición, calidad y pasión en cada producto.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Enlaces</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-amber transition-colors">Inicio</a></li>
                            <li><a href="#productos" className="hover:text-amber transition-colors">Productos</a></li>
                            <li><a href="#nosotros" className="hover:text-amber transition-colors">Nosotros</a></li>
                            <li><a href="#contacto" className="hover:text-amber transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Síguenos</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2024 Lactea Selecta. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}