import { X, Download } from 'lucide-react'

export default function ImageLightboxModal({ isOpen, onClose, imageSrc, title, subtitle }) {
    if (!isOpen || !imageSrc) return null

    return (
        <div 
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[92vh] animate-scale-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
                    <div className="min-w-0 pr-4">
                        <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                            {title || "Lihat Gambar"}
                        </h4>
                        {subtitle && (
                            <p className="text-[11px] text-slate-400 truncate mt-0.5">{subtitle}</p>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition flex-shrink-0"
                        aria-label="Tutup preview"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Image Container */}
                <div className="overflow-y-auto p-3 sm:p-4 flex items-center justify-center bg-slate-950/80">
                    <img
                        src={imageSrc}
                        alt={title || "Preview image"}
                        className="w-auto max-h-[68vh] object-contain rounded-xl shadow-lg"
                    />
                </div>

                {/* Footer Action */}
                <div className="px-5 py-3 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 text-xs">
                    <span className="text-[11px] text-slate-400">
                        BEM Universitas KH. A. Wahab Hasbullah
                    </span>
                    <div className="flex items-center gap-2">
                        <a
                            href={imageSrc}
                            download
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-1.5 transition"
                        >
                            <Download className="w-4 h-4" />
                            <span>Unduh Gambar</span>
                        </a>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
