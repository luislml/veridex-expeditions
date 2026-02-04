// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            <Helmet>
                <title>404 - Perdido en el Abismo | Veridex</title>
            </Helmet>

            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-sm pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h1 className="text-9xl font-bold text-violet-900/20 mb-4 select-none">404</h1>
                <h2 className="text-4xl font-serif text-violet-300 mb-6">Te has desviado del mapa conocido</h2>

                <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
                    Las coordenadas que buscas no existen en esta realidad.
                    O quizás... aún no has desarrollado la visión necesaria para percibirlas.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all hover:scale-105 shadow-xl shadow-violet-900/20 group"
                >
                    <Compass className="group-hover:rotate-45 transition-transform duration-500" />
                    <span>Regresar al Santuario</span>
                </Link>
            </motion.div>
        </div>
    );
}
