// src/components/Header.jsx
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 supports-[backdrop-filter]:bg-black/60">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group cursor-pointer relative z-50">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/40 transition-all duration-300">
                        <Compass className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                            Veridex
                        </h1>
                        <p className="text-[10px] uppercase tracking-widest text-violet-400 font-medium">Expeditions</p>
                    </div>
                </Link>

                {/* Nav - Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Destinos</Link>
                    <Link to="/diary" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Diario</Link>
                    <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sobre Nosotros</Link>
                    <button className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all text-white">
                        Mi Cuenta
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 relative z-50"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Portaled to body to escape sticky/blur context */}
            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 pt-20"
                        >
                            <Link
                                to="/"
                                onClick={toggleMenu}
                                className="text-3xl font-serif text-white hover:text-violet-400 transition-colors"
                            >
                                Destinos
                            </Link>
                            <Link
                                to="/diary"
                                onClick={toggleMenu}
                                className="text-3xl font-serif text-white hover:text-violet-400 transition-colors"
                            >
                                Diario
                            </Link>
                            <Link
                                to="/about"
                                onClick={toggleMenu}
                                className="text-3xl font-serif text-white hover:text-violet-400 transition-colors"
                            >
                                Sobre Nosotros
                            </Link>
                            <button className="px-8 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 transition-colors text-lg mt-8">
                                Ingresar
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </header>
    );
}
