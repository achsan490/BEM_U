import {
    MessageCircle, Calendar, FileText, GraduationCap, Handshake,
    HelpCircle, Heart, Users, Sparkles, BookOpen, Award, Zap,
    Instagram, Youtube, Music, Mail, MapPin, Phone, Shield, Target,
    Sparkle, CheckCircle, Clock
} from 'lucide-react'

export const siteConfig = {
    name: "BEM UNWAHA",
    fullName: "Badan Eksekutif Mahasiswa Universitas KH. A. Wahab Hasbullah",
    cabinet: "Kabinet Kanagara",
    period: "2025/2026",
    motto: "Inovatif, Aspiratif, dan Religius — Merajut Sinergi, Wujudkan Aksi Nyata",
    logo: "/logo-kanagara.png",
    contactWa: "6289529812893",
    email: "bem@unwaha.ac.id",
    address: "Gedung BEM Universitas KH. A. Wahab Hasbullah (UNWAHA), Jl. Garuda No. 09, Tambakberas, Jombang, Jawa Timur 61471",
}

export const quickStats = [
    { value: '12', label: 'Kementerian Aktif', sub: 'Bidang pengabdian & aksi' },
    { value: '15+', label: 'Program Kerja', sub: 'Inovasi berkelanjutan' },
    { value: '45', label: 'Pengurus BEM', sub: 'Keluarga mahasiswa terpilih' },
    { value: '3.500+', label: 'Mahasiswa UNWAHA', sub: 'Civitas akademika aktif' },
]

export const quickServices = [
    {
        id: 'aspirasi',
        title: 'Kotak Aspirasi Mahasiswa',
        desc: 'Sampaikan kritik, saran, dan aspirasi untuk kemajuan kampus dan pergerakan mahasiswa.',
        icon: MessageCircle,
        badge: 'Advokasi',
        badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
        iconBg: 'bg-blue-600 text-white',
        category: 'advokasi',
        isModal: true,
        link: 'https://wa.me/6289529812893?text=Halo%20BEM%20UNWAHA,%20saya%20ingin%20menyampaikan%20aspirasi:',
        btnText: 'Kirim Aspirasi Online',
    },
    {
        id: 'kalender',
        title: 'Kalender Kegiatan Mahasiswa',
        desc: 'Jadwal terpadu agenda organisasi, dies natalis, perlombaan, dan kegiatan civitas UNWAHA.',
        icon: Calendar,
        badge: 'Agenda',
        badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
        iconBg: 'bg-amber-500 text-white',
        category: 'informasi',
        link: '#pengumuman',
        btnText: 'Lihat Jadwal Agenda',
    },
    {
        id: 'pedoman',
        title: 'Pedoman Administrasi & Surat',
        desc: 'Panduan tata kelola administrasi ormawa, pengajuan surat izin, dan format proposal resmi.',
        icon: FileText,
        badge: 'Kesekretariatan',
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        iconBg: 'bg-emerald-600 text-white',
        category: 'administrasi',
        link: '#proker',
        btnText: 'Akses Panduan Ormawa',
    },
    {
        id: 'peluang',
        title: 'Ruang Peluang & Beasiswa',
        desc: 'Informasi beasiswa, kesempatan magang, kompetisi nasional, dan program pengembangan karier.',
        icon: GraduationCap,
        badge: 'Pengembangan',
        badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
        iconBg: 'bg-purple-600 text-white',
        category: 'akademik',
        link: 'https://unwaha.ac.id',
        btnText: 'Info Beasiswa & Kampus',
    },
    {
        id: 'medpart',
        title: 'Media Partner & Kolaborasi',
        desc: 'Pengajuan kemitraan publikasi, sponsorship acara kampus, dan kolaborasi strategis antar lembaga.',
        icon: Handshake,
        badge: 'Kemitraan',
        badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
        iconBg: 'bg-rose-600 text-white',
        category: 'kemitraan',
        link: 'https://wa.me/6289529812893?text=Halo%20BEM%20UNWAHA,%20kami%20tertarik%20mengajukan%20Media%20Partner%20dan%20Kolaborasi:',
        btnText: 'Ajukan Kerjasama',
    },
    {
        id: 'faq',
        title: 'Pusat Tanya Jawab (FAQ)',
        desc: 'Jawaban atas pertanyaan umum seputar BEM UNWAHA, kegiatan kemahasiswaan, dan fasilitas kampus.',
        icon: HelpCircle,
        badge: 'Informasi',
        badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
        iconBg: 'bg-cyan-600 text-white',
        category: 'informasi',
        link: '#profil',
        btnText: 'Buka Info & FAQ',
    }
]

export const prokerList = [
    {
        id: 1,
        title: "Gema Sholawat & Doa Bersama",
        desc: "Program keagamaan rutin untuk mempererat ukhuwah islamiyah dan membina karakter spiritual mahasiswa di lingkungan kampus berbasis Ahlussunnah wal Jama'ah.",
        category: "Keagamaan",
        kementerian: "Kemen. Agama & Moralitas",
        icon: Heart,
        iconColor: "text-blue-600 bg-blue-50 border border-blue-200",
        badgeColor: "bg-blue-50 text-blue-700",
        target: "Seluruh Civitas Akademika",
        impact: "Penguatan nilai spiritual & silaturahmi kampus"
    },
    {
        id: 2,
        title: "LDKM (Latihan Dasar Kepemimpinan)",
        desc: "Kaderisasi kepemimpinan mahasiswa berjenjang untuk melahirkan pemimpin muda yang kritis, berintegritas, visioner, dan berakhlakul karimah.",
        category: "Kaderisasi",
        kementerian: "Kemen. PSDM",
        icon: Users,
        iconColor: "text-purple-600 bg-purple-50 border border-purple-200",
        badgeColor: "bg-purple-50 text-purple-700",
        target: "Mahasiswa Tingkat 1 & 2",
        impact: "Pembentukan karakter leadership & problem solving"
    },
    {
        id: 3,
        title: "BEM Mengabdi & Desa Binaan",
        desc: "Aksi nyata pemberdayaan masyarakat pedesaan melalui edukasi sosial, bakti kesehatan, serta pendampingan ekonomi berbasis potensi lokal.",
        category: "Pengabdian",
        kementerian: "Kemen. Sosial & Pengmas",
        icon: Sparkles,
        iconColor: "text-emerald-600 bg-emerald-50 border border-emerald-200",
        badgeColor: "bg-emerald-50 text-emerald-700",
        target: "Masyarakat Desa Binaan Jombang",
        impact: "Solusi nyata masalah sosial & pendidikan desa"
    },
    {
        id: 4,
        title: "Kajian Ilmiah & Mimbar Aspirasi",
        desc: "Forum diskusi kritis dan dialektika mahasiswa dalam merespons isu kebangsaan, kebijakan pendidikan tinggi, dan advokasi kesejahteraan mahasiswa.",
        category: "Akademik",
        kementerian: "Kemen. Kastrat & Advokasi",
        icon: BookOpen,
        iconColor: "text-amber-600 bg-amber-50 border border-amber-200",
        badgeColor: "bg-amber-50 text-amber-700",
        target: "Mahasiswa & Pihak Kebijakan Kampus",
        impact: "Penyaluran aspirasi solutif & nalar kritis"
    },
    {
        id: 5,
        title: "Pekan Kreativitas & Kompetisi Kampus",
        desc: "Ajang unjuk bakat di bidang seni, olahraga, dan karya inovasi ilmiah untuk meningkatkan prestasi mahasiswa di tingkat regional dan nasional.",
        category: "Minat & Bakat",
        kementerian: "Kemen. Seni & Olahraga",
        icon: Award,
        iconColor: "text-rose-600 bg-rose-50 border border-rose-200",
        badgeColor: "bg-rose-50 text-rose-700",
        target: "Perwakilan HIMA & UKM Se-UNWAHA",
        impact: "Peningkatan perolehan medali & prestasi mahasiswa"
    },
    {
        id: 6,
        title: "Digital Empowerment & Tech Bootcamp",
        desc: "Pelatihan keterampilan digital, bootcamp teknologi, UI/UX, dan literasi media guna mempersiapkan mahasiswa menghadapi dunia kerja modern.",
        category: "Teknologi",
        kementerian: "Kemen. Kominfo & Media",
        icon: Zap,
        iconColor: "text-cyan-600 bg-cyan-50 border border-cyan-200",
        badgeColor: "bg-cyan-50 text-cyan-700",
        target: "Mahasiswa Umum Seluruh Fakultas",
        impact: "Kesiapan kerja digital & portofolio profesional"
    }
]

export const pengurusData = [
    {
        nama: "M. Ridho Danu Muslikhan, S.Pd.",
        jabatan: "Presiden Mahasiswa",
        periode: "2025/2026",
        prodi: "Fakultas Ilmu Pendidikan",
        initial: "RD",
        color: "bg-blue-600 text-white shadow-blue-500/20",
        quote: "Menjadi pemimpin yang melayani, menginspirasi, dan memperjuangkan kemajuan bersama."
    },
    {
        nama: "M. Fais Febriansyah, S.E.",
        jabatan: "Wakil Presiden Mahasiswa",
        periode: "2025/2026",
        prodi: "Fakultas Ekonomi",
        initial: "MF",
        color: "bg-purple-600 text-white shadow-purple-500/20",
        quote: "Sinergi yang kokoh adalah kunci terwujudnya perubahan yang berdaya tahan."
    },
    {
        nama: "Nailul Muna",
        jabatan: "Sekretaris Jenderal",
        periode: "2025/2026",
        prodi: "Fakultas Teknologi Informasi",
        initial: "NM",
        color: "bg-emerald-600 text-white shadow-emerald-500/20",
        quote: "Tata kelola organisasi yang tertib melahirkan pergerakan yang cepat dan terukur."
    },
    {
        nama: "Rizka Amalia",
        jabatan: "Bendahara Umum",
        periode: "2025/2026",
        prodi: "Fakultas Ekonomi",
        initial: "RA",
        color: "bg-amber-600 text-white shadow-amber-500/20",
        quote: "Transparansi dan akuntabilitas keuangan untuk mendukung setiap karya mahasiswa."
    },
]

export const galleryImages = [
    { src: '/gambar2.JPG', title: 'Gema Sholawat Akbar', category: 'Keagamaan', desc: 'Rangkaian doa bersama dan pembacaan sholawat akbar civitas akademika UNWAHA.' },
    { src: '/gambar6.JPG', title: 'LDKM Mahasiswa UNWAHA', category: 'Kepemimpinan', desc: 'Pelatihan dasar kepemimpinan mahasiswa untuk membentuk kader berintegritas.' },
    { src: '/gambar3.JPG', title: 'BEM Mengabdi di Desa Binaan', category: 'Sosial', desc: 'Pengabdian masyarakat dan bakti sosial di desa binaan Kabupaten Jombang.' },
    { src: '/gambar7.JPG', title: 'Seminar & Workshop Mahasiswa', category: 'Akademik', desc: 'Pelaksanaan kegiatan pengembangan skill & wawasan karier mahasiswa.' },
    { src: '/gambar4.JPG', title: 'Diskusi & Kajian Publik', category: 'Advokasi', desc: 'Forum dialektika mahasiswa membahas isu strategis kebangsaan dan kampus.' },
    { src: '/gambar5.JPG', title: 'Festival & Kompetisi Kreatif', category: 'Minat & Bakat', desc: 'Pentas kreativitas, seni, dan pameran inovasi karya mahasiswa UNWAHA.' },
]

export const philosophyPillars = [
    {
        icon: "🌻",
        title: "Bunga Matahari (Fokus Utama)",
        desc: "Secara alami selalu tumbuh menghadap cahaya. Melambangkan optimisme, harapan, dan visi yang selalu berorientasi ke depan dalam mencari pencerahan dan kebenaran."
    },
    {
        icon: "🌀",
        title: "Pola Geometris Spiral (Tengah)",
        desc: "Mengadopsi pola matematis deret Fibonacci. Melambangkan keteraturan, sinergi, dan sistem yang terstruktur dengan fondasi logika dan kolaborasi solid."
    },
    {
        icon: "👑",
        title: "Warna Emas Metalik (Palet Emas)",
        desc: "Simbol universal kejayaan, kebijaksanaan, dan kualitas tertinggi. Selaras dengan konsep Kanagara (mahkota/kemuliaan) untuk mencapai standar karya terbaik."
    },
    {
        icon: "⚜️",
        title: "Ukiran Detail Kelopak (Tekstur)",
        desc: "Ukiran rumit di bagian dalam kelopak yang rapi dari luar merepresentasikan dedikasi pada detail dan proses, mengubah kerumitan menjadi karya fungsional."
    }
]

export const missionList = [
    { title: 'Inovasi Program Kerja', desc: 'Menyelenggarakan kegiatan kemahasiswaan yang kreatif, terukur, dan berdampak nyata bagi almamater.' },
    { title: 'Responsivitas Aspirasi', desc: 'Menjadi jembatan komunikasi yang aktif, solutif, dan terbuka antara mahasiswa dengan rektorat.' },
    { title: 'Penguatan Nilai Religius', desc: 'Menanamkan nilai-nilai keislaman dan akhlakul karimah dalam seluruh denyut pergerakan organisasi.' },
    { title: 'Kolaborasi dan Sinergi', desc: 'Membangun sinergisitas harmonis dengan UKM, HIMA prodi, serta pihak eksternal kampus.' },
]

export const socialMediaLinks = [
    { name: 'Instagram', handle: '@bemunwaha', icon: Instagram, href: 'https://www.instagram.com/bemunwaha', color: 'hover:bg-pink-600', badge: 'Informasi Harian' },
    { name: 'YouTube', handle: 'BEM UNWAHA', icon: Youtube, href: 'https://youtube.com/@bemunwaha', color: 'hover:bg-red-600', badge: 'Video & Dokumentasi' },
    { name: 'TikTok', handle: '@official_bemunwaha', icon: Music, href: 'https://www.tiktok.com/@official_bemunwaha', color: 'hover:bg-slate-700', badge: 'Konten Kreatif' },
    { name: 'WhatsApp', handle: 'Helpdesk BEM', icon: MessageCircle, href: 'https://wa.me/6289529812893', color: 'hover:bg-emerald-600', badge: 'Respon Cepat' },
]
