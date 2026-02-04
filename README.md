# Veridex Expeditions 🌌🐙

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)
![Status](https://img.shields.io/badge/Status-Finished-green)

> "La emoción más antigua y más intensa de la humanidad es el miedo, y el miedo más antiguo y más intenso es el miedo a lo desconocido." — H.P. Lovecraft

**Veridex Expeditions** es una aplicación web conceptual de turismo de "horror cósmico", que reimagina destinos turísticos reales de Bolivia y el mundo como escenarios de ficción lovecraftiana.

Este proyecto demuestra el uso de tecnologías modernas de React para crear experiencias inmersivas, animadas y altamente interactivas.

##  Características Clave

- **Atmósfera Inmersiva**:
  - Sistema de partículas personalizado (`Canvas API`).
  - Efecto de vidrio (Glassmorphism) en UI.
  - Tipografía temática (Cinzel & Inter).
  - Preloader cinematográfico.
  
- **Tecnología React Moderna**:
  - Hooks personalizados (`useLovecraftWeather` para integrar OpenWeather API).
  - React Router con transiciones animadas (`framer-motion` + `AnimatePresence`).
  - Context API para gestión de estado global ligero (si aplica) o manejo eficiente de props.
  - Portales de React para modales y menús móviles.

- **Diseño Responsivo**:
  - Diseño Mobile-First con Tailwind CSS.
  - Menú de navegación móvil con animación fluida.

##  Tecnologías

- **Core**: React 18, Vite.
- **Estilos**: Tailwind CSS, Lucide React (Iconos).
- **Animación**: Framer Motion.
- **SEO**: React Helmet Async.
- **Datos**: OpenWeatherMap API.

##  Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/veridex-expeditions.git
   cd veridex-expeditions
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz y añade tu API Key de OpenWeatherMap:
   ```env
   VITE_OPENWEATHER_KEY=tu_api_key_aqui
   ```

4. **Correr en desarrollo**:
   ```bash
   npm run dev
   ```

##  Estructura del Proyecto

```
src/
├── assets/         # Datos estáticos (locales.json)
├── components/     # Componentes reutilizables (Header, Footer, Cards)
├── hooks/          # Hooks personalizados (useLovecraftWeather)
├── layouts/        # Layouts principales
├── pages/          # Vistas (Home, About, Diary)
└── index.css       # Estilos globales y Tailwind
```

##  Créditos y Recursos

- Iconografía por Lucide.
- Inspirado en la obra de H.P. Lovecraft.

---
Desarrollado por luis soto