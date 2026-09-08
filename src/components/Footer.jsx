import { siteConfig } from '../data/bemData'

export default function Footer({ onOpenAspirasi }) {
    return (
        <footer className="bg-slate-900 text-slate-400 text-xs py-14 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
                    
                    {/* Column 1: Organization Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                <img
                                    src={siteConfig.logo}
                                    alt={`Logo ${siteConfig.cabinet}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="font-black text-white text-base leading-tight">{siteConfig.name}</div>
                                <div className="text-[11px] text-amber-400 font-bold">{siteConfig.cabinet} {siteConfig.period}</div>
                            </div>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                            Lembaga eksekutif mahasiswa tertinggi di tingkat universitas yang menaungi aspirasi, advokasi, dan inovasi karya mahasiswa Universitas KH. A. Wahab Hasbullah Jombang.
                        </p>
                    </div>

                    {/* Column 2: Layanan */}
                    <div className="space-y-3">
                        <div className="font-bold text-white uppercase text-xs tracking-wider">Layanan Mahasiswa</div>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={onOpenAspirasi} className="hover:text-white transition text-left">
                                    Kotak Aspirasi Mahasiswa
                                </button>
                            </li>
                            <li><a href="#pengumuman" className="hover:text-white transition">Kalender Agenda Kampus</a></li>
                            <li><a href="#proker" className="hover:text-white transition">Pedoman Administrasi</a></li>
                            <li><a href="https://unwaha.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Ruang Info & Beasiswa</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Navigasi */}
                    <div className="space-y-3">
                        <div className="font-bold text-white uppercase text-xs tracking-wider">Tautan Cepat</div>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-white transition">Beranda</a></li>
                            <li><a href="#maba" className="hover:text-white transition">Maba 2026 #Garuda13</a></li>
                            <li><a href="#pengumuman" className="hover:text-white transition">Dies Natalis & Agenda</a></li>
                            <li><a href="#profil" className="hover:text-white transition">Profil & Filosofi Lambang</a></li>
                            <li><a href="#galeri" className="hover:text-white transition">Galeri Dokumentasi</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Sekretariat */}
                    <div className="space-y-3">
                        <div className="font-bold text-white uppercase text-xs tracking-wider">Sekretariat BEM</div>
                        <p className="text-slate-400 leading-relaxed">
                            {siteConfig.address}
                        </p>
                        <div className="pt-2 text-slate-300">
                            Email: <span className="text-white">{siteConfig.email}</span>
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
    )
}
