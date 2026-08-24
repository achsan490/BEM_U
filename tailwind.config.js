/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0f7ff',
                    100: '#e0effe',
                    200: '#bae0fd',
                    300: '#7cc5fb',
                    400: '#38a5f8',
                    500: '#0e87eb',
                    600: '#026bc9',
                    700: '#0355a3',
                    800: '#074885',
                    900: '#0c3d6f',
                    950: '#082649',
                },
                navy: {
                    800: '#111d33',
                    900: '#0a1120',
                    950: '#050a14',
                },
                amber: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                },
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
            },
            boxShadow: {
                'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
                'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
                'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.12), 0 4px 10px -2px rgba(15, 23, 42, 0.06)',
                'primary-glow': '0 8px 25px -4px rgba(14, 135, 235, 0.35)',
            },
        },
    },
    plugins: [],
}
