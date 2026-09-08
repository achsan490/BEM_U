import { Lightbulb } from 'lucide-react'
import { siteConfig, philosophyPillars, missionList, pengurusData } from '../data/bemData'

export default function Profil() {
    return (
        <section id="profil" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Identitas, Visi & Filosofi</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        Profil & Filosofi {siteConfig.cabinet}
                    </h2>
                    <p className="text-slate-500 text-sm sm:text-base mt-2">
                        Arah pergerakan BEM UNWAHA periode {siteConfig.period} dalam membangun kemuliaan, integritas, dan prestasi tertinggi kampus.
                    </p>
                </div>

                {/* FILOSOFI DESAIN BUNGA MATAHARI EMAS */}
                <div className="mb-16 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* Logo Showcase Left */}
                        <div className="lg:col-span-4 flex flex-col items-center text-center">
                            <div className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-xl max-w-[280px] w-full flex flex-col items-center">
                                <div className="w-48 h-48 mx-auto flex items-center justify-center">
                                    <img
                                        src={siteConfig.logo}
                                        alt={`Logo ${siteConfig.cabinet}`}
                                        className="w-full h-full object-contain logo-sun-spin"
                                    />
                                </div>
                                <div className="mt-4">
                                    <div className="text-sm font-black text-slate-900 uppercase tracking-wider">
                                        Bunga Matahari Emas
                                    </div>
                                    <div className="text-xs text-amber-600 font-bold mt-0.5">
                                        Lambang Resmi {siteConfig.cabinet}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Philosophy 4 Pillars Grid Right */}
                        <div className="lg:col-span-8 space-y-6">
                            <div>
                                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-black text-xs uppercase tracking-wider border border-amber-300">
                                    Filosofi Desain Lambang
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2.5">
                                    Makna Filosofis Bunga Matahari Emas
                                </h3>
                                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                                    Setiap unsur ukiran, pola spiral, dan warna emas merepresentasikan semangat pergerakan yang terstruktur, visioner, dan bermartabat.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {philosophyPillars.map((pillar, idx) => (
                                    <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shadow-2xs">
                                                {pillar.icon}
                                            </div>
                                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                                {pillar.title}
                                            </h4>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visi & Misi Dual Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                    
                    {/* Visi Card */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 shadow-md flex flex-col justify-between border border-blue-800/60">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 text-blue-200 text-xs font-black uppercase tracking-wider mb-6 border border-blue-700">
                                Visi Utama
                            </div>
                            <h3 className="text-2xl font-black mb-4 leading-snug">
                                Mewujudkan BEM UNWAHA yang Inovatif, Aspiratif, dan Religius
                            </h3>
                            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                                Sebagai wadah pengembangan potensi mahasiswa, pengawal aspirasi yang responsif, serta pelopor kemajuan kampus berlandaskan nilai-nilai keislaman Ahlussunnah wal Jama&apos;ah demi mencapai puncak kemuliaan karya.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-blue-800/80 text-xs text-amber-300 font-semibold">
                            {siteConfig.cabinet} · Periode {siteConfig.period}
                        </div>
                    </div>

                    {/* Misi Card */}
                    <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-xs">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-black uppercase tracking-wider mb-6">
                            4 Misi Strategis
                        </div>
                        <div className="space-y-4">
                            {missionList.map((misi, i) => (
                                <div key={i} className="flex items-start gap-4 p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
                                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xs flex-shrink-0 border border-blue-200">
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">{misi.title}</h4>
                                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{misi.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Pengurus Inti Section */}
                <div>
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-black text-slate-900">
                            Badan Pengurus Harian (BPH)
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">Pimpinan Harian BEM UNWAHA {siteConfig.cabinet} {siteConfig.period}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pengurusData.map((pengurus, idx) => (
                            <div
                                key={idx}
                                className="portal-card p-6 text-center"
                            >
                                <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center font-black text-xl shadow-md ${pengurus.color}`}>
                                    {pengurus.initial}
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm leading-snug">{pengurus.nama}</h4>
                                <div className="text-blue-600 font-bold text-xs mt-1">{pengurus.jabatan}</div>
                                <div className="text-[11px] text-slate-400 mt-0.5">{pengurus.prodi}</div>
                                
                                {pengurus.quote && (
                                    <p className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 italic">
                                        &ldquo;{pengurus.quote}&rdquo;
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
