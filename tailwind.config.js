import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
        "./constants.tsx"
    ],
    theme: {
        extend: {
            colors: {
                "brand-blue": "#0042D2",
                "brand-yellow": "#B9FF00",
                "brown": "#938560",
                "deep-black": "#000000",
                "stark-white": "#FFFFFF",
            },
            fontFamily: {
                "display": ["Montserrat", "sans-serif"],
                "body": ["Montserrat", "sans-serif"],
                "elegant": ["Montserrat", "sans-serif"]
            },
            animation: {
                'marquee': 'marquee 100s linear infinite',
                'marquee-fast': 'marquee 30s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [
        forms,
        containerQueries
    ],
}
