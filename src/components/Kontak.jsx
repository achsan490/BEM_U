import { siteConfig, socialMediaLinks } from '../data/bemData'

export default function Kontak() {
    return (
        <section id="kontak" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                        
                        <div className="lg:col-span-6 space-y-4">
                            <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider">
                                Terhubung Bersama Kami
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                                Kanal Resmi Informasi & Publikasi
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Dapatkan update agenda kampus, rilis pengumuman resmi, dan konten kreatif kemahasiswaan melalui akun media sosial resmi BEM UNWAHA.
                            </p>
                        </div>

                        <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {socialMediaLinks.map((soc, i) => {
                                const Icon = soc.icon
                                return (
                                    <a
                                        key={i}
                                        href={soc.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 bg-slate-800/90 rounded-2xl border border-slate-700 text-center flex flex-col items-center justify-center transition-all group ${soc.color}`}
                                    >
                                        <Icon className="w-6 h-6 mb-2 text-white group-hover:scale-110 transition-transform" />
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
    )
}
