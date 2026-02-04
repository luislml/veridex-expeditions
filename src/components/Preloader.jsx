// src/components/Preloader.jsx
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center p-4"
        >
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="mb-8 text-violet-500 relative"
            >
                <div className="absolute inset-0 bg-violet-600 blur-xl opacity-40 rounded-full" />
                <Compass size={64} strokeWidth={1} className="relative z-10" />
            </motion.div>

            <motion.h2
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-violet-300 font-serif text-2xl tracking-[0.2em] mb-2 text-center"
            >
                VERIDEX
            </motion.h2>

            <p className="text-gray-500 text-xs uppercase tracking-widest font-mono">
                Sincronizando Realidad...
            </p>
        </motion.div>
    );
}
