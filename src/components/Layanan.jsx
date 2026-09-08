import { useState } from 'react'
import { Layers, ChevronRight, Search, Sparkles } from 'lucide-react'
import { quickServices } from '../data/bemData'

export default function Layanan({ onOpenAspirasi }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('semua')

    const categories = [
        { id: 'semua', label: 'Semua Layanan' },
        { id: 'advokasi', label: 'Advokasi & Aspirasi' },
        { id: 'informasi', label: 'Agenda & Info' },
        { id: 'administrasi', label: 'Administrasi' },
        { id: 'akademik', label: 'Beasiswa & Karier' },
        { id: 'kemitraan', label: 'Kemitraan' },
    ]

    const filteredServices = quickServices.filter((service) => {
        const matchesCategory = selectedCategory === 'semua' || service.category === selectedCategory
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              service.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              service.badge.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <section id="layanan" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Pusat Layanan Terpadu</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Layanan Mahasiswa BEM UNWAHA
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mt-1">
                            Akses cepat berbagai layanan advokasi, administrasi, agenda kampus, dan ruang pengembangan potensi mahasiswa.
                        </p>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                        Terbuka untuk seluruh civitas UNWAHA
                    </div>
                </div>

                {/* Filter and Search Bar */}
                <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                                    selectedCategory === cat.id
                                        ? 'bg-blue-600 text-white shadow-xs'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-72">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari layanan..."
                            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-blue-500 transition shadow-2xs"
                        />
                    </div>
                </div>

                {/* Quick App Grid */}
                {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredServices.map((service) => {
                            const Icon = service.icon
                            return (
                                <div
                                    key={service.id}
                                    className="portal-card p-6 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.iconBg} shadow-xs`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                                                {service.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {service.isModal ? (
                                        <button
                                            onClick={onOpenAspirasi}
                                            className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-xs border border-blue-200 hover:border-blue-600 transition group"
                                        >
                                            <span>{service.btnText}</span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                        </button>
                                    ) : (
                                        <a
                                            href={service.link}
                                            target={service.link.startsWith('http') ? '_blank' : '_self'}
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs border border-slate-200 hover:border-blue-200 transition group"
                                        >
                                            <span>{service.btnText}</span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-6">
                        <p className="text-slate-500 text-sm">Tidak ada layanan yang sesuai dengan pencarian &ldquo;{searchQuery}&rdquo;.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('semua') }}
                            className="mt-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-100 transition"
                        >
                            Reset Filter
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
