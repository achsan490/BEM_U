import { useState } from 'react'
import { Compass, ExternalLink, Maximize2 } from 'lucide-react'
import { galleryImages } from '../data/bemData'

export default function Galeri({ onOpenImageModal }) {
    const [filterCategory, setFilterCategory] = useState('semua')

    const categories = [
        { id: 'semua', label: 'Semua Foto' },
        { id: 'keagamaan', label: 'Keagamaan' },
        { id: 'kepemimpinan', label: 'Kepemimpinan' },
        { id: 'sosial', label: 'Sosial & Pengabdian' },
        { id: 'akademik', label: 'Akademik' },
        { id: 'advokasi', label: 'Advokasi' },
        { id: 'minat', label: 'Minat & Bakat' },
    ]

    const filteredImages = galleryImages.filter((img) => {
        if (filterCategory === 'semua') return true
        return img.category.toLowerCase().includes(filterCategory.toLowerCase())
    })

    return (
        <section id="galeri" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                            <Compass className="w-3.5 h-3.5" />
                            <span>Momen & Dokumentasi</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Galeri Kegiatan Mahasiswa
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base mt-1">
                            Rekam jejak aktivitas, pengabdian, dan dinamika kebersamaan BEM UNWAHA.
                        </p>
                    </div>
                    <a
                        href="https://www.instagram.com/bemunwaha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition"
                    >
                        <span>Lihat Foto Lainnya di Instagram</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilterCategory(cat.id)}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                                filterCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-xs'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((img, i) => (
                        <div
                            key={i}
                            className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-card-hover transition cursor-pointer"
                            onClick={() => onOpenImageModal({
                                src: img.src,
                                title: img.title,
                                subtitle: `${img.category} · ${img.desc || ''}`
                            })}
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white backdrop-blur-[1px]">
                                    <span className="px-3.5 py-1.5 bg-white text-slate-900 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg">
                                        <Maximize2 className="w-3.5 h-3.5 text-blue-600" /> Perbesar
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 bg-white">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">
                                    {img.category}
                                </span>
                                <h4 className="font-bold text-slate-900 text-sm mt-0.5">
                                    {img.title}
                                </h4>
                                {img.desc && (
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                        {img.desc}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
