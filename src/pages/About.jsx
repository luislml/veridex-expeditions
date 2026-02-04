// src/pages/About.jsx
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="relative min-h-screen">
            {/* Background Image */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-black/70 z-10" />
                <img
                    src="/images/about-bg.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
                <Helmet>
                    <title>Sobre Nosotros | Veridex Expeditions</title>
                </Helmet>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-violet-400 mb-8">Nuestra Misión</h1>

                    <div className="prose prose-invert prose-lg text-gray-300">
                        <p className="lead text-xl text-violet-200/80 mb-6">
                            Veridex Expeditions nació de la obsesión por lo que yace más allá del borde del mapa.
                        </p>

                        <p className="mb-4">
                            Fundada en 1928 por miembros renegados de la Universidad de Miskatonic, nuestra organización se dedica a catalogar y visitar aquellos lugares donde el velo entre mundos es peligrosamente delgado.
                        </p>

                        <p className="mb-4">
                            No somos una agencia de viajes convencional. Nuestros guías están entrenados en cartografía esotérica y primeros auxilios psíquicos. Entendemos que el viajero moderno busca algo más que "turismo"; busca la verdad sobre nuestra insignificancia en el cosmos.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Lo que ofrecemos</h3>
                        <ul className="list-disc pl-6 space-y-2 marker:text-violet-500">
                            <li>Rutas seguras a través de geometrías no euclidianas.</li>
                            <li>Alojamiento en santuarios protegidos con símbolos arcanos.</li>
                            <li>Seguros de viaje que cubren locura temporal y permanente.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
