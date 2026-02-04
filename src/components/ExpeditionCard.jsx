import { motion } from 'framer-motion';
import { MapPin, Thermometer, Wind, Plus, Eye } from 'lucide-react';
import { useLovecraftWeather } from '../hooks/useLovecraftWeather';

export default function ExpeditionCard({ locale, onAddToItinerary, onSelect }) {
    const { weatherLore, loading } = useLovecraftWeather(locale.coords.lat, locale.coords.lon);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -11 }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl transition-all duration-500 hover:border-violet-500/50 hover:shadow-violet-900/40"
        >
            {/* Image Overlay - Clickable for Modal */}
            <div
                className="absolute inset-0 z-0 cursor-pointer"
                onClick={onSelect}
            >
                <img
                    src={locale.imageUrl}
                    alt={locale.realName}
                    className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                {/* Visual Cue for interaction */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                    <Eye size={20} />
                </div>
            </div>

            <div className="relative z-10 p-6 flex flex-col h-full pointer-events-none">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                        <MapPin size={12} className="text-violet-400" />
                        <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">{locale.realName}, {locale.country}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif leading-tight group-hover:text-violet-200 transition-colors">
                        {locale.lovecraftName}
                    </h3>

                    <p className="text-sm text-gray-400 italic mb-6 border-l-2 border-violet-900/50 pl-3">
                        "{locale.lore}"
                    </p>

                    {/* Weather Lore Section */}
                    <div className="mb-6 bg-black/40 rounded-lg p-3 border border-white/5 pointer-events-auto">
                        <div className="flex items-center gap-2 mb-2">
                            <Wind size={14} className="text-violet-400" />
                            <span className="text-xs font-bold text-violet-200 uppercase tracking-widest">Atmósfera Local</span>
                        </div>
                        {loading ? (
                            <div className="h-4 w-24 bg-white/10 rounded animate-pulse" />
                        ) : (
                            <div className="text-xs text-gray-400">
                                <p className="mb-1">{weatherLore?.description}</p>
                                <div className="flex items-center gap-2 text-violet-400/80">
                                    <Thermometer size={10} />
                                    <span>{weatherLore?.temp}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent modal opening
                            onAddToItinerary(locale);
                        }}
                        className="w-full py-3 bg-white/5 hover:bg-violet-600 border border-white/10 hover:border-violet-500 rounded-xl text-sm font-bold text-white uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn pointer-events-auto relative overflow-hidden"
                    >
                        <span className="relative z-10">Añadir al Manifiesto</span>
                        <div className="absolute inset-0 bg-violet-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
                        <Plus size={16} className="relative z-10 group-hover/btn:rotate-90 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
