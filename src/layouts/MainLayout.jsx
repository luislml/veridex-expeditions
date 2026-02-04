// src/layouts/MainLayout.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-violet-500/30">
            <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none z-0" />
            <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />

            <Header />

            <main className="flex-grow relative z-10 w-full">
                {children}
            </main>

            <Footer />
        </div>
    );
}
