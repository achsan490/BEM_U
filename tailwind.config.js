/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#020617',
                'dark-card': '#0f172a',
                'dark-border': '#1e293b',
                'blue-primary': '#3b82f6',
                'cyan-accent': '#06b6d4',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'blue-glow': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                'cyan-glow': 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            },
            boxShadow: {
                'glow-blue': '0 0 30px rgba(59, 130, 246, 0.5)',
                'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.5)',
                'glow-blue-lg': '0 0 50px rgba(59, 130, 246, 0.6)',
            },
            backdropBlur: {
                'xs': '2px',
            },
        },
    },
    plugins: [],
}
