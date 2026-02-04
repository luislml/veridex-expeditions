import { useState, useEffect } from 'react';

const WEATHER_DESCRIPTIONS = {
    // Clear
    800: "El cielo está inquietantemente despejado. Las estrellas parecen vigilar.",

    // Clouds
    801: "Nubes dispersas forman figuras que no deberían existir.",
    802: "Nubes dispersas forman figuras que no deberían existir.",
    803: "El cielo se oscurece con formas nebulosas.",
    804: "Una pátina gris cubre el horizonte, ocultando horrores desconocidos.",

    // Rain
    500: "Una lluvia ligera cae como lágrimas de antiguos dioses.",
    501: "La lluvia cae incesante, lavando los rastros de la cordura.",
    502: "Tormenta pesada. El agua parece tener una densidad antinatural.",
    503: "Diluvio primordial. No busques refugio.",
    504: "Diluvio primordial. No busques refugio.",

    // Thunderstorm
    200: "Truenos lejanos anuncian la llegada de Los Antiguos.",
    201: "Relámpagos iluminan brevemente siluetas colosales en las nubes.",
    202: "El cielo se desgarra con furia eléctrica.",

    // Snow
    600: "Nieve silenciosa cubre el mundo en un sudario blanco.",
    601: "La nieve cae espesa, amortiguando los gritos.",
    602: "Ventisca cegadora. El frío proviene del vacío espacial.",

    // Atmosphere
    701: "Una niebla espesa se levanta, trayendo consigo olores de eras pasadas.",
    721: "Bruma. Algo se mueve en el límite de la visión.",
    741: "Niebla densa. No te alejes del sendero.",
};

const DEFAULT_LORE = "El tiempo atmosférico es irrelevante ante la inmensidad cósmica.";

export const useLovecraftWeather = (lat, lon) => {
    const [weatherLore, setWeatherLore] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!lat || !lon) {
            setLoading(false);
            return;
        }

        const fetchWeather = async () => {
            try {
                const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
                if (!apiKey) {
                    console.warn("No weather API key found");
                    setWeatherLore(DEFAULT_LORE);
                    return;
                }

                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
                );

                if (!response.ok) throw new Error('Weather request failed');

                const data = await response.json();
                const conditionCode = data.weather[0]?.id;

                // Find closest match or use default
                const description = WEATHER_DESCRIPTIONS[conditionCode] || DEFAULT_LORE;
                const temp = Math.round(data.main.temp - 273.15); // Kelvin to Celsius

                setWeatherLore({
                    description,
                    temp: `${temp}°C`,
                    condition: data.weather[0]?.main
                });

            } catch (error) {
                console.error("Error fetching weather lore:", error);
                setWeatherLore({
                    description: "La atmósfera es demasiado densa para nuestros instrumentos.",
                    temp: "--",
                    condition: "Unknown"
                });
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [lat, lon]);

    return { weatherLore, loading };
};
