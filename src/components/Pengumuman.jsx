import { Megaphone, Calendar, Clock, Maximize2, Sparkles, Award, CheckCircle2, Heart } from 'lucide-react'

export default function Pengumuman({ onOpenImageModal }) {
    return (
        <section id="pengumuman" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                        <Megaphone className="w-3.5 h-3.5" />
                        <span>Papan Informasi & Pengumuman Resmi</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        Agenda & Pengumuman Terkini Kampus
                    </h2>
                    <p className="text-slate-500 text-sm sm:text-base mt-2">
                        Informasi momentum Dies Natalis kampus, peringatan kenegaraan, serta agenda kegiatan penting civitas UNWAHA.
                    </p>
                </div>

                {/* 1. FEATURED: DIES NATALIS KE-13 UNWAHA (2013 - 2026) */}
                <div className="mb-12 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-emerald-700/60 overflow-hidden relative">
                    {/* Background glow & mesh */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                        
                        {/* Poster Showcase Image */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div 
                                className="max-w-xs sm:max-w-sm w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/80 bg-slate-950 group cursor-pointer relative"
                                onClick={() => onOpenImageModal({
                                    src: '/dies-natalis-13.jpg',
                                    title: 'Selamat Dies Natalis ke-13 Universitas KH. A. Wahab Hasbullah (2013 - 2026)',
                                    subtitle: '13 Tahun Mengabdi untuk Umat dan Bangsa'
                                })}
                            >
                                <img
                                    src="/dies-natalis-13.jpg"
                                    alt="Poster Resmi Selamat Dies Natalis ke-13 Universitas KH. A. Wahab Hasbullah"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-[2px]">
                                    <span className="px-4 py-2 bg-white text-slate-900 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg">
                                        <Maximize2 className="w-4 h-4 text-emerald-700" /> Perbesar Poster
                                    </span>
                                </div>
                                <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md uppercase">
                                    🌟 DIES NATALIS 13TH
                                </div>
                            </div>
                        </div>

                        {/* Copywriting & Text */}
                        <div className="lg:col-span-7 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-xs">
                                    🌟 DIES NATALIS KE-13
                                </span>
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-400/40">
                                    2013 – 2026
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                                Selamat Dies Natalis ke-13 <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-amber-400">
                                    Universitas KH. A. Wahab Hasbullah
                                </span> 🌟
                            </h3>

                            <p className="text-emerald-100 text-sm sm:text-base font-semibold">
                                13 tahun bergerak bersama, mengabdi untuk umat dan bangsa.
                            </p>

                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Terus melangkah, terus berdampak, demi membangun generasi berilmu, berakhlak, dan berdaya saing untuk Indonesia yang berkemajuan.
                            </p>

                            {/* Quote Box */}
                            <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-700/80 shadow-inner">
                                <p className="text-amber-300 font-bold text-sm sm:text-base italic leading-snug">
                                    &ldquo;Terus melangkah, terus berdampak, untuk masa depan yang lebih gemilang.&rdquo; 🌿✨
                                </p>
                                <div className="text-[11px] text-emerald-300 font-medium mt-1">
                                    Universitas Unggul, Berkarakter, dan Berkontribusi untuk Peradaban.
                                </div>
                            </div>

                            {/* Hashtags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {[
                                    '#DiesNatalisUNWAHA13',
                                    '#UNWAHAJombang',
                                    '#KampusUnggul',
                                    '#AyoKuliahdiUNWAHA',
                                    '#WahabHasbullah'
                                ].map((tag) => (
                                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-200 border border-emerald-700 font-bold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* 2. TWO COLUMNS: HUT RI KE-81 & MUKTAMAR LESBUMI PBNU 2026 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* HUT RI KE-81 SHOWCASE */}
                    <div className="lg:col-span-7 bg-gradient-to-br from-red-50 via-white to-rose-50 border-2 border-red-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider">
                                    🇮🇩 DIRGAHAYU RI KE-81
                                </span>
                                <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs border border-red-200">
                                    17 Agustus 1945 – 2026
                                </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 leading-tight">
                                Dirgahayu Republik Indonesia <span className="text-red-600">Ke-81</span>
                            </h3>

                            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                                81 tahun Indonesia merdeka, 81 tahun semangat juang tak pernah padam. Mari jadikan momen kemerdekaan ini sebagai pengingat untuk terus berkarya, berkontribusi, dan menjaga persatuan.
                            </p>

                            <div className="p-3.5 bg-white rounded-2xl border border-red-200 mb-4 text-xs italic font-bold text-red-700">
                                &ldquo;Bersatu, Berdaulat, Rakyat Sejahtera, Indonesia Maju.&rdquo; ❤️🤍
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {['#DirgahayuRI81', '#IndonesiaMerdeka', '#BEMUNWAHA', '#KabinetKanagara'].map((tag) => (
                                    <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-100/70 text-red-700 font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-red-200 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-600">Poster Resmi Kenegaraan</span>
                            <button
                                onClick={() => onOpenImageModal({
                                    src: '/hut-ri-81.jpg',
                                    title: 'Poster Resmi Dirgahayu RI Ke-81 BEM UNWAHA',
                                    subtitle: '17 Agustus 1945 - 2026'
                                })}
                                className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
                            >
                                <Maximize2 className="w-3.5 h-3.5" /> Lihat Poster
                            </button>
                        </div>
                    </div>

                    {/* Muktamar LESBUMI Card */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 shadow-sm">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold border border-emerald-700">
                                    📢 Himbauan Resmi
                                </span>
                                <span className="text-emerald-300 text-xs font-medium">11 Juni 2026</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black mb-2 leading-tight">
                                Muktamar Kebudayaan LESBUMI PBNU 2026
                            </h3>
                            <p className="text-emerald-200 text-xs sm:text-sm leading-relaxed mb-6">
                                Himbauan kepada seluruh civitas akademika UNWAHA (Dosen, Tendik, & Mahasiswa) untuk hadir dan memeriahkan forum kebudayaan nasional bertema &ldquo;Kembali ke Akar&rdquo; di kampus UNWAHA.
                            </p>
                            
                            <div className="space-y-2 bg-emerald-900/60 p-4 rounded-2xl text-xs text-emerald-100 border border-emerald-800 mb-6">
                                <div>📍 Lokasi: Kampus UNWAHA Jombang</div>
                                <div>📅 Waktu: 12 – 14 Juni 2026</div>
                                <div>🏷️ Tema: &ldquo;Kembali ke Akar&rdquo;</div>
                            </div>
                        </div>

                        <div className="text-xs text-emerald-300 font-medium border-t border-emerald-800/80 pt-4 flex items-center justify-between">
                            <span>BEM UNWAHA Kabinet Kanagara</span>
                            <span className="text-[10px] bg-emerald-900 px-2 py-0.5 rounded-full">Agenda Kampus</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
