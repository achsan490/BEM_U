import { useState } from 'react'
import { Sparkles, Sparkle, Maximize2, Download, Copy, Check, MessageCircle, ExternalLink, Instagram, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '../data/bemData'

export default function MabaWelcome({ onOpenPosterModal }) {
    const [copiedHashtag, setCopiedHashtag] = useState(false)

    const copyHashtags = () => {
        navigator.clipboard.writeText('#Garuda13 #PKKMBUNWAHA #UNWAHA2026 #unwahajombang')
        setCopiedHashtag(true)
        setTimeout(() => setCopiedHashtag(false), 2000)
    }

    return (
        <section id="maba" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/50 to-slate-50 border-b border-slate-200/80 overflow-hidden">
            {/* Decorative background blurs & patterns */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide mb-3 shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
                        <span>PKKMB & Sambutan Resmi Mahasiswa Baru 2026</span>
                        <span className="bg-blue-600 text-white text-[10px] px-2 py-0.2 rounded-full font-black uppercase">#Garuda13</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                        🎓 Selamat Datang <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600">
                            Mahasiswa Baru UNWAHA 2026
                        </span>
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
                        Langkah baru, semangat baru, dan tekad bersama menjadi generasi mahasiswa yang aktif, inspiratif, dan berprestasi di Universitas KH. A. Wahab Hasbullah Jombang.
                    </p>

                    {/* Official Welcome Badge */}
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200/80 rounded-2xl text-emerald-800 text-xs font-bold shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Selamat Mengikuti Perkuliahan & Perjalanan Akademik di Kampus UNWAHA</span>
                    </div>
                </div>

                {/* Main Welcoming Card Showcase */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        
                        {/* Left Column: Official Welcome Narrative & Leadership */}
                        <div className="lg:col-span-7 space-y-6">
                            
                            {/* Welcome Salutation Badge */}
                            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 border border-blue-200/80 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs font-bold text-lg">
                                    👋
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Sambutan Hangat BEM UNWAHA</div>
                                    <div className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                                        Halo, Mahasiswa Baru UNWAHA 2026! 💙🤍
                                    </div>
                                </div>
                            </div>

                            {/* Text Paragraphs */}
                            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                                <p>
                                    Sebuah langkah baru telah dimulai. Perjalanan panjang menuju dunia perkuliahan kini resmi menjadi bagian dari cerita kalian. Dengan semangat baru, harapan baru, dan tekad untuk berkembang, mari bersama-sama menjadi generasi mahasiswa yang aktif, inspiratif, dan berprestasi.
                                </p>
                                <p>
                                    Keluarga besar Universitas KH. A. Wahab Hasbullah dengan bangga menyambut kehadiran mahasiswa baru tahun akademik 2026. Kehadiran kalian membawa warna baru, energi baru, serta semangat baru untuk terus membangun kampus yang unggul dan berdaya saing.
                                </p>
                            </div>

                            {/* High-Impact Quote Callout */}
                            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-md relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl select-none">
                                    &ldquo;
                                </div>
                                <p className="text-sm sm:text-base font-semibold text-blue-100 leading-relaxed italic relative z-10">
                                    &ldquo;Selamat bergabung dan selamat menjadi bagian dari keluarga besar UNWAHA Jombang. Semoga langkah awal ini menjadi pintu menuju kesuksesan dan masa depan yang gemilang. 🚀🎓&rdquo;
                                </p>
                                <div className="mt-3 pt-3 border-t border-blue-800/80 flex items-center justify-between text-xs text-amber-300 font-medium">
                                    <span>Salam hangat dari kami, untuk generasi baru UNWAHA 2026! 💙✨</span>
                                </div>
                            </div>

                            {/* Leadership Duo Card (Presma & Wapresma) */}
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                    Pimpinan Mahasiswa BEM UNWAHA 2025/2026
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
                                            RD
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs font-bold text-slate-900 truncate">M. Ridho Danu Muslikhan, S.Pd.</div>
                                            <div className="text-[11px] text-blue-600 font-semibold">Presiden Mahasiswa</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                                        <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
                                            MF
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs font-bold text-slate-900 truncate">M. Fais Febriansyah, S.E.</div>
                                            <div className="text-[11px] text-purple-600 font-semibold">Wakil Presiden Mahasiswa</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Official Hashtags Bar with Click-to-Copy */}
                            <div>
                                <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                                    <span>Tagar Resmi Mahasiswa Baru:</span>
                                    <button
                                        onClick={copyHashtags}
                                        className="text-blue-600 hover:text-blue-700 font-bold inline-flex items-center gap-1 text-[11px]"
                                    >
                                        {copiedHashtag ? (
                                            <>
                                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                <span className="text-emerald-600">Tersalin!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-3.5 h-3.5" />
                                                <span>Salin Tagar</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { tag: '#Garuda13', color: 'bg-blue-50 text-blue-700 border-blue-200' },
                                        { tag: '#PKKMBUNWAHA', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
                                        { tag: '#UNWAHA2026', color: 'bg-amber-50 text-amber-700 border-amber-200' },
                                        { tag: '#unwahajombang', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                                    ].map((item) => (
                                        <span
                                            key={item.tag}
                                            className={`text-xs px-3 py-1 rounded-lg border font-bold ${item.color} shadow-2xs`}
                                        >
                                            {item.tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Action Buttons */}
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <a
                                    href={`https://wa.me/${siteConfig.contactWa}?text=Halo%20BEM%20UNWAHA,%20saya%20Mahasiswa%20Baru%202026%20ingin%20bergabung%20grup%20informasi:`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Helpdesk MABA via WhatsApp</span>
                                </a>
                                <a
                                    href="https://unwaha.ac.id"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs transition"
                                >
                                    <span>Website unwaha.ac.id</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                                </a>
                                <a
                                    href="https://www.instagram.com/unwahajombang"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 hover:from-pink-500/20 hover:to-blue-500/20 text-slate-800 font-bold text-xs border border-purple-200/80 transition"
                                >
                                    <Instagram className="w-4 h-4 text-pink-600" />
                                    <span>@unwahajombang</span>
                                </a>
                            </div>

                        </div>

                        {/* Right Column: Featured Poster Frame */}
                        <div className="lg:col-span-5 flex flex-col items-center">
                            <div className="relative group max-w-sm w-full">
                                
                                {/* Glowing gradient back-drop */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
                                
                                {/* Poster Box */}
                                <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-slate-200/80 shadow-2xl">
                                    <img
                                        src="/welcoming-maba-2026.png"
                                        alt="Poster Resmi Selamat Datang Mahasiswa Baru UNWAHA 2026"
                                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                                        onClick={() => onOpenPosterModal({
                                            src: '/welcoming-maba-2026.png',
                                            title: 'Poster Resmi Selamat Datang Mahasiswa Baru UNWAHA 2026',
                                            subtitle: 'PKKMB Garuda 13 Kabinet Kanagara'
                                        })}
                                    />

                                    {/* Overlay Hover Trigger */}
                                    <div 
                                        onClick={() => onOpenPosterModal({
                                            src: '/welcoming-maba-2026.png',
                                            title: 'Poster Resmi Selamat Datang Mahasiswa Baru UNWAHA 2026',
                                            subtitle: 'PKKMB Garuda 13 Kabinet Kanagara'
                                        })}
                                        className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white cursor-pointer backdrop-blur-[2px]"
                                    >
                                        <button className="px-4 py-2 bg-white text-slate-900 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg hover:bg-blue-50 transition">
                                            <Maximize2 className="w-4 h-4 text-blue-600" />
                                            <span>Klik untuk Perbesar Poster</span>
                                        </button>
                                    </div>

                                    {/* Ribbon corner badge */}
                                    <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                                        <Sparkle className="w-3 h-3 fill-amber-300 text-amber-300" />
                                        <span>RILIS RESMI BEM 2026</span>
                                    </div>
                                </div>

                            </div>

                            {/* Interactive Mini-bar Below Poster */}
                            <div className="w-full max-w-sm mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                                <button
                                    onClick={() => onOpenPosterModal({
                                        src: '/welcoming-maba-2026.png',
                                        title: 'Poster Resmi Selamat Datang Mahasiswa Baru UNWAHA 2026',
                                        subtitle: 'PKKMB Garuda 13 Kabinet Kanagara'
                                    })}
                                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center gap-1.5 border border-slate-200 transition"
                                >
                                    <Maximize2 className="w-3.5 h-3.5 text-slate-600" />
                                    <span>Lihat Poster</span>
                                </button>
                                <a
                                    href="/welcoming-maba-2026.png"
                                    download="Poster-Maba-UNWAHA-2026.png"
                                    className="py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold flex items-center justify-center gap-1.5 border border-blue-200 transition"
                                >
                                    <Download className="w-3.5 h-3.5 text-blue-600" />
                                    <span>Unduh Gambar</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
