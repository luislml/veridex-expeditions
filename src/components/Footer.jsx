// src/components/Footer.jsx
import { Github, Twitter, Instagram, MapPin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative z-10 bg-black/90 backdrop-blur-sm border-t border-violet-900/20 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-800 flex items-center justify-center">
                                <span className="text-white font-bold">V</span>
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-wide">Veridex</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Explorando los límites de la realidad y la ficción. Viajes curados para el viajero intrépido que busca lo inefable.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Explorar</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-violet-300 transition-colors">Destinos</a></li>
                            <li><a href="#" className="hover:text-violet-300 transition-colors">Expediciones</a></li>
                            <li><a href="#" className="hover:text-violet-300 transition-colors">Relatos</a></li>
                            <li><a href="#" className="hover:text-violet-300 transition-colors">Sobre Nosotros</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-violet-500 mt-0.5" />
                                <span>Miskatonic University,<br />Arkham, MA 01923</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-violet-500" />
                                <span>contact@veridex-expeditions.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Veridex Expeditions. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-violet-400">Privacidad</a>
                        <a href="#" className="hover:text-violet-400">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
