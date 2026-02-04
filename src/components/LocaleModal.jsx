// src/components/LocaleModal.jsx
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Thermometer, Wind, AlertCircle } from 'lucide-react';
import { useLovecraftWeather } from '../hooks/useLovecraftWeather';

export default function LocaleModal({ locale, onClose }) {
    if (!locale) return null;

    return createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center px-4"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    onClick={onClose}
                />

                {/* Modal Content */}
                <motion.div
                    layoutId={`card-${locale.realName}`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-4xl bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-violet-500/20 max-h-[90vh] flex flex-col md:flex-row"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors backdrop-blur-sm"
                    >
                        <X size={20} />
                    </button>

                    {/* Image Side */}
                    <div className="md:w-1/2 h-64 md:h-auto relative">
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900 via-transparent to-transparent z-10" />
                        <img
                            src={locale.imageUrl}
                            alt={locale.realName}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute bottom-4 left-4 z-20">
                            <span className="inline-block px-3 py-1 bg-violet-600/80 backdrop-blur-sm rounded text-xs font-bold text-white mb-2">
                                EXPEDITION TARGET
                            </span>
                            <div className="flex items-center text-white/80 gap-2 font-mono text-sm">
                                <MapPin size={14} />
                                <span>{locale.realName}, {locale.country}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2 p-8 md:p-10 overflow-y-auto custom-scrollbar bg-gradient-to-br from-zinc-900 to-zinc-950">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-violet-100 mb-2 leading-tight">
                            {locale.lovecraftName}
                        </h2>

                        <div className="flex items-center gap-4 mb-8 text-xs font-mono text-violet-400">
                            <span className="bg-violet-900/20 px-2 py-1 rounded border border-violet-500/20">
                                LAT: {locale.coords.lat}
                            </span>
                            <span className="bg-violet-900/20 px-2 py-1 rounded border border-violet-500/20">
                                LON: {locale.coords.lon}
                            </span>
                        </div>

                        <div className="space-y-6">
                            <section>
                                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-bold flex items-center gap-2">
                                    <AlertCircle size={14} /> Informe de Anomalía
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg border-l-2 border-violet-700 pl-4 py-1 italic">
                                    "{locale.lore}"
                                </p>
                            </section>

                            <WeatherSection lat={locale.coords.lat} lon={locale.coords.lon} />

                            <div className="pt-6 border-t border-white/5 mt-8">
                                <button
                                    onClick={onClose} // Or add another action
                                    className="w-full py-4 bg-white/5 hover:bg-violet-600/20 border border-white/10 hover:border-violet-500/50 rounded-xl text-white font-medium transition-all group"
                                >
                                    <span className="group-hover:tracking-wider transition-all duration-300">CERRAR TRANSMISIÓN</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
}

function WeatherSection({ lat, lon }) {
    const { weatherLore, loading } = useLovecraftWeather(lat, lon);

    if (loading) return <div className="animate-pulse h-20 bg-white/5 rounded-xl"></div>;

    if (!weatherLore) return null;

    return (
        <section className="bg-black/30 rounded-xl p-5 border border-white/5">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold flex items-center gap-2">
                <Wind size={14} /> Condiciones Atmosféricas
            </h3>

            <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-white font-serif">{weatherLore.temp}</div>
                <div>
                    <p className="text-violet-200 text-sm mb-1">{weatherLore.condition}</p>
                    <p className="text-gray-400 text-xs italic opacity-80">{weatherLore.description}</p>
                </div>
            </div>
        </section>
    );
}
