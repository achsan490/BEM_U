import { useState } from 'react'
import { X, Send, MessageCircle, Building2, User, HelpCircle, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '../data/bemData'

export default function AspirasiModal({ isOpen, onClose }) {
    const [nama, setNama] = useState('')
    const [fakultas, setFakultas] = useState('Fakultas Teknologi Informasi')
    const [kategori, setKategori] = useState('Advokasi & Kebijakan Kampus')
    const [pesan, setPesan] = useState('')
    const [isAnonymous, setIsAnonymous] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!pesan.trim()) return

        const senderName = isAnonymous ? 'Mahasiswa Anonim' : (nama.trim() || 'Mahasiswa UNWAHA')
        
        const formattedMessage = [
            `*KOTAK ASPIRASI MAHASISWA BEM UNWAHA*`,
            `*Kabinet Kanagara 2025/2026*`,
            ``,
            `*Pengirim:* ${senderName}`,
            `*Fakultas/Asal:* ${fakultas}`,
            `*Kategori Isu:* ${kategori}`,
            ``,
            `*Isi Aspirasi / Masukan:*`,
            `"${pesan.trim()}"`,
            ``,
            `------------------------------------`,
            `_Dikirim melalui Portal Resmi BEM UNWAHA_`
        ].join('\n')

        const encodedMessage = encodeURIComponent(formattedMessage)
        const waUrl = `https://wa.me/${siteConfig.contactWa}?text=${encodedMessage}`
        
        setIsSubmitted(true)
        setTimeout(() => {
            window.open(waUrl, '_blank')
            setIsSubmitted(false)
            onClose()
        }, 600)
    }

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
            <div 
                className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-scale-up max-h-[92vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-base font-extrabold leading-tight">Kotak Aspirasi Mahasiswa</h3>
                            <p className="text-[11px] text-blue-100">Sampaikan aspirasi langsung ke Helpdesk BEM UNWAHA</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition"
                        aria-label="Tutup modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-4 text-xs sm:text-sm">
                    {/* Mode Anonim Toggle */}
                    <div className="p-3 bg-blue-50/80 border border-blue-200/80 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <HelpCircle className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-slate-800 text-xs">Kirim sebagai Anonim (Rahasiakan Identitas)</span>
                        </div>
                        <input
                            type="checkbox"
                            checked={isAnonymous}
                            onChange={(e) => setIsAnonymous(e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                        />
                    </div>

                    {!isAnonymous && (
                        <div>
                            <label className="block font-bold text-slate-700 mb-1">
                                Nama Mahasiswa / Angkatan (Opsional)
                            </label>
                            <div className="relative">
                                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                                <input
                                    type="text"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    placeholder="Contoh: Ahmad Fauzi (Angkatan 2024)"
                                    className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-blue-500 transition"
                                />
                            </div>
                        </div>
                    )}

                    {/* Fakultas */}
                    <div>
                        <label className="block font-bold text-slate-700 mb-1">
                            Fakultas / Asal Lembaga
                        </label>
                        <div className="relative">
                            <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                            <select
                                value={fakultas}
                                onChange={(e) => setFakultas(e.target.value)}
                                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-blue-500 transition cursor-pointer"
                            >
                                <option>Fakultas Teknologi Informasi</option>
                                <option>Fakultas Ilmu Pendidikan</option>
                                <option>Fakultas Ekonomi</option>
                                <option>Fakultas Agama Islam</option>
                                <option>Fakultas Pertanian</option>
                                <option>UKM / Ormawa Kampus</option>
                                <option>Umum / Masyarakat Kampus</option>
                            </select>
                        </div>
                    </div>

                    {/* Kategori Isu */}
                    <div>
                        <label className="block font-bold text-slate-700 mb-1">
                            Kategori Isu Aspirasi
                        </label>
                        <select
                            value={kategori}
                            onChange={(e) => setKategori(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-blue-500 transition cursor-pointer"
                        >
                            <option>Advokasi & Kebijakan Kampus</option>
                            <option>Fasilitas & Sarana Prasarana</option>
                            <option>Akademik & Perkuliahan</option>
                            <option>Kegiatan Kemahasiswaan & Ormawa</option>
                            <option>Kritik & Saran untuk BEM UNWAHA</option>
                            <option>Kemitraan / Kerjasama Eksternal</option>
                        </select>
                    </div>

                    {/* Pesan Aspirasi */}
                    <div>
                        <label className="block font-bold text-slate-700 mb-1">
                            Isi Aspirasi, Saran, atau Masukan <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            required
                            rows={4}
                            value={pesan}
                            onChange={(e) => setPesan(e.target.value)}
                            placeholder="Tuliskan aspirasi, kronologi, masukan, atau usulan solusi secara jelas..."
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-blue-500 transition resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitted || !pesan.trim()}
                            className="w-full py-3 px-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            {isSubmitted ? (
                                <>
                                    <CheckCircle2 className="w-4 h-4 animate-bounce" />
                                    <span>Membuka WhatsApp...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    <span>Kirim Aspirasi ke WhatsApp BEM</span>
                                </>
                            )}
                        </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center">
                        Setiap aspirasi yang masuk akan ditinjau secara berkala oleh Kementerian Kastrat & Advokasi BEM UNWAHA.
                    </p>
                </form>
            </div>
        </div>
    )
}
