import {
    Instagram, Youtube, Music, MessageCircle, CheckCircle, Sparkles,
    Users, Heart, BookOpen, Award, Target, Lightbulb, Menu, X,
    Calendar, Clock, ExternalLink, AlertTriangle, Video, Phone,
    ArrowRight, Megaphone, ChevronDown, Star, MapPin, Mail,
    ArrowUpCircle, GraduationCap, Zap, Shield, FileText, HelpCircle,
    Handshake, Search, Layers, Compass, Share2, Info, ChevronRight,
    Building2, Bell, Sparkle, Maximize2, Download, Copy, Check
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// ============================================================
// DATA SETTINGS & CONTENT
// ============================================================

const quickServices = [
    {
        id: 'aspirasi',
        title: 'Kotak Aspirasi Mahasiswa',
        desc: 'Sampaikan kritik, saran, dan aspirasi untuk kemajuan kampus dan pergerakan mahasiswa.',
        icon: MessageCircle,
        badge: 'Advokasi',
        badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
        iconBg: 'bg-blue-600 text-white',
        link: 'https://wa.me/6289529812893?text=Halo%20BEM%20UNWAHA,%20saya%20ingin%20menyampaikan%20aspirasi:',
        btnText: 'Kirim Aspirasi',
    },
    {
        id: 'kalender',
        title: 'Kalender Kegiatan Mahasiswa',
        desc: 'Jadwal terpadu agenda organisasi, seminar, perlombaan, dan kegiatan civitas UNWAHA.',
        icon: Calendar,
        badge: 'Agenda',
        badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
        iconBg: 'bg-amber-500 text-white',
        link: '#pengumuman',
        btnText: 'Lihat Jadwal',
    },
    {
        id: 'pedoman',
        title: 'Pedoman Administrasi & Surat',
        desc: 'Panduan tata kelola administrasi ormawa, pengajuan surat izin, dan format proposal resmi.',
        icon: FileText,
        badge: 'Kesekretariatan',
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        iconBg: 'bg-emerald-600 text-white',
        link: '#proker',
        btnText: 'Akses Panduan',
    },
    {
        id: 'peluang',
        title: 'Ruang Peluang & Beasiswa',
        desc: 'Informasi beasiswa, kesempatan magang, kompetisi nasional, dan program pengembangan karier.',
        icon: GraduationCap,
        badge: 'Pengembangan',
        badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
        iconBg: 'bg-purple-600 text-white',
        link: 'https://bit.ly/RgSENA',
        btnText: 'Info Beasiswa',
    },
    {
        id: 'medpart',
        title: 'Media Partner & Kolaborasi',
        desc: 'Pengajuan kemitraan publikasi, sponsorship acara kampus, dan kolaborasi strategis antar lembaga.',
        icon: Handshake,
        badge: 'Kemitraan',
        badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
        iconBg: 'bg-rose-600 text-white',
        link: 'https://wa.me/6289529812893?text=Halo%20BEM%20UNWAHA,%20kami%20tertarik%20mengajukan%20Media%20Partner:',
        btnText: 'Ajukan Kerjasama',
    },
    {
        id: 'faq',
        title: 'Pusat Tanya Jawab (FAQ)',
        desc: 'Jawaban atas pertanyaan umum seputar BEM UNWAHA, kegiatan kemahasiswaan, dan kampus.',
        icon: HelpCircle,
        badge: 'Informasi',
        badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
        iconBg: 'bg-cyan-600 text-white',
        link: '#profil',
        btnText: 'Buka FAQ',
    }
]

const seminars = [
    {
        id: 1, num: "01",
        title: "PUBLIC SPEAKING & PERSONAL BRANDING",
        tagline: "BICARA BERDAMPAK, CITRA MENARIK!",
        speaker: "Aulia Dewi Azzahrani",
        role: "Public Speaker",
        date: "Sabtu, 11 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN169",
        category: "Karier & Komunikasi",
        color: "border-l-blue-600",
        badgeColor: "bg-blue-50 text-blue-700",
    },
    {
        id: 2, num: "02",
        title: "BUSINESS GROWTH & ENTREPRENEURSHIP",
        tagline: "INOVATIF HARI INI, SUKSES ESOK HARI!",
        speaker: "Sahda Salsabila Rosadi, S.Ag., S.Psi",
        role: "Founder Edunesia.indonesia, Writer & Speaker",
        date: "Minggu, 12 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN170",
        category: "Kewirausahaan",
        color: "border-l-amber-500",
        badgeColor: "bg-amber-50 text-amber-700",
    },
    {
        id: 3, num: "03",
        title: "MS WORD FOR SMART PRODUCTIVITY",
        tagline: "KERJA LEBIH CEPAT, HASIL LEBIH TEPAT!",
        speaker: "M. Adrian Rafly, S.Sos",
        role: "Microsoft Certified Specialist",
        date: "Sabtu, 18 Juli 2026",
        time: "08:00 WIB - Selesai",
        link: "https://bit.ly/RSN171",
        category: "Digital Skill",
        color: "border-l-cyan-600",
        badgeColor: "bg-cyan-50 text-cyan-700",
    },
    {
        id: 4, num: "04",
        title: "MENTAL HEALTH & SELF GROWTH",
        tagline: "GROWTH POSITIF, HIDUP LEBIH PRODUKTIF!",
        speaker: "Nursyifa Az Zahra, M.Psi., Psikolog",
        role: "Founder Teman Dengar & Psikolog",
        date: "Minggu, 19 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN172",
        category: "Psikologi & Self-Care",
        color: "border-l-purple-600",
        badgeColor: "bg-purple-50 text-purple-700",
    },
    {
        id: 5, num: "05",
        title: "UI/UX DESIGN & DIGITAL CAREER",
        tagline: "UPGRADE SKILL, BANGUN KARIER, RAIH PENGHASILAN!",
        speaker: "Inka Andini Firmanzah",
        role: "UI/UX Designer & Portfolio Mentor",
        date: "Sabtu, 25 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN173",
        category: "Desain & Teknologi",
        color: "border-l-rose-500",
        badgeColor: "bg-rose-50 text-rose-700",
    },
    {
        id: 6, num: "06",
        title: "ADMIN KEUANGAN & MS EXCEL EXPERT",
        tagline: "KELOLA DATA, KUASAI KEUANGAN!",
        speaker: "Siti Muharomah, S.Akt., CAP, C.Fins, CAA",
        role: "Corporate Financial Analyst & Trainer",
        date: "Minggu, 26 Juli 2026",
        time: "09:00 WIB - Selesai",
        link: "https://bit.ly/RSN174",
        category: "Administrasi & Finansial",
        color: "border-l-emerald-600",
        badgeColor: "bg-emerald-50 text-emerald-700",
    },
]

const prokerList = [
    {
        id: 1,
        title: "Gema Sholawat & Doa Bersama",
        desc: "Program keagamaan rutin untuk mempererat ukhuwah islamiyah dan membina karakter spiritual mahasiswa di lingkungan kampus berbasis Ahlussunnah wal Jama'ah.",
        category: "Keagamaan",
        kementerian: "Kemen. Agama & Moralitas",
        icon: Heart,
        iconColor: "text-blue-600 bg-blue-50",
    },
    {
        id: 2,
        title: "LDKM (Latihan Dasar Kepemimpinan)",
        desc: "Kaderisasi kepemimpinan mahasiswa berjenjang untuk melahirkan pemimpin muda yang kritis, berintegritas, visioner, dan berakhlakul karimah.",
        category: "Kaderisasi",
        kementerian: "Kemen. PSDM",
        icon: Users,
        iconColor: "text-purple-600 bg-purple-50",
    },
    {
        id: 3,
        title: "BEM Mengabdi & Desa Binaan",
        desc: "Aksi nyata pemberdayaan masyarakat pedesaan melalui edukasi sosial, bakti kesehatan, serta pendampingan ekonomi berbasis potensi lokal.",
        category: "Pengabdian",
        kementerian: "Kemen. Sosial & Pengmas",
        icon: Sparkles,
        iconColor: "text-emerald-600 bg-emerald-50",
    },
    {
        id: 4,
        title: "Kajian Ilmiah & Mimbar Aspirasi",
        desc: "Forum diskusi kritis dan dialektika mahasiswa dalam merespons isu kebangsaan, kebijakan pendidikan tinggi, dan advokasi kesejahteraan mahasiswa.",
        category: "Akademik & Isu",
        kementerian: "Kemen. Kastrat & Advokasi",
        icon: BookOpen,
        iconColor: "text-amber-600 bg-amber-50",
    },
    {
        id: 5,
        title: "Pekan Kreativitas & Kompetisi Kampus",
        desc: "Ajang unjuk bakat di bidang seni, olahraga, dan karya inovasi ilmiah untuk meningkatkan prestasi mahasiswa di tingkat regional dan nasional.",
        category: "Minat & Bakat",
        kementerian: "Kemen. Seni & Olahraga",
        icon: Award,
        iconColor: "text-rose-600 bg-rose-50",
    },
    {
        id: 6,
        title: "Soedirman Digital Empowerment",
        desc: "Pelatihan keterampilan digital, bootcamp teknologi, UI/UX, dan literasi media guna mempersiapkan mahasiswa menghadapi dunia kerja modern.",
        category: "Teknologi",
        kementerian: "Kemen. Kominfo & Media",
        icon: Zap,
        iconColor: "text-cyan-600 bg-cyan-50",
    }
]

const pengurusData = [
    {
        nama: "M. Ridho Danu Muslikhan, S.Pd.",
        jabatan: "Presiden Mahasiswa",
        periode: "2025/2026",
        prodi: "Fakultas Ilmu Pendidikan",
        initial: "RD",
        color: "bg-blue-600 text-white",
    },
    {
        nama: "M. Fais Febriansyah, S.E.",
        jabatan: "Wakil Presiden Mahasiswa",
        periode: "2025/2026",
        prodi: "Fakultas Ekonomi",
        initial: "MF",
        color: "bg-purple-600 text-white",
    },
    {
        nama: "Nailul Muna",
        jabatan: "Sekretaris Jenderal",
        periode: "2025/2026",
        prodi: "Fakultas Teknologi Informasi",
        initial: "NM",
        color: "bg-emerald-600 text-white",
    },
    {
        nama: "Rizka Amalia",
        jabatan: "Bendahara Umum",
        periode: "2025/2026",
        prodi: "Fakultas Ekonomi",
        initial: "RA",
        color: "bg-amber-600 text-white",
    },
]

const galleryImages = [
    { src: '/gambar2.JPG', title: 'Gema Sholawat Akbar', category: 'Keagamaan' },
    { src: '/gambar6.JPG', title: 'LDKM Mahasiswa UNWAHA', category: 'Kepemimpinan' },
    { src: '/gambar3.JPG', title: 'BEM Mengabdi di Desa Binaan', category: 'Sosial' },
    { src: '/gambar7.JPG', title: 'Seminar Nasional Bersertifikat', category: 'Akademik' },
    { src: '/gambar4.JPG', title: 'Diskusi & Kajian Publik', category: 'Advokasi' },
    { src: '/gambar5.JPG', title: 'Festival & Kompetisi Kreatif', category: 'Minat & Bakat' },
]

// ============================================================
// MAIN APPLICATION COMPONENT
// ============================================================

export default function App() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeTab, setActiveTab] = useState('semua')
    const [showBackToTop, setShowBackToTop] = useState(false)
    const [posterModalOpen, setPosterModalOpen] = useState(false)
    const [copiedHashtag, setCopiedHashtag] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY
            setScrolled(y > 20)
            setShowBackToTop(y > 500)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const copyHashtags = () => {
        navigator.clipboard.writeText('#Garuda13 #PKKMBUNWAHA #UNWAHA2026 #unwahajombang')
        setCopiedHashtag(true)
        setTimeout(() => setCopiedHashtag(false), 2000)
    }

    const filteredProker = activeTab === 'semua' 
        ? prokerList 
        : prokerList.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()))

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
            {/* Main Navigation Bar (Clean & Professional, inspired by apps.bem-unsoed.com) */}
            <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' : 'bg-white border-b border-slate-100 py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        
                        {/* Brand Logo & Name */}
                        <a href="#home" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-100 to-amber-50 border border-amber-300/80 p-1 flex items-center justify-center shadow-sm">
                                <img
                                    src="/logo-kanagara.png"
                                    alt="Logo Kabinet Kanagara UNWAHA"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="font-extrabold text-lg text-slate-900 leading-tight group-hover:text-amber-600 transition">
                                    BEM UNWAHA
                                </div>
                                <div className="text-[11px] text-amber-700 font-bold">
                                    Kabinet Kanagara
                                </div>
                            </div>
                        </a>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-slate-600">
                            <a href="#home" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition">Beranda</a>
                            <a href="#maba" className="px-3.5 py-2 rounded-lg text-blue-700 bg-blue-50/90 font-bold hover:bg-blue-100 transition flex items-center gap-1.5 border border-blue-200/60 shadow-xs">
                                <GraduationCap className="w-4 h-4 text-blue-600" />
                                <span>Maba 2026</span>
                                <span className="bg-blue-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase">Baru</span>
                            </a>
                            <a href="#layanan" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition">Layanan Mahasiswa</a>
                            <a href="#pengumuman" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition">Pengumuman & Agenda</a>
                            <a href="#proker" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition">Program Kerja</a>
                            <a href="#profil" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition">Profil & Visi Misi</a>
                            <a href="#galeri" className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition">Galeri</a>
                        </nav>

                        {/* Action CTA Button */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="#layanan"
                                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition"
                            >
                                <Compass className="w-4 h-4" />
                                <span>Portal Layanan</span>
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden pt-4 pb-3 border-t border-slate-100 mt-3 space-y-1">
                            {[
                                { href: '#home', label: 'Beranda' },
                                { href: '#maba', label: '🎓 Sambutan Mahasiswa Baru 2026', highlight: true },
                                { href: '#layanan', label: 'Layanan Mahasiswa' },
                                { href: '#pengumuman', label: 'Pengumuman & Agenda' },
                                { href: '#proker', label: 'Program Kerja' },
                                { href: '#profil', label: 'Profil & Visi Misi' },
                                { href: '#galeri', label: 'Galeri' },
                                { href: '#kontak', label: 'Kontak Kami' },
                            ].map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition ${item.highlight ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'}`}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="pt-2">
                                <a
                                    href="https://wa.me/6289529812893"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center block py-2.5 px-4 bg-blue-600 text-white rounded-lg font-bold text-sm"
                                >
                                    Hubungi BEM UNWAHA
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* HERO SECTION (Clean White Background with Subtle Mesh Pattern, like BEM Unsoed Kausa Cipta) */}
            <section id="home" className="relative bg-white border-b border-slate-200/80 overflow-hidden pt-12 pb-16 md:py-20">
                <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Left Column: Headline & Action */}
                        <div className="lg:col-span-7 space-y-6">
                            
                            {/* Pill Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide">
                                <Sparkle className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                                <span>Keluarga Besar Mahasiswa UNWAHA 2025/2026</span>
                            </div>

                            {/* Main Title */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                                    Badan Eksekutif Mahasiswa <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                        Universitas KH. A. Wahab Hasbullah
                                    </span>
                                </h1>
                                <p className="mt-2 text-xl font-bold text-slate-800">
                                    Kabinet <span className="text-amber-600">Kanagara</span>
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
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                                >
                                    <span>Jelajahi Layanan Mahasiswa</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#profil"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm border border-slate-200 transition"
                                >
                                    <span>Profil & Visi Misi</span>
                                </a>
                            </div>

                            {/* Tagline Box Quote */}
                            <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500 italic">
                                <span className="font-semibold text-slate-700 not-italic">Motto Kabinet:</span>
                                &ldquo;Inovatif, Aspiratif, dan Religius — Merajut Sinergi, Wujudkan Aksi Nyata&rdquo;
                            </div>
                        </div>

                        {/* Right Column: Hero Visual Card (Modern Clean Portal Frame) */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl relative overflow-hidden text-center">
                                
                                {/* Card Top Status Bar */}
                                <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100 text-xs">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/80 text-[11px]">
                                        <CheckCircle className="w-3.5 h-3.5" />
                                        <span>Aktif & Terverifikasi</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200/80 text-[11px]">
                                        <Shield className="w-3.5 h-3.5 text-blue-600" />
                                        <span>Periode 2025 / 2026</span>
                                    </span>
                                </div>

                                {/* Logo & Titles */}
                                <div className="w-28 h-28 mx-auto mb-3 flex items-center justify-center">
                                    <img
                                        src="/logo-kanagara.png"
                                        alt="Logo Kabinet Kanagara BEM UNWAHA"
                                        className="w-full h-full object-contain logo-sun-spin"
                                    />
                                </div>
                                <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                                    BEM UNWAHA
                                </h3>
                                <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-0.5 mb-3">
                                    Kabinet Kanagara
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed mb-5 px-2">
                                    Pusat koordinasi dan pengembangan potensi mahasiswa Universitas KH. A. Wahab Hasbullah Jombang.
                                </p>

                                {/* 4-Cell Information Grid */}
                                <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-100">
                                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="text-[10px] text-slate-400 font-bold uppercase">Periode Khidmat</div>
                                        <div className="text-xs font-bold text-slate-800 mt-0.5">2025 / 2026</div>
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

                {/* Bottom Quick Stats Row (Clean White Bar with Dividers) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 p-4 sm:p-6">
                        {[
                            { value: '12', label: 'Kementerian Aktif', sub: 'Bidang pengabdian' },
                            { value: '15+', label: 'Program Kerja', sub: 'Inovasi berkelanjutan' },
                            { value: '45', label: 'Pengurus BEM', sub: 'Keluarga mahasiswa' },
                            { value: '3.500+', label: 'Mahasiswa UNWAHA', sub: 'Civitas akademika' },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-3 sm:p-4 text-center">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                                    {stat.label}
                                </div>
                                <div className="text-[11px] text-slate-400">
                                    {stat.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SAMBUTAN RESMI MAHASISWA BARU UNWAHA 2026 (#maba) */}
            <section id="maba" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/50 to-slate-50 border-b border-slate-200/80 overflow-hidden">
                {/* Decorative background blurs & patterns */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide mb-3 shadow-xs">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
                            <span>PKKMB & Sambutan Resmi Mahasiswa Baru 2026</span>
                            <span className="bg-blue-600 text-white text-[10px] px-2 py-0.2 rounded-full font-extrabold uppercase">#Garuda13</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            🎓 Selamat Datang <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600">
                                Mahasiswa Baru UNWAHA 2026
                            </span>
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
                            Langkah baru, semangat baru, dan tekad bersama menjadi generasi mahasiswa yang aktif, inspiratif, dan berprestasi di Universitas KH. A. Wahab Hasbullah Jombang.
                        </p>
                    </div>

                    {/* Main Welcoming Card Showcase */}
                    <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            
                            {/* Left Column: Official Welcome Narrative & Leadership */}
                            <div className="lg:col-span-7 space-y-6">
                                
                                {/* Welcome Salutation Badge */}
                                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 border border-blue-200/80 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm font-bold text-lg">
                                        👋
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Sambutan Hangat BEM UNWAHA</div>
                                        <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
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
                                        <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                                                RD
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-xs font-bold text-slate-900 truncate">M. Ridho Danu Muslikhan, S.Pd.</div>
                                                <div className="text-[11px] text-blue-600 font-semibold">Presiden Mahasiswa</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                                            <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
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
                                                    <Check className="w-3 h-3 text-emerald-600" />
                                                    <span className="text-emerald-600">Tersalin!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-3 h-3" />
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
                                        href="https://wa.me/6289529812893?text=Halo%20BEM%20UNWAHA,%20saya%20Mahasiswa%20Baru%202026%20ingin%20bergabung%20grup%20informasi:"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Helpdesk MABA via WhatsApp</span>
                                    </a>
                                    <a
                                        href="https://unwaha.ac.id"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs border border-slate-200 shadow-2xs transition"
                                    >
                                        <span>Website Kampus unwaha.ac.id</span>
                                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/unwahajombang"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 hover:from-pink-500/20 hover:to-blue-500/20 text-slate-800 font-bold text-xs border border-purple-200/80 transition"
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
                                            onClick={() => setPosterModalOpen(true)}
                                        />

                                        {/* Overlay Hover Trigger */}
                                        <div 
                                            onClick={() => setPosterModalOpen(true)}
                                            className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white cursor-pointer backdrop-blur-[2px]"
                                        >
                                            <button className="px-4 py-2 bg-white text-slate-900 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg hover:bg-blue-50 transition">
                                                <Maximize2 className="w-4 h-4 text-blue-600" />
                                                <span>Klik untuk Perbesar Poster</span>
                                            </button>
                                        </div>

                                        {/* Ribbon corner badge */}
                                        <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                                            <Sparkle className="w-3 h-3 fill-amber-300 text-amber-300" />
                                            <span>RILIS RESMI BEM 2026</span>
                                        </div>
                                    </div>

                                </div>

                                {/* Interactive Mini-bar Below Poster */}
                                <div className="w-full max-w-sm mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                                    <button
                                        onClick={() => setPosterModalOpen(true)}
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

            {/* LAYANAN MAHASISWA (App Grid / Service Showcase, like apps.bem-unsoed.com) */}
            <section id="layanan" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                                <Layers className="w-3.5 h-3.5" />
                                <span>Pusat Layanan Terpadu</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Layanan Mahasiswa BEM UNWAHA
                            </h2>
                            <p className="text-slate-500 text-sm sm:text-base max-w-2xl mt-1">
                                Akses cepat berbagai layanan advokasi, administrasi, agenda kampus, dan ruang pengembangan potensi mahasiswa.
                            </p>
                        </div>
                        <div className="text-xs text-slate-400">
                            Terbuka untuk seluruh civitas UNWAHA
                        </div>
                    </div>

                    {/* Quick App Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {quickServices.map((service) => {
                            const Icon = service.icon
                            return (
                                <div
                                    key={service.id}
                                    className="portal-card p-6 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg} shadow-sm`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
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
                                    <a
                                        href={service.link}
                                        target={service.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs border border-slate-200 hover:border-blue-200 transition"
                                    >
                                        <span>{service.btnText}</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* PAPAN PENGUMUMAN & AGENDA RESMI (With the HUT RI 81 poster, Muktamar LESBUMI, & Seminar Nasional) */}
            <section id="pengumuman" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                            <Megaphone className="w-3.5 h-3.5" />
                            <span>Informasi & Pengumuman Resmi</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Agenda & Berita Terkini BEM
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base mt-2">
                            Pantau informasi terbaru, kegiatan kenegaraan, serta agenda seminar bersertifikat nasional.
                        </p>
                    </div>

                    {/* FEATURED: HUT RI KE-81 OFFICIAL POSTER SHOWCASE CARD */}
                    <div className="mb-12 bg-gradient-to-br from-red-50 via-white to-rose-50 border-2 border-red-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            
                            {/* Poster Image */}
                            <div className="lg:col-span-5 flex justify-center">
                                <div className="max-w-xs sm:max-w-sm w-full rounded-2xl overflow-hidden shadow-lg border-2 border-red-300 bg-white">
                                    <img
                                        src="/hut-ri-81.jpg"
                                        alt="Poster Resmi Dirgahayu Republik Indonesia Ke-81 BEM UNWAHA"
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Copywriting & Text */}
                            <div className="lg:col-span-7 space-y-4">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider">
                                        🇮🇩 DIRGAHAYU REPUBLIK INDONESIA
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs">
                                        17 Agustus 1945 – 17 Agustus 2026
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                                    Dirgahayu Republik Indonesia <span className="text-red-600">Ke-81</span>
                                </h3>

                                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                    81 tahun Indonesia merdeka, 81 tahun semangat juang tak pernah padam. Mari jadikan momen kemerdekaan ini sebagai pengingat untuk terus berkarya, berkontribusi, dan menjaga persatuan demi Indonesia yang lebih maju.
                                </p>

                                <p className="text-slate-800 font-semibold text-sm">
                                    Merdeka bukan sekadar perayaan, tetapi semangat untuk terus mengabdi dan menginspirasi. ❤️🤍
                                </p>

                                {/* Quote Box */}
                                <div className="p-4 rounded-xl bg-white border border-red-200 shadow-sm">
                                    <p className="text-red-700 font-bold text-sm sm:text-base italic">
                                        &ldquo;Bersatu, Berdaulat, Rakyat Sejahtera, Indonesia Maju.&rdquo; 🇮🇩✨
                                    </p>
                                </div>

                                {/* Hashtags */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['#DirgahayuRI81', '#IndonesiaMerdeka', '#BEMUNWAHA', '#kabinetkanagara', '#BanggaIndonesia'].map((tag) => (
                                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TWO COLUMNS: Muktamar LESBUMI & Seminar Nasional Banner */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                        
                        {/* Muktamar LESBUMI Card */}
                        <div className="lg:col-span-5 bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold">
                                        📢 Himbauan Resmi
                                    </span>
                                    <span className="text-emerald-300 text-xs">11 Juni 2026</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    Muktamar Kebudayaan LESBUMI PBNU 2026
                                </h3>
                                <p className="text-emerald-200 text-xs sm:text-sm leading-relaxed mb-6">
                                    Himbauan kepada seluruh civitas akademika UNWAHA (Dosen, Tendik, & Mahasiswa) untuk hadir dan memeriahkan forum kebudayaan nasional bertema &ldquo;Kembali ke Akar&rdquo; di kampus UNWAHA.
                                </p>
                                
                                <div className="space-y-2 bg-emerald-900/60 p-4 rounded-xl text-xs text-emerald-100 border border-emerald-800 mb-6">
                                    <div>📍 Lokasi: Kampus UNWAHA Jombang</div>
                                    <div>📅 Waktu: 12 – 14 Juni 2026</div>
                                    <div>🏷️ Tema: &ldquo;Kembali ke Akar&rdquo;</div>
                                </div>
                            </div>

                            <div className="text-xs text-emerald-300 font-medium border-t border-emerald-800 pt-4">
                                BEM Universitas KH. A. Wahab Hasbullah
                            </div>
                        </div>

                        {/* Seminar Nasional Overview Billboard */}
                        <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800">
                            <div>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    <span className="px-3 py-1 bg-red-600 text-white font-bold text-xs rounded-full uppercase">
                                        100% GRATIS & BERSERTIFIKAT
                                    </span>
                                    <span className="text-amber-400 text-xs font-bold">
                                        ⚡ Kuota Terbatas
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 leading-tight">
                                    Seminar Nasional Bersertifikat 2026
                                </h3>
                                <p className="text-slate-300 text-sm mb-6">
                                    Peningkatan kompetensi mahasiswa melalui 6 rangkaian seminar online bersama narasumber bersertifikasi dan praktisi profesional.
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                                    {[
                                        { label: 'Public Speaking', sub: 'Topik 01' },
                                        { label: 'Entrepreneur', sub: 'Topik 02' },
                                        { label: 'MS Productivity', sub: 'Topik 03' },
                                        { label: 'Mental Health', sub: 'Topik 04' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                                            <div className="text-[10px] text-blue-400 font-bold">{item.sub}</div>
                                            <div className="text-xs font-bold text-white mt-0.5 truncate">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                                <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                                    <CheckCircle className="w-4 h-4" /> Gabung Grup WAG = Resmi Terdaftar
                                </span>
                                <a
                                    href="https://bit.ly/RgSENA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl inline-flex items-center gap-1.5 transition"
                                >
                                    <span>Portal Jadwal Lengkap</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* 6 SEMINAR CARDS GRID (Clean White Card with Color Side Border) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {seminars.map((sem) => (
                            <div
                                key={sem.id}
                                className={`portal-card p-6 flex flex-col justify-between border-l-4 ${sem.color}`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${sem.badgeColor}`}>
                                            {sem.category}
                                        </span>
                                        <span className="text-xs font-black text-slate-400">
                                            #{sem.num}
                                        </span>
                                    </div>

                                    <h4 className="font-extrabold text-base text-slate-900 leading-snug mb-1">
                                        {sem.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 italic mb-4">
                                        &ldquo;{sem.tagline}&rdquo;
                                    </p>

                                    {/* Speaker Info */}
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                                        <div className="text-[10px] text-slate-400 font-bold uppercase">Narasumber</div>
                                        <div className="text-xs font-bold text-slate-800">{sem.speaker}</div>
                                        <div className="text-[11px] text-slate-500">{sem.role}</div>
                                    </div>

                                    {/* Time and Date */}
                                    <div className="space-y-1 text-xs text-slate-500 mb-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                            <span>{sem.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                                            <span>{sem.time}</span>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={sem.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>Daftar via Grup WA</span>
                                    <ExternalLink className="w-3 h-3 opacity-60" />
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* PROGRAM KERJA & INOVASI (Clean Filterable Tabs) */}
            <section id="proker" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                            <Target className="w-3.5 h-3.5" />
                            <span>Aksi & Transformasi</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Program Kerja Unggulan
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base mt-2">
                            Inisiatif terstruktur BEM UNWAHA dalam memajukan potensi keilmuan, kepemimpinan, dan keagamaan.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {[
                            { id: 'semua', label: 'Semua Program' },
                            { id: 'keagamaan', label: 'Keagamaan' },
                            { id: 'kaderisasi', label: 'Kaderisasi' },
                            { id: 'pengabdian', label: 'Pengabdian' },
                            { id: 'akademik', label: 'Akademik' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Program Cards Grid */}
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
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${proker.iconColor}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                                                {proker.category}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                                            {proker.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                                            {proker.desc}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                                        <span className="text-slate-400 font-medium">Pelaksana:</span>
                                        <span className="font-bold text-slate-700">{proker.kementerian}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* PROFIL KABINET, VISI MISI & FILOSOFI LOGO */}
            <section id="profil" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                            <Lightbulb className="w-3.5 h-3.5" />
                            <span>Identitas, Visi & Filosofi</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Profil & Filosofi Kabinet Kanagara
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base mt-2">
                            Arah pergerakan BEM UNWAHA periode 2025/2026 dalam membangun kemuliaan, integritas, dan prestasi tertinggi kampus.
                        </p>
                    </div>

                    {/* FILOSOFI DESAIN BUNGA MATAHARI EMAS (KABINET KANAGARA) */}
                    <div className="mb-16 bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40 border border-amber-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            
                            {/* Logo Showcase Left */}
                            <div className="lg:col-span-4 flex flex-col items-center text-center">
                                <div className="relative p-6 rounded-3xl bg-white border border-amber-200/80 shadow-xl max-w-[280px] w-full flex flex-col items-center">
                                    <div className="w-48 h-48 mx-auto flex items-center justify-center">
                                        <img
                                            src="/logo-kanagara.png"
                                            alt="Logo Bunga Matahari Emas - Kabinet Kanagara BEM UNWAHA"
                                            className="w-full h-full object-contain logo-sun-spin"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <div className="text-sm font-extrabold text-amber-900 uppercase tracking-wider">
                                            Bunga Matahari Emas
                                        </div>
                                        <div className="text-xs text-amber-700 font-semibold mt-0.5">
                                            Lambang Resmi Kabinet Kanagara
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Philosophy 4 Pillars Grid Right */}
                            <div className="lg:col-span-8 space-y-6">
                                <div>
                                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider">
                                        Filosofi Desain Lambang
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                                        Makna Filosofis Bunga Matahari Emas
                                    </h3>
                                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                                        Setiap unsur ukiran, pola spiral, dan warna emas merepresentasikan semangat pergerakan yang terstruktur, visioner, dan bermartabat.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    
                                    {/* Pillar 1: Bunga Matahari */}
                                    <div className="p-4 bg-white rounded-2xl border border-amber-100 shadow-sm">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                                                🌻
                                            </div>
                                            <h4 className="text-sm font-bold text-slate-900">
                                                Bunga Matahari (Fokus Utama)
                                            </h4>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Secara alami, bunga matahari selalu tumbuh menghadap cahaya. Ini melambangkan optimisme, harapan, dan visi yang selalu berorientasi ke depan. Menggunakan bunga matahari sebagai ikon utama mencerminkan sebuah pergerakan yang selalu mencari pencerahan, kebenaran, dan terus bertumbuh menuju arah yang positif.
                                        </p>
                                    </div>

                                    {/* Pillar 2: Pola Geometris Spiral */}
                                    <div className="p-4 bg-white rounded-2xl border border-amber-100 shadow-sm">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                                                🌀
                                            </div>
                                            <h4 className="text-sm font-bold text-slate-900">
                                                Pola Geometris Spiral (Bagian Tengah)
                                            </h4>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Bagian tengah bunga mengadopsi pola spiral matematis (deret Fibonacci). Pola ini melambangkan keteraturan, sinergi, dan sistem yang terstruktur dengan sangat baik. Setiap garis saling menyilang dan menopang, menunjukkan bahwa di balik tampilan simpel, terdapat fondasi logika dan kolaborasi solid yang tak terpisahkan.
                                        </p>
                                    </div>

                                    {/* Pillar 3: Warna Emas Metalik */}
                                    <div className="p-4 bg-white rounded-2xl border border-amber-100 shadow-sm">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                                                👑
                                            </div>
                                            <h4 className="text-sm font-bold text-slate-900">
                                                Warna Emas Metalik (Palet Warna)
                                            </h4>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Emas secara universal adalah simbol dari kejayaan, kebijaksanaan, dan kualitas tertinggi. Penggunaan warna emas elegan ini sangat sejalan dengan konsep <strong>Kanagara (mahkota/kemuliaan)</strong>, yang menegaskan tekad untuk mencapai standar tertinggi dalam setiap karya atau program yang dijalankan.
                                        </p>
                                    </div>

                                    {/* Pillar 4: Ukiran Detail pada Kelopak */}
                                    <div className="p-4 bg-white rounded-2xl border border-amber-100 shadow-sm">
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                                                ⚜️
                                            </div>
                                            <h4 className="text-sm font-bold text-slate-900">
                                                Ukiran Detail pada Kelopak (Tekstur)
                                            </h4>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            Kelopak bunga memiliki ukiran rumit di bagian dalam namun tetap rapi dari luar. Ini merepresentasikan apresiasi terhadap proses dan ketelitian. Menunjukkan dedikasi dan perhatian pada detail terkecil dalam mengelola kerumitan menjadi karya yang mudah dipahami dan fungsional.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visi & Misi Dual Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                        
                        {/* Visi Card */}
                        <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800 text-blue-200 text-xs font-bold uppercase tracking-wider mb-6">
                                    Visi Utama
                                </div>
                                <h3 className="text-2xl font-extrabold mb-4 leading-snug">
                                    Mewujudkan BEM UNWAHA yang Inovatif, Aspiratif, dan Religius
                                </h3>
                                <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                                    Sebagai wadah pengembangan potensi mahasiswa, pengawal aspirasi yang responsif, serta pelopor kemajuan kampus berlandaskan nilai-nilai keislaman Ahlussunnah wal Jama&apos;ah demi mencapai puncak kemuliaan karya.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-blue-800/80 text-xs text-blue-300">
                                Kabinet Kanagara · Periode 2025/2026
                            </div>
                        </div>

                        {/* Misi Card */}
                        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
                                4 Misi Strategis
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: 'Inovasi Program Kerja', desc: 'Menyelenggarakan kegiatan kemahasiswaan yang kreatif, terukur, dan berdampak nyata bagi almamater.' },
                                    { title: 'Responsivitas Aspirasi', desc: 'Menjadi jembatan komunikasi yang aktif, solutif, dan terbuka antara mahasiswa dengan rektorat.' },
                                    { title: 'Penguatan Nilai Religius', desc: 'Menanamkan nilai-nilai keislaman dan akhlakul karimah dalam seluruh denyut pergerakan organisasi.' },
                                    { title: 'Kolaborasi dan Sinergi', desc: 'Membangun sinergisitas harmonis dengan UKM, HIMA prodi, serta pihak eksternal kampus.' },
                                ].map((misi, i) => (
                                    <div key={i} className="flex items-start gap-4 p-3 bg-white rounded-xl border border-slate-200/80">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900">{misi.title}</h4>
                                            <p className="text-xs text-slate-500 mt-0.5">{misi.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Pengurus Inti Section */}
                    <div>
                        <div className="text-center mb-8">
                            <h3 className="text-xl font-bold text-slate-900">
                                Badan Pengurus Harian (BPH)
                            </h3>
                            <p className="text-xs text-slate-500 mt-1">Pimpinan Harian BEM UNWAHA Kabinet Kanagara 2025/2026</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pengurusData.map((pengurus, idx) => (
                                <div
                                    key={idx}
                                    className="portal-card p-6 text-center"
                                >
                                    <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-extrabold text-xl shadow-md ${pengurus.color}`}>
                                        {pengurus.initial}
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-sm">{pengurus.nama}</h4>
                                    <div className="text-blue-600 font-bold text-xs mt-0.5">{pengurus.jabatan}</div>
                                    <div className="text-[11px] text-slate-400 mt-1">{pengurus.prodi}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* DOKUMENTASI & GALERI KEGIATAN */}
            <section id="galeri" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                        <div>
                            <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                                <Compass className="w-3.5 h-3.5" />
                                <span>Momen & Dokumentasi</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
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
                            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
                        >
                            <span>Lihat Foto Lainnya di Instagram</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                            >
                                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-4 bg-white">
                                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                                        {img.category}
                                    </span>
                                    <h4 className="font-bold text-slate-900 text-sm mt-0.5">
                                        {img.title}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KANAL SOSIAL MEDIA & KONTAK */}
            <section id="kontak" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            
                            <div className="lg:col-span-6 space-y-4">
                                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                                    Terhubung Bersama Kami
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold">
                                    Kanal Resmi Informasi & Publikasi
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Dapatkan update agenda kampus, siaran langsung seminar, dan konten kreatif kemahasiswaan melalui akun media sosial resmi BEM UNWAHA.
                                </p>
                            </div>

                            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { name: 'Instagram', handle: '@bemunwaha', icon: Instagram, href: 'https://www.instagram.com/bemunwaha', color: 'hover:bg-pink-600' },
                                    { name: 'YouTube', handle: 'BEM UNWAHA', icon: Youtube, href: 'https://youtube.com/@bemunwaha', color: 'hover:bg-red-600' },
                                    { name: 'TikTok', handle: '@official_bemunwaha', icon: Music, href: 'https://www.tiktok.com/@official_bemunwaha', color: 'hover:bg-slate-700' },
                                    { name: 'WhatsApp', handle: 'Official Contact', icon: MessageCircle, href: 'https://wa.me/6289529812893', color: 'hover:bg-emerald-600' },
                                ].map((soc, i) => {
                                    const Icon = soc.icon
                                    return (
                                        <a
                                            key={i}
                                            href={soc.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 bg-slate-800/80 rounded-2xl border border-slate-700 text-center flex flex-col items-center justify-center transition-all ${soc.color}`}
                                        >
                                            <Icon className="w-6 h-6 mb-2 text-white" />
                                            <div className="text-xs font-bold text-white">{soc.name}</div>
                                            <div className="text-[10px] text-slate-400 mt-0.5 truncate w-full">{soc.handle}</div>
                                        </a>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* OFFICIAL FOOTER */}
            <footer className="bg-slate-900 text-slate-400 text-xs py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
                        
                        {/* Column 1: Organization Info */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-100 to-amber-50 border border-amber-400/50 p-1 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="/logo-kanagara.png"
                                        alt="Logo Kabinet Kanagara"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-white text-base">BEM UNWAHA</div>
                                    <div className="text-[11px] text-amber-400 font-semibold">Kabinet Kanagara 2025/2026</div>
                                </div>
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                                Lembaga eksekutif mahasiswa tertinggi di tingkat universitas yang menaungi aspirasi dan inovasi mahasiswa Universitas KH. A. Wahab Hasbullah.
                            </p>
                        </div>

                        {/* Column 2: Layanan */}
                        <div className="space-y-3">
                            <div className="font-bold text-white uppercase text-xs tracking-wider">Layanan Mahasiswa</div>
                            <ul className="space-y-2">
                                <li><a href="#layanan" className="hover:text-white transition">Kotak Aspirasi Mahasiswa</a></li>
                                <li><a href="#pengumuman" className="hover:text-white transition">Kalender Kegiatan Kampus</a></li>
                                <li><a href="#proker" className="hover:text-white transition">Pedoman Administrasi</a></li>
                                <li><a href="https://bit.ly/RgSENA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Ruang Peluang & Beasiswa</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Navigasi */}
                        <div className="space-y-3">
                            <div className="font-bold text-white uppercase text-xs tracking-wider">Tautan Cepat</div>
                            <ul className="space-y-2">
                                <li><a href="#home" className="hover:text-white transition">Beranda</a></li>
                                <li><a href="#profil" className="hover:text-white transition">Profil Kabinet</a></li>
                                <li><a href="#proker" className="hover:text-white transition">Program Kerja</a></li>
                                <li><a href="#galeri" className="hover:text-white transition">Galeri Dokumentasi</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Sekretariat */}
                        <div className="space-y-3">
                            <div className="font-bold text-white uppercase text-xs tracking-wider">Sekretariat BEM</div>
                            <p className="text-slate-400 leading-relaxed">
                                Gedung BEM Universitas KH. A. Wahab Hasbullah (UNWAHA)<br />
                                Jl. Garuda No. 09, Tambakberas, Jombang, Jawa Timur 61471
                            </p>
                            <div className="pt-2 text-slate-300">
                                Email: <span className="text-white">bem@unwaha.ac.id</span>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Copyright */}
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
                        <div>
                            © 2026 BEM Universitas KH. A. Wahab Hasbullah Jombang. All Rights Reserved.
                        </div>
                        <div className="flex items-center gap-4">
                            <span>Inovatif</span>
                            <span>•</span>
                            <span>Aspiratif</span>
                            <span>•</span>
                            <span>Religius</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top Floating Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Kembali ke atas"
                className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
                <ArrowUpCircle className="w-5 h-5" />
            </button>

            {/* Poster Lightbox Modal */}
            {posterModalOpen && (
                <div 
                    className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300 animate-fadeIn"
                    onClick={() => setPosterModalOpen(false)}
                >
                    <div 
                        className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
                            <div className="flex items-center gap-2">
                                <span className="bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                                    Poster Resmi
                                </span>
                                <span className="text-xs font-bold text-slate-200 truncate">
                                    Mahasiswa Baru UNWAHA 2026
                                </span>
                            </div>
                            <button
                                onClick={() => setPosterModalOpen(false)}
                                className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
                                aria-label="Tutup modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Body Image */}
                        <div className="overflow-y-auto p-4 flex justify-center bg-slate-950">
                            <img
                                src="/welcoming-maba-2026.png"
                                alt="Poster Mahasiswa Baru UNWAHA 2026"
                                className="w-full max-h-[72vh] object-contain rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Modal Footer Actions */}
                        <div className="px-5 py-3 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 text-xs">
                            <div className="text-[11px] text-slate-400">
                                © 2026 BEM Universitas KH. A. Wahab Hasbullah
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    href="/welcoming-maba-2026.png"
                                    download="Poster-Maba-UNWAHA-2026.png"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-1.5 transition"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Unduh Poster</span>
                                </a>
                                <button
                                    onClick={() => setPosterModalOpen(false)}
                                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
