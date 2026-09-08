import { Sparkle, ArrowRight, CheckCircle, Shield, Compass } from 'lucide-react'
import { siteConfig, quickStats } from '../data/bemData'

export default function Hero({ onOpenAspirasi }) {
    return (
        <section id="home" className="relative bg-white border-b border-slate-200/80 overflow-hidden pt-12 pb-16 md:py-20">
            <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Headline & Action */}
                    <div className="lg:col-span-7 space-y-6">
                        
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide shadow-2xs">
                            <Sparkle className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                            <span>Keluarga Besar Mahasiswa UNWAHA Periode {siteConfig.period}</span>
                        </div>

                        {/* Main Title */}
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                                Badan Eksekutif Mahasiswa <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                                    Universitas KH. A. Wahab Hasbullah
                                </span>
                            </h1>
                            <p className="mt-2.5 text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
                                <span>{siteConfig.cabinet}</span>
                                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold border border-amber-300">
                                    Bunga Matahari Emas 🌻
                                </span>
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                            Mewadahi aspirasi, menghadirkan inovasi, dan membangun kolaborasi mahasiswa UNWAHA melalui gerakan yang progresif, religius, dan berdampak nyata bagi almamater dan masyarakat.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <a
                                href="#layanan"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                            >
                                <Compass className="w-4 h-4" />
                                <span>Jelajahi Layanan Mahasiswa</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <button
                                onClick={onOpenAspirasi}
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition"
                            >
                                <span>Sampaikan Aspirasi</span>
                            </button>
                        </div>

                        {/* Tagline Box Quote */}
                        <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 italic">
                            <span className="font-bold text-slate-700 not-italic">Motto:</span>
                            &ldquo;{siteConfig.motto}&rdquo;
                        </div>
                    </div>

                    {/* Right Column: Hero Visual Card */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl relative overflow-hidden text-center group">
                            
                            {/* Card Top Status Bar */}
                            <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100 text-xs">
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/80 text-[11px]">
                                    <CheckCircle className="w-3.5 h-3.5" />
                                    <span>Aktif & Terverifikasi</span>
                                </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200/80 text-[11px]">
                                    <Shield className="w-3.5 h-3.5 text-blue-600" />
                                    <span>Periode {siteConfig.period}</span>
                                </span>
                            </div>

                            {/* Logo Bunga Matahari Murni */}
                            <div className="w-32 h-32 mx-auto mb-3 flex items-center justify-center">
                                <img
                                    src={siteConfig.logo}
                                    alt={`Logo ${siteConfig.cabinet}`}
                                    className="w-full h-full object-contain logo-sun-spin"
                                />
                            </div>
                            <h3 className="text-xl font-black text-slate-900 leading-tight">
                                {siteConfig.name}
                            </h3>
                            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-0.5 mb-3">
                                {siteConfig.cabinet}
                            </p>
                            <p className="text-xs text-slate-500 leading-relaxed mb-5 px-2">
                                Pusat koordinasi dan pengembangan potensi mahasiswa Universitas KH. A. Wahab Hasbullah Jombang.
                            </p>

                            {/* 4-Cell Information Grid */}
                            <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-100">
                                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-[10px] text-slate-400 font-bold uppercase">Periode Khidmat</div>
                                    <div className="text-xs font-bold text-slate-800 mt-0.5">{siteConfig.period}</div>
                                </div>
                                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-[10px] text-slate-400 font-bold uppercase">Struktur Ormawa</div>
                                    <div className="text-xs font-bold text-slate-800 mt-0.5">12 Kementerian</div>
                                </div>
                                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-[10px] text-slate-400 font-bold uppercase">Nilai Gerak</div>
                                    <div className="text-xs font-bold text-slate-800 mt-0.5">Religius & Inovatif</div>
                                </div>
                                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-[10px] text-slate-400 font-bold uppercase">Basis Kampus</div>
                                    <div className="text-xs font-bold text-slate-800 mt-0.5 truncate">Tambakberas Jbg</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 p-4 sm:p-6">
                    {quickStats.map((stat, idx) => (
                        <div key={idx} className="p-3 sm:p-4 text-center">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                                {stat.label}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">
                                {stat.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
