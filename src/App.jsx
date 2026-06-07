import { Instagram, Youtube, Music, MessageCircle, CheckCircle, Sparkles, Users, Heart, BookOpen, Award, Target, Lightbulb, Menu, X, Calendar, Clock, ExternalLink, AlertTriangle, Video, Phone, ArrowRight, Megaphone } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const seminars = [
    {
        id: 1,
        num: "01",
        title: "PUBLIC SPEAKING & PERSONAL BRANDING",
        tagline: "BICARA BERDAMPAK, CITRA MENARIK!",
        speaker: "Aulia Dewi Azzahrani",
        role: "Public Speaker",
        date: "Sabtu, 11 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN169",
        color: "from-blue-500 to-indigo-500",
        shadow: "shadow-blue-500/10",
        accent: "text-blue-400",
        bgLight: "bg-blue-500/10",
        borderGlow: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
        id: 2,
        num: "02",
        title: "BUSINESS GROWTH & ENTREPRENEURSHIP",
        tagline: "INOVATIF HARI INI, SUKSES ESOK HARI!",
        speaker: "Sahda Salsabila Rosadi, S.Ag., S.Psi",
        role: "Founder Edunesia.indonesia, Writer & Speaker",
        date: "Minggu, 12 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN170",
        color: "from-amber-500 to-orange-500",
        shadow: "shadow-orange-500/10",
        accent: "text-orange-400",
        bgLight: "bg-orange-500/10",
        borderGlow: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
    },
    {
        id: 3,
        num: "03",
        title: "MS WORD FOR SMART PRODUCTIVITY",
        tagline: "KERJA LEBIH CEPAT, HASIL LEBIH TEPAT!",
        speaker: "M. Adrian Rafly, S.Sos",
        role: "Microsoft Certified Specialist",
        date: "Sabtu, 18 Juli 2026",
        time: "08:00 WIB - Selesai",
        link: "https://bit.ly/RSN171",
        color: "from-cyan-500 to-blue-500",
        shadow: "shadow-cyan-500/10",
        accent: "text-cyan-400",
        bgLight: "bg-cyan-500/10",
        borderGlow: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
    },
    {
        id: 4,
        num: "04",
        title: "MENTAL HEALTH & SELF GROWTH",
        tagline: "GROWTH POSITIF, HIDUP LEBIH PRODUKTIF!",
        speaker: "Nursyifa Az Zahra, M.Psi., Psikolog",
        role: "Founder Teman Dengar & Psikolog",
        date: "Minggu, 19 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN172",
        color: "from-purple-500 to-fuchsia-500",
        shadow: "shadow-purple-500/10",
        accent: "text-purple-400",
        bgLight: "bg-purple-500/10",
        borderGlow: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    },
    {
        id: 5,
        num: "05",
        title: "UI/UX DESIGN & DIGITAL CAREER",
        tagline: "UPGRADE SKILL, BANGUN KARIER, RAIH PENGHASILAN!",
        speaker: "Inka Andini Firmanzah",
        role: "UI/UX Designer & Portfolio Mentor",
        date: "Sabtu, 25 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN173",
        color: "from-pink-500 to-rose-500",
        shadow: "shadow-rose-500/10",
        accent: "text-rose-400",
        bgLight: "bg-rose-500/10",
        borderGlow: "hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]"
    },
    {
        id: 6,
        num: "06",
        title: "ADMIN KEUANGAN & MS EXCEL EXPERT",
        tagline: "KELOLA DATA, KUASAI KEUANGAN!",
        speaker: "Siti Muharomah, S.Akt., CAP, C.Fins, CAA",
        role: "Corporate Financial Analyst & Trainer",
        date: "Minggu, 26 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN174",
        color: "from-emerald-500 to-teal-500",
        shadow: "shadow-emerald-500/10",
        accent: "text-emerald-400",
        bgLight: "bg-emerald-500/10",
        borderGlow: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
    }
];

// Custom hook for scroll-triggered animations
function useInView(options = {}) {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true)
                // Once animated, keep it visible
                observer.unobserve(entry.target)
            }
        }, {
            threshold: 0.1,
            ...options
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    return [ref, isInView]
}

function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [scrollY, setScrollY] = useState(0)

    // Detect scroll for navbar effect and parallax
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setScrolled(currentScrollY > 20)
            setScrollY(currentScrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-dark-bg text-slate-100 overflow-x-hidden">
            {/* Mesh Gradient Background Effects with Parallax */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-blue-glow opacity-30 blur-3xl"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                ></div>
                <div
                    className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-glow opacity-20 blur-3xl"
                    style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                ></div>
                <div
                    className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-glow opacity-25 blur-3xl"
                    style={{ transform: `translateY(${scrollY * 0.4}px)` }}
                ></div>
            </div>

            {/* Premium Glassmorphism Navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-navbar-scrolled shadow-2xl' : 'glass-navbar'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo with Glow Effect */}
                        <div className="flex items-center gap-3 group">
                            <div className="relative">
                                <img
                                    src="/logo-unwaha.jpeg"
                                    alt="Logo UNWAHA"
                                    className="w-12 h-12 object-cover rounded-full ring-2 ring-blue-primary/30 group-hover:ring-blue-primary/60 transition-all duration-300"
                                    onError={(e) => { e.target.style.display = 'none' }}
                                />
                                <div className="absolute inset-0 rounded-full bg-blue-primary/20 blur-md group-hover:bg-blue-primary/40 transition-all duration-300"></div>
                            </div>
                            <span className="text-2xl font-black gradient-text tracking-tight">BEM UNWAHA</span>
                        </div>

                        {/* Desktop Navigation with Animated Underlines */}
                        <div className="hidden md:flex items-center gap-1">
                            {[
                                { href: '#home', label: 'Home' },
                                { href: '#profil', label: 'Profil' },
                                { href: '#pengumuman', label: 'Pengumuman' },
                                { href: '#proker', label: 'Proker' },
                                { href: '#galeri', label: 'Galeri' },
                                { href: '#sosmed', label: 'Sosmed' }
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="nav-link relative px-5 py-2 text-slate-300 font-medium hover:text-white transition-colors duration-300 group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-primary to-cyan-accent group-hover:w-full transition-all duration-300 ease-out"></span>
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button with Animation */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 rounded-lg bg-dark-card/50 backdrop-blur-sm border border-dark-border/50 flex items-center justify-center text-slate-300 hover:text-blue-primary hover:border-blue-primary/50 transition-all duration-300 hover:scale-110"
                        >
                            <div className="relative w-6 h-6">
                                <X
                                    size={24}
                                    className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                                        }`}
                                />
                                <Menu
                                    size={24}
                                    className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu with Slide Animation */}
                    <div
                        className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        style={{
                            overflowY: mobileMenuOpen ? 'auto' : 'hidden',
                            overflowX: 'hidden'
                        }}
                    >
                        <div className="py-4 space-y-1">
                            {[
                                { href: '#home', label: 'Home' },
                                { href: '#profil', label: 'Profil' },
                                { href: '#pengumuman', label: 'Pengumuman' },
                                { href: '#proker', label: 'Proker' },
                                { href: '#galeri', label: 'Galeri' },
                                { href: '#sosmed', label: 'Sosmed' }
                            ].map((link, index) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-slate-300 font-medium hover:text-white hover:bg-gradient-to-r hover:from-blue-primary/10 hover:to-cyan-accent/10 rounded-lg transition-all duration-300 border border-transparent hover:border-blue-primary/30"
                                    style={{
                                        animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4">
                <div
                    className="max-w-5xl mx-auto text-center relative z-10"
                    style={{ transform: `translateY(${scrollY * 0.15}px)` }}
                >
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        BEM UNWAHA <br />
                        <span
                            className="relative inline-block py-4 cursor-pointer group"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                            }}
                        >
                            {/* Subtle Base Glow */}
                            <span className="absolute inset-0 blur-[40px] bg-gradient-to-r from-blue-600/15 via-cyan-500/20 to-blue-600/15 scale-110"></span>

                            {/* Primary Spotlight - Follows Mouse Smoothly */}
                            <span
                                className="absolute w-80 h-80 rounded-full blur-[100px] bg-blue-500/25 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                                style={{
                                    left: 'var(--mouse-x, 50%)',
                                    top: 'var(--mouse-y, 50%)',
                                    transform: 'translate(-50%, -50%)',
                                    transition: 'left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-out'
                                }}
                            ></span>

                            {/* Secondary Spotlight - Faster, Smoother */}
                            <span
                                className="absolute w-48 h-48 rounded-full blur-[60px] bg-cyan-400/30 pointer-events-none opacity-0 group-hover:opacity-100"
                                style={{
                                    left: 'var(--mouse-x, 50%)',
                                    top: 'var(--mouse-y, 50%)',
                                    transform: 'translate(-50%, -50%)',
                                    transition: 'left 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease-out'
                                }}
                            ></span>

                            {/* Animated Ring 1 - Smooth Expansion */}
                            <span
                                className="absolute w-32 h-32 rounded-full border-2 border-blue-400/20 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:scale-150"
                                style={{
                                    left: 'var(--mouse-x, 50%)',
                                    top: 'var(--mouse-y, 50%)',
                                    transform: 'translate(-50%, -50%)',
                                    transition: 'left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                            ></span>

                            {/* Animated Ring 2 - Slower, Smoother Expansion */}
                            <span
                                className="absolute w-24 h-24 rounded-full border border-cyan-300/30 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:scale-[2]"
                                style={{
                                    left: 'var(--mouse-x, 50%)',
                                    top: 'var(--mouse-y, 50%)',
                                    transform: 'translate(-50%, -50%)',
                                    transition: 'left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                            ></span>

                            {/* Particle Effect 1 - Smooth Float */}
                            <span
                                className="absolute w-3 h-3 rounded-full bg-blue-400/40 blur-sm pointer-events-none opacity-0 group-hover:opacity-100"
                                style={{
                                    left: 'var(--mouse-x, 50%)',
                                    top: 'var(--mouse-y, 50%)',
                                    transform: 'translate(-50%, -50%) translate(-20px, -20px)',
                                    transition: 'left 0.15s ease-out, top 0.15s ease-out, opacity 0.2s ease-out'
                                }}
                            ></span>

                            {/* Particle Effect 2 - Smooth Float */}
                            <span
                                className="absolute w-2 h-2 rounded-full bg-cyan-300/50 blur-sm pointer-events-none opacity-0 group-hover:opacity-100"
                                style={{
                                    left: 'var(--mouse-x, 50%)',
                                    top: 'var(--mouse-y, 50%)',
                                    transform: 'translate(-50%, -50%) translate(25px, -15px)',
                                    transition: 'left 0.2s ease-out, top 0.2s ease-out, opacity 0.3s ease-out'
                                }}
                            ></span>

                            {/* Particle Effect 3 - Smooth Float */}
                            <span
                                className="absolute w-2 h-2 rounded-full bg-blue-300/40 blur-sm pointer-events-none opacity-0 group-hover:opacity-100"
                                style={{
                                    left: 'var(--mouse-x, 50%)',
                                    top: 'var(--mouse-y, 50%)',
                                    transform: 'translate(-50%, -50%) translate(-15px, 20px)',
                                    transition: 'left 0.25s ease-out, top 0.25s ease-out, opacity 0.4s ease-out'
                                }}
                            ></span>

                            {/* Gradient Text with subtle shadow */}
                            <span className="gradient-text relative drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                Kabinet Sinergi Perubahan
                            </span>
                        </span>
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto font-light"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    >
                        Membangun ekosistem mahasiswa yang inovatif, aspiratif, dan berdampak nyata untuk kemajuan kampus dan masyarakat
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                    >
                        <a
                            href="#proker"
                            className="px-8 py-4 bg-gradient-to-r from-blue-primary to-cyan-accent text-white font-semibold rounded-full hover:shadow-glow-blue transition-all duration-300 hover:scale-105"
                        >
                            Lihat Program Kami
                        </a>
                        <a
                            href="#sosmed"
                            className="px-8 py-4 glass-card border-blue-primary/30 font-semibold rounded-full hover:border-blue-primary/70 transition-all duration-300 hover:scale-105"
                        >
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </section>

            {/* Statistics Quick Grid */}
            <section className="py-16 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { number: '12', label: 'Kementerian', icon: Award },
                            { number: '40+', label: 'Program Kerja', icon: Target },
                            { number: '150+', label: 'Pengurus', icon: Users },
                            { number: '5000+', label: 'Mahasiswa', icon: Sparkles },
                        ].map((stat, index) => {
                            const [ref, isInView] = useInView()
                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className={`glass-card p-6 text-center group hover:border-blue-primary/50 transition-all duration-300 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-primary" />
                                    <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{stat.number}</div>
                                    <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Visi & Misi Section */}
            <section id="profil" className="py-20 px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
                        <span className="gradient-text">Visi & Misi</span>
                    </h2>
                    <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                        Fondasi kami dalam membangun organisasi yang berdampak
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Visi Card */}
                        {(() => {
                            const [ref, isInView] = useInView()
                            return (
                                <div
                                    ref={ref}
                                    className={`glass-card p-8 group hover:border-blue-primary/50 transition-all duration-300 ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-blue-primary/20 flex items-center justify-center">
                                            <Lightbulb className="w-6 h-6 text-blue-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Visi</h3>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">
                                        Mewujudkan BEM UNWAHA sebagai organisasi mahasiswa yang inovatif, aspiratif, dan religius dalam mengembangkan potensi mahasiswa serta berkontribusi nyata bagi kampus dan masyarakat.
                                    </p>
                                </div>
                            )
                        })()}

                        {/* Misi Card */}
                        {(() => {
                            const [ref, isInView] = useInView()
                            return (
                                <div
                                    ref={ref}
                                    className={`glass-card p-8 group hover:border-blue-primary/50 transition-all duration-300 ${isInView ? 'animate-fade-in-right' : 'opacity-0'}`}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-cyan-accent/20 flex items-center justify-center">
                                            <Target className="w-6 h-6 text-cyan-accent" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Misi</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            'Menyelenggarakan program kerja yang inovatif dan bermanfaat',
                                            'Menjadi wadah aspirasi mahasiswa yang responsif dan solutif',
                                            'Memperkuat nilai-nilai keislaman dalam setiap kegiatan',
                                            'Membangun sinergi dengan seluruh elemen kampus',
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-300">
                                                <CheckCircle className="w-5 h-5 text-blue-primary flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })()}
                    </div>
                </div>
            </section>

            {/* Papan Pengumuman Section */}
            <section id="pengumuman" className="py-20 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-primary/10 border border-blue-primary/30 text-blue-primary text-sm font-semibold mb-4 animate-pulse">
                            <Megaphone className="w-4 h-4" /> Info Terkini BEM
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4">
                            <span className="gradient-text">Papan Pengumuman</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light text-base md:text-lg">
                            Daftarkan dirimu dan ikuti program unggulan kami untuk upgrade skill dan value diri Anda!
                        </p>
                    </div>

                    {/* Top Featured Grid: Ucapan Hari Besar & Seminar Nasional */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {/* Ucapan Hari Besar: Hari Lahir Pancasila */}
                        <div className="lg:col-span-1 border border-red-600/30 bg-gradient-to-b from-red-950/20 via-dark-card to-dark-card rounded-3xl p-6 shadow-[0_0_40px_rgba(220,38,38,0.1)] relative overflow-hidden group hover:border-red-600/50 hover:shadow-[0_0_50px_rgba(220,38,38,0.25)] transition-all duration-500 flex flex-col justify-between">
                            {/* Animated red glow inside */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-[60px] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                            
                            <div>
                                {/* Card Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-bold">
                                        🇮🇩 Hari Nasional
                                    </span>
                                    <span className="text-xs text-slate-500 font-semibold">1 Juni 2025</span>
                                </div>

                                {/* Title */}
                                <div className="mb-4">
                                    <h3 className="text-2xl font-black text-white leading-tight tracking-tight">
                                        Selamat Hari Lahir <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-slate-200">Pancasila</span>
                                    </h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-slate-200 rounded mt-2"></div>
                                </div>

                                {/* Body Text */}
                                <div className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                                    <p className="font-semibold text-slate-200 italic border-l-2 border-red-500 pl-3">
                                        &ldquo;Di Hari Lahir Pancasila ini, mari kita perkuat nilai gotong royong, toleransi, dan cinta tanah air demi Indonesia yang lebih maju.&rdquo;
                                    </p>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Pancasila bukan sekadar dasar negara, tetapi juga pedoman dalam membangun karakter, menjaga persatuan, dan menghadapi berbagai tantangan zaman.
                                    </p>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        Sebagai mahasiswa, mari terus menanamkan nilai-nilai Pancasila dalam setiap langkah pengabdian, kepemimpinan, dan kontribusi nyata untuk bangsa.
                                    </p>
                                </div>

                                {/* Quote */}
                                <div className="p-3 bg-red-950/20 border border-red-500/20 rounded-xl mb-6">
                                    <p className="text-[11px] md:text-xs text-red-400 font-bold leading-relaxed">
                                        ✨ &ldquo;Bersatu dalam keberagaman, bergerak dalam kebersamaan, dan berkarya untuk Indonesia.&rdquo;
                                    </p>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="border-t border-slate-800/80 pt-4 mt-auto">
                                <div className="text-[11px] font-bold text-slate-400 mb-3 tracking-wide">
                                    BEM Universitas KH. A. Wahab Hasbullah
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {['#HariLahirPancasila', '#BEMUNWAHA', '#MahasiswaBerdaya', '#GenerasiPancasila'].map((tag) => (
                                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/50 text-slate-400 border border-slate-700/30 font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Featured Billboard Card: SEMINAR NASIONAL BERSERTIFIKAT 2026 */}
                        <div className="lg:col-span-2 border border-red-500/30 bg-gradient-to-br from-red-950/20 via-dark-card to-red-950/20 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(239,68,68,0.1)] relative overflow-hidden group hover:border-red-500/50 transition-all duration-500 flex flex-col justify-between">
                            {/* Animated gradient light rays */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

                            <div>
                                {/* Top banner tag */}
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-black rounded-full uppercase tracking-wider animate-bounce shadow-glow-red">
                                            LIMITED OFFER
                                        </span>
                                        <span className="flex items-center gap-1.5 text-orange-400 text-xs font-bold bg-orange-950/40 border border-orange-500/30 px-2.5 py-0.5 rounded-full">
                                            ⚡ Kuota SUPER TERBATAS
                                        </span>
                                        <span className="flex items-center gap-1.5 text-red-400 text-xs font-bold bg-red-950/40 border border-red-500/30 px-2.5 py-0.5 rounded-full">
                                            🔥 Selalu SOLD OUT!
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xl md:text-2xl font-black text-red-500 tracking-tight animate-pulse drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                                            100% GRATIS!
                                        </span>
                                    </div>
                                </div>

                                {/* Headline */}
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-4xl font-black text-white leading-tight mb-2 tracking-wide">
                                        SEMINAR NASIONAL BERSERTIFIKAT 2026
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-300 font-bold">
                                        🎓 6 TOPIK PILIHAN | TANPA BIAYA | E-SERTIFIKAT NASIONAL
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 items-center border-t border-slate-800/80 pt-4">
                                    {/* Copywriting */}
                                    <div className="space-y-3">
                                        <div className="p-3 bg-dark-bg/60 rounded-xl border border-slate-800">
                                            <p className="text-slate-300 leading-relaxed text-xs italic">
                                                &ldquo;Baca baik-baik ya… Kesempatan seperti ini tidak datang dua kali. Banyak peserta kami sebelumnya berkata: <span className="text-red-400 font-semibold">&apos;Kak, nyesel telat daftar… kuotanya sudah habis!&apos; 😭</span> Dan faktanya: <span className="text-orange-400 font-semibold">Setiap seminar SOLD OUT dalam hitungan jam.</span>&rdquo;
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bullet points & CTA */}
                                    <div className="space-y-3">
                                        <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                                            <li className="flex items-center gap-1.5">
                                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                <span>Upgrade Skill</span>
                                            </li>
                                            <li className="flex items-center gap-1.5">
                                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                <span>Menambah Value CV</span>
                                            </li>
                                            <li className="flex items-center gap-1.5">
                                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                <span>Persiapan Karier</span>
                                            </li>
                                            <li className="flex items-center gap-1.5">
                                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                <span>Bisnis Era Digital</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 rounded-xl text-xs text-emerald-400 flex items-center gap-2 mt-6">
                                <AlertTriangle className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                                <span><strong>PENTING:</strong> JOIN GRUP WA = RESMI TERDAFTAR ✅</span>
                            </div>
                        </div>
                    </div>

                    {/* Seminars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {seminars.map((sem) => {
                            const [cardRef, cardInView] = useInView()
                            return (
                                <div
                                    key={sem.id}
                                    ref={cardRef}
                                    className={`glass-card p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${sem.borderGlow} ${cardInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${sem.id * 0.05}s` }}
                                >
                                    {/* Accent background mesh */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${sem.color} opacity-[0.03] group-hover:opacity-[0.08] blur-xl rounded-full transition-opacity duration-300`}></div>

                                    <div>
                                        {/* Card Top / Badge & Title */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-slate-800 ${sem.accent}`}>
                                                Topik {sem.num}
                                            </span>
                                            <span className="text-3xl font-black text-slate-700/50 group-hover:text-slate-500/30 transition-colors duration-300">
                                                #{sem.num}
                                            </span>
                                        </div>

                                        {/* Seminar Title & Tagline */}
                                        <h4 className="text-lg md:text-xl font-black text-white leading-tight mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                                            {sem.title}
                                        </h4>
                                        <p className="text-slate-400 text-xs font-semibold italic border-l-2 border-slate-700 pl-2 py-0.5 mb-6 leading-relaxed">
                                            &ldquo;{sem.tagline}&rdquo;
                                        </p>

                                        {/* Speaker Block */}
                                        <div className="mb-6 p-3 rounded-xl bg-dark-bg/40 border border-dark-border/40 group-hover:border-slate-800 transition-colors duration-300">
                                            <div className="flex items-start gap-3">
                                                <div className={`w-8 h-8 rounded-lg ${sem.bgLight} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                    <Users className={`w-4 h-4 ${sem.accent}`} />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Pembicara</div>
                                                    <div className="text-sm font-bold text-slate-200">{sem.speaker}</div>
                                                    {sem.role && <div className="text-[11px] text-slate-400 font-medium leading-normal mt-0.5">{sem.role}</div>}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Date and Time */}
                                        <div className="space-y-2 mb-6 text-xs text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-slate-500" />
                                                <span>{sem.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-slate-500" />
                                                <span>{sem.time}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <a
                                        href={sem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full py-3 bg-gradient-to-r ${sem.color} text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all ${sem.shadow} shadow-lg hover:shadow-xl`}
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Daftar via Grup WAG</span>
                                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                                    </a>
                                </div>
                            )
                        })}
                    </div>

                    {/* Global Meta & Info Banner */}
                    <div className="glass-card p-6 md:p-8 border border-dark-border/80">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                            {/* Broadcast Channels */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Video className="w-5 h-5 text-blue-primary" />
                                </div>
                                <div>
                                    <div className="text-[11px] text-slate-500 uppercase font-black tracking-wider">Media Live Broadcast</div>
                                    <div className="text-sm font-bold text-slate-300">Zoom Meeting & YouTube Live</div>
                                </div>
                            </div>

                            {/* Certificate */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-5 h-5 text-cyan-accent" />
                                </div>
                                <div>
                                    <div className="text-[11px] text-slate-500 uppercase font-black tracking-wider">Apresiasi & Dokumen</div>
                                    <div className="text-sm font-bold text-slate-300">E-Sertifikat Tingkat Nasional</div>
                                </div>
                            </div>

                            {/* Organizer Info */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                                    <Instagram className="w-5 h-5 text-pink-400" />
                                </div>
                                <div>
                                    <div className="text-[11px] text-slate-500 uppercase font-black tracking-wider">Instagram Event</div>
                                    <a
                                        href="https://www.instagram.com/eduuverse"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-bold text-pink-400 hover:underline flex items-center gap-1"
                                    >
                                        @eduuverse <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>

                            {/* Contact Person */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <div className="text-[11px] text-slate-500 uppercase font-black tracking-wider">Contact Person (WA)</div>
                                    <a
                                        href="https://wa.me/6288975516069"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-bold text-emerald-400 hover:underline flex items-center gap-1"
                                    >
                                        088975516069 <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Register Banner Footer */}
                        <div className="mt-8 pt-6 border-t border-dark-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="text-sm text-slate-400">
                                📢 <span className="font-semibold text-slate-300">Info Jadwal & Seminar Lainnya:</span> kunjungi portal seminar di bawah ini.
                            </div>
                            <a
                                href="https://bit.ly/RgSENA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 bg-gradient-to-r from-blue-primary to-cyan-accent text-white font-bold text-sm rounded-full flex items-center gap-1.5 hover:scale-105 hover:shadow-glow-blue transition-all"
                            >
                                <span>Portal Info Seminar</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Program Showcase */}
            <section id="proker" className="py-20 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
                        <span className="gradient-text">Program Kerja Unggulan</span>
                    </h2>
                    <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                        Inovasi dan dedikasi dalam setiap langkah perubahan
                    </p>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Large Card - Gema Sholawat */}
                        <div className="md:col-span-2 md:row-span-2 glass-card p-8 group glow-hover">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-primary to-cyan-accent flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Gema Sholawat</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Program keagamaan rutin untuk mempererat ukhuwah islamiyah dan memperkuat spiritualitas mahasiswa melalui pembacaan sholawat bersama. Menciptakan atmosfer religius yang kental di lingkungan kampus.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-primary/20 text-blue-primary rounded-full text-sm">Keagamaan</span>
                                <span className="px-3 py-1 bg-cyan-accent/20 text-cyan-accent rounded-full text-sm">Rutin</span>
                            </div>
                        </div>

                        {/* Medium Card - LDKM */}
                        <div className="glass-card p-8 group glow-hover">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-accent to-blue-500 flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">LDKM</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Latihan Dasar Kepemimpinan Mahasiswa untuk membentuk karakter pemimpin yang berintegritas, visioner, dan berakhlak mulia.
                            </p>
                        </div>

                        {/* Medium Card - BEM Mengabdi */}
                        <div className="glass-card p-8 group glow-hover">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">BEM Mengabdi</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Program pengabdian masyarakat untuk memberikan kontribusi nyata kepada masyarakat sekitar kampus melalui berbagai kegiatan sosial.
                            </p>
                        </div>

                        {/* Small Card - Kajian Ilmiah */}
                        <div className="md:col-span-2 glass-card p-8 group glow-hover">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                    <BookOpen className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Kajian Ilmiah & Diskusi</h3>
                                    <p className="text-slate-300 leading-relaxed">
                                        Forum diskusi dan kajian untuk meningkatkan wawasan mahasiswa tentang isu-isu terkini, akademik, dan sosial kemasyarakatan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section - Dokumentasi Kegiatan */}
            <section id="galeri" className="py-20 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
                        <span className="gradient-text">Galeri Kegiatan</span>
                    </h2>
                    <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                        Dokumentasi aktivitas dan program kerja BEM UNWAHA
                    </p>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Gallery Item 1 - Large */}
                        <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl glass-card border-2 border-dark-border/50 hover:border-blue-primary/50 transition-all duration-300">
                            <div className="aspect-[16/9] md:aspect-[16/10] bg-gradient-to-br from-blue-primary/20 to-cyan-accent/20 overflow-hidden">
                                <img
                                    src="/gambar2.JPG"
                                    alt="Kegiatan BEM UNWAHA"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Gema Sholawat 2025</h3>
                                    <p className="text-slate-300 text-sm">Kegiatan rutin pembacaan sholawat bersama</p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 2 */}
                        <div className="group relative overflow-hidden rounded-2xl glass-card border-2 border-dark-border/50 hover:border-blue-primary/50 transition-all duration-300">
                            <div className="aspect-square bg-gradient-to-br from-cyan-accent/20 to-blue-500/20 overflow-hidden">
                                <img
                                    src="/gambar6.JPG"
                                    alt="Kegiatan BEM UNWAHA"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-lg font-bold text-white mb-1">LDKM 2025</h3>
                                    <p className="text-slate-300 text-xs">Pelatihan kepemimpinan</p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 3 */}
                        <div className="group relative overflow-hidden rounded-2xl glass-card border-2 border-dark-border/50 hover:border-blue-primary/50 transition-all duration-300">
                            <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                                <img
                                    src="/gambar3.JPG"
                                    alt="Kegiatan BEM UNWAHA"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-lg font-bold text-white mb-1">BEM Mengabdi</h3>
                                    <p className="text-slate-300 text-xs">Pengabdian masyarakat</p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 4 */}
                        <div className="md:col-span-2 group relative overflow-hidden rounded-2xl glass-card border-2 border-dark-border/50 hover:border-blue-primary/50 transition-all duration-300">
                            <div className="aspect-[21/9] bg-gradient-to-br from-blue-500/20 to-cyan-accent/20 overflow-hidden">
                                <img
                                    src="/gambar4.JPG"
                                    alt="Kegiatan BEM UNWAHA"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Kajian Ilmiah & Diskusi</h3>
                                    <p className="text-slate-300 text-sm">Forum diskusi mahasiswa</p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Item 5 */}
                        <div className="group relative overflow-hidden rounded-2xl glass-card border-2 border-dark-border/50 hover:border-blue-primary/50 transition-all duration-300">
                            <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 overflow-hidden">
                                <img
                                    src="/gambar5.JPG"
                                    alt="Kegiatan BEM UNWAHA"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-lg font-bold text-white mb-1">Kompetisi Mahasiswa</h3>
                                    <p className="text-slate-300 text-xs">Event tahunan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Links - CENTER OF ATTENTION */}
            <section id="sosmed" className="py-20 px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
                        <span className="gradient-text">Terhubung Dengan Kami</span>
                    </h2>
                    <p className="text-center text-slate-400 mb-12">
                        Ikuti perjalanan kami dan jangan lewatkan update terbaru
                    </p>

                    <div className="space-y-6">
                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/bemunwaha?igsh=MTluMjJ5NmszaTl5bA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between glass-card p-6 group glow-hover"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                                    <Instagram className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Instagram</h3>
                                    <p className="text-slate-400 text-sm">@bemunwaha</p>
                                </div>
                            </div>
                            <div className="text-blue-primary group-hover:translate-x-2 transition-transform duration-300">
                                →
                            </div>
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://youtube.com/@bemunwaha?si=cFoZc4OKoGUgIzrV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between glass-card p-6 group glow-hover"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                                    <Youtube className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">YouTube</h3>
                                    <p className="text-slate-400 text-sm">BEM UNWAHA</p>
                                </div>
                            </div>
                            <div className="text-blue-primary group-hover:translate-x-2 transition-transform duration-300">
                                →
                            </div>
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@official_bemunwaha?_r=1&_t=ZS-935BolWvXLL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between glass-card p-6 group glow-hover"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                                    <Music className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">TikTok</h3>
                                    <p className="text-slate-400 text-sm">@official_bemunwaha</p>
                                </div>
                            </div>
                            <div className="text-blue-primary group-hover:translate-x-2 transition-transform duration-300">
                                →
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/6283839976681"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between glass-card p-6 group glow-hover"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                                    <MessageCircle className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                                    <p className="text-slate-400 text-sm">Official Contact</p>
                                </div>
                            </div>
                            <div className="text-blue-primary group-hover:translate-x-2 transition-transform duration-300">
                                →
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 bg-dark-card/50 border-t border-dark-border/50 py-12 px-4 mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Alamat Sekretariat */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 gradient-text">Sekretariat</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Universitas KH. A. Wahab Hasbullah<br />
                                Jl. Garuda No. 09, Tambakberas<br />
                                Jombang, Jawa Timur 61471
                            </p>
                        </div>

                        {/* Kontak */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 gradient-text">Kontak</h4>
                            <div className="space-y-2 text-sm">
                                <a href="https://wa.me/6283839976681" className="flex items-center gap-2 text-slate-400 hover:text-blue-primary transition-colors">
                                    <MessageCircle size={16} />
                                    <span>+62 838-3997-6681</span>
                                </a>
                                <a href="mailto:bem@unwaha.ac.id" className="flex items-center gap-2 text-slate-400 hover:text-blue-primary transition-colors">
                                    <span>📧</span>
                                    <span>bem@unwaha.ac.id</span>
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 gradient-text">Ikuti Kami</h4>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/bemunwaha?igsh=MTluMjJ5NmszaTl5bA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-border/50 flex items-center justify-center hover:bg-blue-primary/20 hover:text-blue-primary transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://youtube.com/@bemunwaha?si=cFoZc4OKoGUgIzrV" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-border/50 flex items-center justify-center hover:bg-blue-primary/20 hover:text-blue-primary transition-all">
                                    <Youtube size={20} />
                                </a>
                                <a href="https://www.tiktok.com/@official_bemunwaha?_r=1&_t=ZS-935BolWvXLL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-dark-border/50 flex items-center justify-center hover:bg-blue-primary/20 hover:text-blue-primary transition-all">
                                    <Music size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-8 border-t border-dark-border/50 text-center">
                        <p className="text-slate-400 text-sm">
                            © 2026 BEM Universitas KH. A. Wahab Hasbullah Jombang
                        </p>
                        <p className="text-slate-500 text-xs mt-2">
                            Kabinet Sinergi Perubahan - Inovatif, Aspiratif, dan Religius
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
