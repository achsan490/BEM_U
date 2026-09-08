import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MabaWelcome from './components/MabaWelcome'
import Layanan from './components/Layanan'
import Pengumuman from './components/Pengumuman'
import Proker from './components/Proker'
import Profil from './components/Profil'
import Galeri from './components/Galeri'
import Kontak from './components/Kontak'
import Footer from './components/Footer'
import AspirasiModal from './components/AspirasiModal'
import ImageLightboxModal from './components/ImageLightboxModal'
import BackToTop from './components/BackToTop'

export default function App() {
    const [scrolled, setScrolled] = useState(false)
    const [showBackToTop, setShowBackToTop] = useState(false)

    // Modals State
    const [aspirasiModalOpen, setAspirasiModalOpen] = useState(false)
    const [lightboxImage, setLightboxImage] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY
            setScrolled(y > 20)
            setShowBackToTop(y > 450)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
            
            {/* Header & Sticky Navbar */}
            <Navbar
                scrolled={scrolled}
                onOpenAspirasi={() => setAspirasiModalOpen(true)}
            />

            {/* Main Content Area */}
            <main className="flex-grow">
                {/* 1. Hero Section */}
                <Hero 
                    onOpenAspirasi={() => setAspirasiModalOpen(true)} 
                />

                {/* 2. Welcoming Mahasiswa Baru 2026 (#maba) */}
                <MabaWelcome 
                    onOpenPosterModal={(imgData) => setLightboxImage(imgData)} 
                />

                {/* 3. Pusat Layanan Terpadu (#layanan) */}
                <Layanan 
                    onOpenAspirasi={() => setAspirasiModalOpen(true)} 
                />

                {/* 4. Papan Pengumuman: Dies Natalis Ke-13 UNWAHA & Peringatan Resmi (#pengumuman) */}
                <Pengumuman 
                    onOpenImageModal={(imgData) => setLightboxImage(imgData)}
                />

                {/* 5. Program Kerja Unggulan (#proker) */}
                <Proker />

                {/* 6. Profil, Visi-Misi & Filosofi Kanagara (#profil) */}
                <Profil />

                {/* 7. Galeri Kegiatan Mahasiswa (#galeri) */}
                <Galeri 
                    onOpenImageModal={(imgData) => setLightboxImage(imgData)} 
                />

                {/* 8. Kanal Media Sosial & Kontak (#kontak) */}
                <Kontak />
            </main>

            {/* Official Footer */}
            <Footer 
                onOpenAspirasi={() => setAspirasiModalOpen(true)} 
            />

            {/* Floating Back to Top Button */}
            <BackToTop show={showBackToTop} />

            {/* Interactive Modals */}
            <AspirasiModal
                isOpen={aspirasiModalOpen}
                onClose={() => setAspirasiModalOpen(false)}
            />

            <ImageLightboxModal
                isOpen={!!lightboxImage}
                imageSrc={lightboxImage?.src}
                title={lightboxImage?.title}
                subtitle={lightboxImage?.subtitle}
                onClose={() => setLightboxImage(null)}
            />

        </div>
    )
}
