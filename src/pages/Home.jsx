// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Map } from 'lucide-react';
import locales from '../assets/locales.json';
import ExpeditionCard from '../components/ExpeditionCard';
import LocaleModal from '../components/LocaleModal';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [itinerary, setItinerary] = useState([]);
    const [selectedLocale, setSelectedLocale] = useState(null);

    // Cargar itinerario desde localStorage al iniciar
    useEffect(() => {
        const saved = localStorage.getItem('veridex-itinerary');
        if (saved) {
            try {
                setItinerary(JSON.parse(saved));
            } catch (e) {
                console.warn("Itinerario guardado corrupto, reiniciando.");
                localStorage.removeItem('veridex-itinerary');
            }
        }
    }, []);

    // Guardar en localStorage cada vez que cambie el itinerario
    useEffect(() => {
        localStorage.setItem('veridex-itinerary', JSON.stringify(itinerary));
    }, [itinerary]);

    const filteredLocales = locales.filter(locale =>
        locale.realName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        locale.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const addToItinerary = (locale) => {
        // Evitar duplicados
        if (!itinerary.some(item => item.realName === locale.realName && item.country === locale.country)) {
            setItinerary(prev => [...prev, locale]);
        }
    };

    const removeFromItinerary = (index) => {
        setItinerary(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            <Helmet>
                <title>Veridex Expeditions | Viajes a lo Desconocido</title>
                <meta name="description" content="Descubre destinos reales reinterpretados a través del horror cósmico. Planifica tu próxima expedición a lugares donde la realidad se desdibuja." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />

                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 text-xs font-bold tracking-widest uppercase mb-6">
                            Cartografía de lo Oculto
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tight">
                            Planifica tu <br />
                            <span className="text-violet-500">Expedición Cósmica</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Selecciona destinos reales reinterpretados como sitios de anomalía lovecraftiana. Donde la historia se encuentra con el mito.
                        </p>
                    </motion.div>

                    {/* Search Input in Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-xl mx-auto relative group"
                    >
                        <div className="absolute inset-0 bg-violet-600/20 blur-xl rounded-full group-hover:bg-violet-600/30 transition-colors" />
                        <div className="relative flex items-center bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 shadow-2xl">
                            <Search className="text-gray-400 w-5 h-5 mr-4" />
                            <input
                                type="text"
                                placeholder="Busca una ciudad o país (ej. Providence, Islandia)..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-transparent w-full text-white placeholder-gray-500 focus:outline-none"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 py-20 w-full">
                {/* Panel del itinerario */}
                {itinerary.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mb-16"
                    >
                        <div className="bg-gradient-to-r from-violet-900/10 to-transparent border border-violet-500/20 rounded-2xl p-8 backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-violet-500/10 rounded-lg">
                                        <Map className="text-violet-400 w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Tu Manifiesto de Viaje</h3>
                                </div>
                                <span className="bg-white/5 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                                    {itinerary.length} destino(s)
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {itinerary.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center bg-gray-900/50 p-3 rounded-xl border border-white/5 group hover:border-red-500/30 transition-colors">
                                        <div className="flex flex-col">
                                            <span className="text-gray-200 text-sm font-bold font-serif">{item.lovecraftName}</span>
                                            <span className="text-violet-500/70 text-[10px] uppercase tracking-widest font-mono">{item.realName}</span>
                                        </div>
                                        <button
                                            onClick={() => removeFromItinerary(index)}
                                            className="text-gray-500 hover:text-red-400 text-xs uppercase tracking-wider font-bold transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            Abortar
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Results Route */}
                {filteredLocales.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">Ninguna anomalía detectada en este sector...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredLocales.map((locale, index) => (
                            <ExpeditionCard
                                key={index}
                                locale={locale}
                                onAddToItinerary={addToItinerary}
                                onSelect={() => setSelectedLocale(locale)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {selectedLocale && (
                <LocaleModal
                    locale={selectedLocale}
                    onClose={() => setSelectedLocale(null)}
                />
            )}
        </>
    );
}
