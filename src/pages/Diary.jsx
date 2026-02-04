// src/pages/Diary.jsx
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const ENTRIES = [
    {
        date: "14 de Octubre, 1930",
        title: "Susurros en el Hielo",
        excerpt: "Nuestra expedición a la Antártida ha encontrado estructuras que desafían la datación geológica. Los vientos suenan como flautas...",
        author: "Dr. William Dyer"
    },
    {
        date: "2 de Noviembre, 1930",
        title: "El Incidente de Innsmouth",
        excerpt: "Recomendamos a todos los viajeros evitar la ruta costera norte. Los lugareños presentan una fisonomía inquietante y una hostilidad abierta.",
        author: "Agente J. Malone"
    },
    {
        date: "20 de Marzo, 1931",
        title: "Reporte de La Paz",
        excerpt: "La altitud no es lo único que dificulta la respiración aquí. Hay una presión en el aire, como si el cielo estuviera hecho de agua pesada.",
        author: "Prof. Armitage"
    }
];

export default function Diary() {
    return (
        <div className="relative min-h-screen">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-black/70 z-10" />
                <img
                    src="/images/diary-bg.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
                <Helmet>
                    <title>Diario de Campo | Veridex Expeditions</title>
                </Helmet>

                <h1 className="text-4xl font-bold text-white mb-12 border-b border-violet-900/30 pb-4">
                    Bitácora de Expediciones
                </h1>

                <div className="space-y-8">
                    {ENTRIES.map((entry, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-zinc-900/50 p-6 rounded-lg border-l-4 border-violet-600 hover:bg-zinc-900 transition-colors"
                        >
                            <div className="flex justify-between items-baseline mb-2">
                                <h2 className="text-xl font-bold text-violet-300">{entry.title}</h2>
                                <span className="text-xs font-mono text-gray-500 uppercase">{entry.date}</span>
                            </div>
                            <p className="text-gray-300 italic mb-4">"{entry.excerpt}"</p>
                            <div className="text-right">
                                <span className="text-xs text-gray-500 font-bold">— {entry.author}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
