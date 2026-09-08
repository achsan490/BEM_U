import { useState } from 'react'
import { GraduationCap, Compass, MessageCircle, ChevronRight } from 'lucide-react'
import { siteConfig } from '../data/bemData'

export default function Navbar({ scrolled, onOpenAspirasi }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { href: '#home', label: 'Beranda' },
        { 
            href: '#maba', 
            label: 'Maba 2026', 
            badge: 'Baru', 
            isHighlight: true,
            icon: GraduationCap 
        },
        { href: '#layanan', label: 'Layanan Mahasiswa' },
        { href: '#pengumuman', label: 'Dies Natalis & Agenda' },
        { href: '#proker', label: 'Program Kerja' },
        { href: '#profil', label: 'Profil & Visi Misi' },
        { href: '#galeri', label: 'Galeri' },
        { href: '#kontak', label: 'Kontak' },
    ]

    return (
        <header className={`sticky top-0 z-40 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2.5' 
                : 'bg-white border-b border-slate-100 py-3.5'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    
                    {/* Brand Logo & Name (Bunga Matahari murni tanpa lingkaran) */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                            <img
                                src={siteConfig.logo}
                                alt={`Logo ${siteConfig.cabinet} ${siteConfig.name}`}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div>
                            <div className="font-black text-base sm:text-lg text-slate-900 leading-tight group-hover:text-blue-600 transition">
                                {siteConfig.name}
                            </div>
                            <div className="text-[11px] text-amber-600 font-bold tracking-tight">
                                {siteConfig.cabinet}
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-1 font-semibold text-xs text-slate-600">
                        {navLinks.map((link) => {
                            const Icon = link.icon
                            if (link.isHighlight) {
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="px-3 py-1.5 rounded-xl text-blue-700 bg-blue-50/90 font-bold hover:bg-blue-100 transition flex items-center gap-1.5 border border-blue-200/80 shadow-2xs"
                                    >
                                        {Icon && <Icon className="w-3.5 h-3.5 text-blue-600" />}
                                        <span>{link.label}</span>
                                        {link.badge && (
                                            <span className="bg-blue-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">
                                                {link.badge}
                                            </span>
                                        )}
                                    </a>
                                )
                            }
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-3 py-1.5 rounded-xl hover:text-blue-600 hover:bg-slate-50 transition"
                                >
                                    {link.label}
                                </a>
                            )
                        })}
                    </nav>

                    {/* Action CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-2.5">
                        <button
                            onClick={onOpenAspirasi}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
                        >
                            <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
                            <span>Kotak Aspirasi</span>
                        </button>
                        <a
                            href="#layanan"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow transition"
                        >
                            <Compass className="w-3.5 h-3.5" />
                            <span>Portal Layanan</span>
                        </a>
                    </div>

                    {/* Animated Hamburger Button Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 flex flex-col items-center justify-center gap-1.5 p-2 transition-all relative focus:outline-none"
                        aria-label="Toggle Navigation Menu"
                    >
                        <span 
                            className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ease-in-out ${
                                mobileMenuOpen ? 'rotate-45 translate-y-2 bg-blue-600' : ''
                            }`} 
                        />
                        <span 
                            className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-200 ease-in-out ${
                                mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                            }`} 
                        />
                        <span 
                            className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ease-in-out ${
                                mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-blue-600' : ''
                            }`} 
                        />
                    </button>
                </div>

                {/* Animated Mobile Dropdown Menu Drawer */}
                {mobileMenuOpen && (
                    <div className="lg:hidden pt-4 pb-4 border-t border-slate-100 mt-3 animate-mobile-menu">
                        <div className="bg-slate-50/90 backdrop-blur-md rounded-2xl p-3 border border-slate-200 shadow-lg space-y-1">
                            {navLinks.map((item, idx) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{ animationDelay: `${idx * 35}ms` }}
                                    className={`animate-menu-item px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                                        item.isHighlight 
                                            ? 'bg-blue-600 text-white shadow-xs' 
                                            : 'text-slate-700 hover:text-blue-600 hover:bg-white active:scale-98'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span>{item.label}</span>
                                        {item.badge && !item.isHighlight && (
                                            <span className="bg-blue-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                    <ChevronRight className={`w-4 h-4 ${item.isHighlight ? 'text-white/80' : 'text-slate-400'}`} />
                                </a>
                            ))}
                            
                            <div className="pt-3 mt-2 border-t border-slate-200 grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false)
                                        onOpenAspirasi()
                                    }}
                                    className="w-full text-center py-2.5 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl font-bold text-xs transition shadow-2xs active:scale-95"
                                >
                                    Kotak Aspirasi
                                </button>
                                <a
                                    href={`https://wa.me/${siteConfig.contactWa}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center py-2.5 px-3 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-700 transition shadow-2xs active:scale-95 flex items-center justify-center gap-1.5"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
