import { useState, useEffect } from 'react'
import { Megaphone, Calendar, Clock, Maximize2, Sparkles, Award, CheckCircle2, Heart, GraduationCap, MapPin, Copy, Check, Play, Share2, Film, Download, Volume2 } from 'lucide-react'

export default function Pengumuman({ onOpenImageModal }) {
    const [copiedCaption, setCopiedCaption] = useState(false)
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPassed: false,
    })

    const wisudaCaptionText = `🎓✨ COMING SOON — WISUDA 2026 ✨🎓

Satu perjalanan akan segera sampai pada titik yang membanggakan.
Setiap perjuangan, doa, air mata, dan kerja keras akan menjadi bagian dari cerita yang tak terlupakan. 🤍

Mari bersiap menyambut momen istimewa Wisuda Sarjana & Pascasarjana Universitas KH. A. Wahab Hasbullah Jombang Tahun 2026.

📅 04 Oktober 2026
🎓 Sarjana & Pascasarjana
📍 GSG KH. Hasbullah Said Tambakberas (GOR Tambakberas)

The moment is coming. The memories will last forever. ✨

Sampai jumpa di hari penuh kebahagiaan dan kebanggaan.
COMING SOON! 🎓🔥

#Wisuda2026 #WisudaUNWAHA #UNWAHAJombang #ComingSoon #UNWAHA #Jombang`

    // Countdown Timer ke Acara Wisuda: 04 Oktober 2026 07:00:00 WIB
    useEffect(() => {
        const targetDate = new Date('2026-10-04T07:00:00+07:00').getTime()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = targetDate - now

            if (distance <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true })
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((distance % (1000 * 60)) / 1000)
                setTimeLeft({ days, hours, minutes, seconds, isPassed: false })
            }
        }

        updateCountdown()
        const timer = setInterval(updateCountdown, 1000)
        return () => clearInterval(timer)
    }, [])

    const handleCopyCaption = () => {
        navigator.clipboard.writeText(wisudaCaptionText)
        setCopiedCaption(true)
        setTimeout(() => setCopiedCaption(false), 2500)
    }

    return (
        <section id="pengumuman" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                        <Megaphone className="w-3.5 h-3.5" />
                        <span>Papan Informasi & Pengumuman Resmi</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        Agenda & Pengumuman Terkini Kampus
                    </h2>
                    <p className="text-slate-500 text-sm sm:text-base mt-2">
                        Informasi momentum Wisuda 2026, Dies Natalis kampus, peringatan kenegaraan, serta agenda kegiatan penting civitas UNWAHA.
                    </p>
                </div>

                {/* 1. CINEMA / THEATER MODE: COMING SOON — WISUDA 2026 */}
                <div 
                    id="wisuda" 
                    className="mb-16 scroll-mt-24 rounded-3xl bg-gradient-to-b from-slate-950 via-[#090d1f] to-slate-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl border-2 border-amber-500/40 overflow-hidden relative"
                >
                    {/* Cinema Ambient Lighting & Spotlights */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />
                    <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/15 rounded-full blur-[90px] pointer-events-none" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        
                        {/* Cinema Header Badge & Ribbon */}
                        <div className="text-center max-w-2xl mx-auto mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-black tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                                <Film className="w-3.5 h-3.5 text-amber-400" />
                                <span>UNWAHA CINEMA PREMIERE</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                                🎓✨ COMING SOON — <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow-sm">
                                    WISUDA 2026
                                </span> ✨🎓
                            </h3>
                            <p className="text-slate-300 text-xs sm:text-sm mt-2 font-medium">
                                Teaser Resmi Wisuda Sarjana &amp; Pascasarjana Universitas KH. A. Wahab Hasbullah Jombang
                            </p>
                        </div>

                        {/* LIVE COUNTDOWN TIMER (Cinema HUD Display) */}
                        <div className="w-full max-w-2xl mb-8">
                            <div className="bg-slate-900/80 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4 sm:p-5 shadow-xl text-center">
                                <div className="text-[11px] font-bold text-amber-300 tracking-wider uppercase flex items-center justify-center gap-2 mb-3">
                                    <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                                    <span>Hitung Mundur Menuju Hari Sakral: 04 Oktober 2026</span>
                                </div>

                                {timeLeft.isPassed ? (
                                    <div className="py-2 text-base sm:text-lg font-black text-amber-300 flex items-center justify-center gap-2">
                                        <Sparkles className="w-5 h-5 text-amber-400" />
                                        <span>Selamat &amp; Sukses Wisuda UNWAHA 2026! Hari Ini Berlangsung!</span>
                                        <Sparkles className="w-5 h-5 text-amber-400" />
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
                                        {[
                                            { val: timeLeft.days, label: 'Hari' },
                                            { val: timeLeft.hours, label: 'Jam' },
                                            { val: timeLeft.minutes, label: 'Menit' },
                                            { val: timeLeft.seconds, label: 'Detik' },
                                        ].map((item, idx) => (
                                            <div 
                                                key={item.label}
                                                className="bg-slate-950/90 border border-white/10 rounded-xl p-2 sm:p-3 text-center shadow-inner relative group"
                                            >
                                                <div className="text-xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-amber-200 font-mono tracking-tight">
                                                    {String(item.val).padStart(2, '0')}
                                                </div>
                                                <div className="text-[10px] sm:text-xs text-amber-300/80 font-bold uppercase tracking-wider mt-0.5">
                                                    {item.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* CENTER CINEMA THEATER SCREEN */}
                        <div className="w-full max-w-4xl mx-auto">
                            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border-2 border-amber-500/40 shadow-[0_20px_70px_-15px_rgba(245,158,11,0.3)]">
                                {/* Video Stage Viewport */}
                                <div className="relative bg-black flex items-center justify-center">
                                    <video
                                        controls
                                        playsInline
                                        preload="metadata"
                                        className="w-full max-h-[640px] object-contain mx-auto shadow-2xl"
                                    >
                                        <source src="/videos/wisuda-unwaha-2026.mp4" type="video/mp4" />
                                        <source src="/videos/WhatsApp Video 2026-09-19 at 14.31.03.mp4" type="video/mp4" />
                                        Browser Anda tidak mendukung pemutar video HTML5.
                                    </video>
                                </div>
                            </div>

                            {/* Sub-screen Ambient Glow Reflection */}
                            <div className="w-4/5 h-6 bg-amber-500/20 blur-xl mx-auto rounded-full -mt-2 pointer-events-none" />
                        </div>

                        {/* CAPTION & PRESENTATION SECTION (Below Center Screen) */}
                        <div className="w-full max-w-3xl mx-auto mt-10 space-y-6 text-center">
                            
                            {/* Poetic Narrative Card */}
                            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-4">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                                    ✨ Sambutan &amp; Narasi Resmi
                                </div>

                                <div className="space-y-3 text-slate-200 text-sm sm:text-base leading-relaxed">
                                    <p className="font-medium text-slate-100">
                                        Satu perjalanan akan segera sampai pada titik yang membanggakan.
                                    </p>
                                    <p className="italic text-amber-100">
                                        Setiap perjuangan, doa, air mata, dan kerja keras akan menjadi bagian dari cerita yang tak terlupakan. 🤍
                                    </p>
                                    <p className="text-indigo-200 font-semibold pt-1">
                                        Mari bersiap menyambut momen istimewa <span className="text-white underline decoration-amber-400 decoration-2 underline-offset-4">Wisuda Sarjana &amp; Pascasarjana</span> Universitas KH. A. Wahab Hasbullah Jombang Tahun 2026.
                                    </p>
                                </div>

                                {/* 3 Key Event Information Pillars */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/30 flex flex-col items-center justify-center gap-1 shadow-sm">
                                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center">
                                            <Calendar className="w-4 h-4" />
                                        </div>
                                        <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">Tanggal Acara</div>
                                        <div className="text-sm font-black text-amber-300">04 Oktober 2026</div>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-indigo-500/30 flex flex-col items-center justify-center gap-1 shadow-sm">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                                            <GraduationCap className="w-4 h-4" />
                                        </div>
                                        <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">Jenjang Lulusan</div>
                                        <div className="text-sm font-black text-white">Sarjana &amp; Pascasarjana</div>
                                    </div>

                                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex flex-col items-center justify-center gap-1 shadow-sm">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div className="text-[10px] text-slate-400 uppercase font-bold mt-1">Lokasi Acara</div>
                                        <div className="text-xs sm:text-sm font-black text-emerald-300 leading-tight">GSG KH. Hasbullah Said Tambakberas (GOR Tambakberas)</div>
                                    </div>
                                </div>

                                {/* Cinema Quote Highlight */}
                                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-yellow-400/15 to-amber-500/10 border border-amber-400/40 shadow-inner">
                                    <p className="text-amber-200 font-bold text-sm sm:text-base italic leading-relaxed">
                                        &ldquo;The moment is coming. The memories will last forever. ✨&rdquo;
                                    </p>
                                    <p className="text-slate-300 text-xs sm:text-sm mt-1">
                                        Sampai jumpa di hari penuh kebahagiaan dan kebanggaan.
                                    </p>
                                    <div className="mt-2 inline-block px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                                        COMING SOON! 🎓🔥
                                    </div>
                                </div>

                                {/* Hashtag Cloud */}
                                <div className="pt-2">
                                    <div className="flex flex-wrap justify-center gap-1.5">
                                        {[
                                            '#Wisuda2026',
                                            '#WisudaUNWAHA',
                                            '#UNWAHAJombang',
                                            '#ComingSoon',
                                            '#UNWAHA',
                                            '#Jombang'
                                        ].map((tag) => (
                                            <span 
                                                key={tag} 
                                                className="text-[11px] px-3 py-1 rounded-full bg-indigo-950/90 text-indigo-200 border border-indigo-700/60 font-medium hover:border-amber-400 transition"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Interactive Buttons */}
                                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                                    <button
                                        onClick={handleCopyCaption}
                                        className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-lg transition active:scale-95 cursor-pointer"
                                    >
                                        {copiedCaption ? (
                                            <>
                                                <Check className="w-4 h-4 text-slate-950" />
                                                <span>Caption Berhasil Disalin!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4" />
                                                <span>Salin Seluruh Caption</span>
                                            </>
                                        )}
                                    </button>

                                    <a
                                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(wisudaCaptionText)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-lg transition active:scale-95"
                                    >
                                        <Share2 className="w-4 h-4" />
                                        <span>Bagikan ke WhatsApp</span>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                {/* 2. FEATURED: DIES NATALIS KE-13 UNWAHA (2013 - 2026) */}
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
