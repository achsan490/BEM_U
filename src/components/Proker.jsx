import { useState } from 'react'
import { Target, Search, CheckCircle2, Award } from 'lucide-react'
import { prokerList } from '../data/bemData'

export default function Proker() {
    const [activeTab, setActiveTab] = useState('semua')
    const [searchProker, setSearchProker] = useState('')

    const tabs = [
        { id: 'semua', label: 'Semua Program' },
        { id: 'keagamaan', label: 'Keagamaan' },
        { id: 'kaderisasi', label: 'Kaderisasi' },
        { id: 'pengabdian', label: 'Pengabdian' },
        { id: 'akademik', label: 'Akademik & Isu' },
        { id: 'minat', label: 'Minat & Bakat' },
        { id: 'teknologi', label: 'Teknologi' },
    ]

    const filteredProker = prokerList.filter((proker) => {
        const matchesCategory = activeTab === 'semua' || 
                                proker.category.toLowerCase().includes(activeTab.toLowerCase())
        const matchesSearch = proker.title.toLowerCase().includes(searchProker.toLowerCase()) ||
                              proker.desc.toLowerCase().includes(searchProker.toLowerCase()) ||
                              proker.kementerian.toLowerCase().includes(searchProker.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <section id="proker" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                        <Target className="w-3.5 h-3.5" />
                        <span>Aksi & Transformasi</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        Program Kerja Unggulan
                    </h2>
                    <p className="text-slate-500 text-sm sm:text-base mt-2">
                        Inisiatif terstruktur BEM UNWAHA dalam memajukan potensi keilmuan, kepemimpinan, dan keagamaan.
                    </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                                    activeTab === tab.id
                                        ? 'bg-blue-600 text-white shadow-xs'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Search Proker */}
                    <div className="relative w-full md:w-72">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                            type="text"
                            value={searchProker}
                            onChange={(e) => setSearchProker(e.target.value)}
                            placeholder="Cari program kerja..."
                            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-blue-500 transition shadow-2xs"
                        />
                    </div>
                </div>

                {/* Program Cards Grid */}
                {filteredProker.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProker.map((proker) => {
                            const Icon = proker.icon
                            return (
                                <div
                                    key={proker.id}
                                    className="portal-card p-6 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${proker.iconColor} shadow-xs`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                                                {proker.category}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                                            {proker.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                                            {proker.desc}
                                        </p>

                                        {/* Impact / Target highlight */}
                                        <div className="space-y-1.5 p-3 bg-slate-50/80 rounded-xl border border-slate-100 text-[11px] mb-4">
                                            <div className="text-slate-500 flex items-center gap-1">
                                                <span className="font-bold text-slate-700">Sasaran:</span> {proker.target}
                                            </div>
                                            <div className="text-blue-700 flex items-center gap-1 font-medium">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                                                <span>{proker.impact}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                                        <span className="text-slate-400 font-medium">Pelaksana:</span>
                                        <span className="font-bold text-blue-700">{proker.kementerian}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-6">
                        <p className="text-slate-500 text-sm">Tidak ada program kerja yang cocok dengan pencarian.</p>
                        <button
                            onClick={() => { setSearchProker(''); setActiveTab('semua') }}
                            className="mt-3 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-100 transition"
                        >
                            Tampilkan Semua Program
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
