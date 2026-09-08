import { ArrowUp } from 'lucide-react'

export default function BackToTop({ show }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group flex items-center justify-center border border-blue-400/30 ${
                show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
            }`}
        >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
    )
}
