// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import AnimatedRoutes from './components/AnimatedRoutes';
import ParticlesBackground from './components/ParticlesBackground';
import Preloader from './components/Preloader';

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading assets
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <HelmetProvider>
            <BrowserRouter>
                <AnimatePresence>
                    {loading && <Preloader />}
                </AnimatePresence>

                {!loading && (
                    <MainLayout>
                        <ParticlesBackground />
                        <AnimatedRoutes />
                    </MainLayout>
                )}
            </BrowserRouter>
        </HelmetProvider>
    );
}
