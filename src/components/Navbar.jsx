import { useState } from 'react'
import { Menu, X, GraduationCap, Compass, MessageCircle } from 'lucide-react'
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
        { href: '#pengumuman', label: 'Pengumuman & Agenda' },
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
                    
                    {/* Brand Logo & Name (Bunga Matahari murni tanpa lingkaran kuning) */}
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

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden pt-4 pb-3 border-t border-slate-100 mt-3 space-y-1 animate-fade-in">
                        {navLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                                    item.isHighlight 
                                        ? 'bg-blue-50 text-blue-700 font-bold flex items-center justify-between' 
                                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                }`}
                            >
                                <span>{item.label}</span>
                                {item.badge && (
                                    <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                                        {item.badge}
                                    </span>
                                )}
                            </a>
                        ))}
                        
                        <div className="pt-3 grid grid-cols-2 gap-2">
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false)
                                    onOpenAspirasi()
                                }}
                                className="w-full text-center py-2.5 px-3 bg-slate-100 text-slate-800 rounded-xl font-bold text-xs hover:bg-slate-200 transition"
                            >
                                Kotak Aspirasi
                            </button>
                            <a
                                href={`https://wa.me/${siteConfig.contactWa}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-center py-2.5 px-3 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-700 transition"
                            >
                                WhatsApp BEM
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
