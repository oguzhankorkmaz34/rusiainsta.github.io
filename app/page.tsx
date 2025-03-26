import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#343d33] text-white/90 text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-col md:flex-row gap-1">
            <div className="top-bar-contact">
              <a href="mailto:info@naturecrraft.com" className="mr-5 transition-colors hover:text-white">
                <i className="fas fa-envelope mr-1"></i> info@naturecrraft.com
              </a>
              <a href="tel:+905001234567" className="transition-colors hover:text-white">
                <i className="fas fa-phone mr-1"></i> +90 (500) 123 45 67
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/placeholder.svg?height=60&width=200"
                  alt="NatureCraft Logo"
                  width={200}
                  height={60}
                  className="h-[50px] w-auto"
                />
              </Link>
            </div>

            <div className="menu-toggle hidden md:hidden" id="menu-toggle">
              <div className="hamburger">
                <span className="block w-full h-[3px] bg-[#343d33] rounded-sm transition-all"></span>
                <span className="block w-full h-[3px] bg-[#343d33] rounded-sm transition-all"></span>
                <span className="block w-full h-[3px] bg-[#343d33] rounded-sm transition-all"></span>
              </div>
            </div>

            <div className="nav-menu flex items-center">
              <ul className="nav-list flex mr-7">
                <li className="mx-4">
                  <Link
                    href="/"
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#343d33]"
                  >
                    Anasayfa
                  </Link>
                </li>
                <li className="mx-4">
                  <Link
                    href="/urunler"
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#343d33] after:transition-all hover:after:w-full"
                  >
                    Ürünler
                  </Link>
                </li>
                <li className="mx-4">
                  <Link
                    href="/projeler"
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#343d33] after:transition-all hover:after:w-full"
                  >
                    Projeler
                  </Link>
                </li>
                <li className="mx-4">
                  <Link
                    href="/hakkimizda"
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#343d33] after:transition-all hover:after:w-full"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li className="mx-4">
                  <Link
                    href="/iletisim"
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#343d33] after:transition-all hover:after:w-full"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
              <div className="nav-contact">
                <a
                  href="tel:+905001234567"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-[#343d33] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#475f45]"
                >
                  <i className="fas fa-phone mr-2"></i> Bize Ulaşın
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold text-[#343d33] leading-tight">Güzel Bir Macera Sizi Bekliyor</h1>
            <p className="text-gray-600">
              Premium yapay bitkiler ve peyzaj çözümlerimizle yaşam alanınızı dönüştürün. Bakım gerektirmeden doğanın
              güzelliğini iç mekanlara taşıyın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@naturecrraft.com"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#343d33] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#475f45]"
              >
                <i className="fas fa-envelope mr-2"></i> İletişime Geçin
              </a>
              <a
                href="https://wa.me/905001234567"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#25d366] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#128c7e]"
              >
                <i className="fab fa-whatsapp mr-2"></i> WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Güzel yapay bitkiler"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#343d33] text-white mt-12">
        <div className="py-12">
          <div className="container mx-auto px-4 flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8">
              <div className="mb-5">
                <Image
                  src="/placeholder.svg?height=60&width=150"
                  alt="NatureCraft Logo"
                  width={150}
                  height={60}
                  className="max-w-[150px] h-auto"
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                NATURECRRAFT BOTANİK VE PEYZAJ ANONİM ŞİRKETİ SULTAN SELİM MAH. BÜLENT SOK. NO:27B KAĞITHANE - KAĞITHANE
                / İSTANBUL / TÜRKİYE
              </p>
            </div>

            <div className="w-full md:w-1/4 mb-8 flex flex-col">
              <Link href="/" className="text-white/80 mb-4 hover:text-white transition-colors">
                Anasayfa
              </Link>
              <Link href="/urunler" className="text-white/80 mb-4 hover:text-white transition-colors">
                Ürünler
              </Link>
              <Link href="/projeler" className="text-white/80 mb-4 hover:text-white transition-colors">
                Projeler
              </Link>
              <Link href="/hakkimizda" className="text-white/80 mb-4 hover:text-white transition-colors">
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="text-white/80 mb-4 hover:text-white transition-colors">
                İletişim
              </Link>
            </div>

            <div className="w-full md:w-1/4 mb-8">
              <h3 className="text-xl font-semibold mb-5">İletişim</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  aria-label="Email"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/20 py-4 text-center">
          <p className="text-sm text-white/70">© 2025 NatureCraft. Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
    </main>
  )
}

