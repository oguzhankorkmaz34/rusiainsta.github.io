import Link from "next/link"
import Image from "next/image"

// Project data
const projects = [
  {
    id: 1,
    title: "Yeşil Vadi Sitesi Peyzaj Projesi",
    location: "İstanbul, Beykoz",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Yeşil Vadi Sitesi'nin tüm ortak alanlarının peyzaj düzenlemesi ve yapay bitki uygulamaları tarafımızca gerçekleştirilmiştir. Proje kapsamında 25 adet yapay ağaç, 150 metrekare çim alan ve çeşitli dekoratif bitkiler kullanılmıştır.",
  },
  {
    id: 2,
    title: "Mavi Köşk Otel Lobi Düzenlemesi",
    location: "Antalya, Kemer",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Mavi Köşk Otel'in lobi ve resepsiyon alanlarının yapay bitkilerle düzenlenmesi projesi. Tropik temalı tasarımda özel üretim palmiyeler ve egzotik çiçekler kullanılarak otelin konseptine uygun bir atmosfer yaratılmıştır.",
  },
  {
    id: 3,
    title: "Yıldız Plaza İç Mekan Bitkilendirme",
    location: "İstanbul, Maslak",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Yıldız Plaza'nın 15 katlı ofis binasının tüm ortak alanları ve toplantı odalarının yapay bitkilerle düzenlenmesi projesi. Bakım gerektirmeyen, uzun ömürlü ve estetik çözümlerle modern iş ortamına doğal bir dokunuş katılmıştır.",
  },
  {
    id: 4,
    title: "Bahçeşehir Konutları Peyzaj Projesi",
    location: "İstanbul, Bahçeşehir",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Bahçeşehir Konutları'nın 5000 metrekarelik peyzaj alanının düzenlenmesi projesi. Yapay çim, dekoratif ağaçlar ve mevsimlik çiçek aranjmanları ile dört mevsim canlı ve bakım gerektirmeyen bir yaşam alanı oluşturulmuştur.",
  },
  {
    id: 5,
    title: "Deniz Manzara Cafe Teras Düzenlemesi",
    location: "İzmir, Çeşme",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Deniz Manzara Cafe'nin teras alanının yapay bitkiler ve özel tasarım saksılarla düzenlenmesi projesi. Deniz temalı konsepte uygun olarak seçilen bitkiler ve dekoratif elemanlarla mekanın atmosferi güçlendirilmiştir.",
  },
]

export default function Projects() {
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
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#343d33] after:transition-all hover:after:w-full"
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
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#343d33]"
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

      {/* Header */}
      <header className="bg-[#343d33] text-white py-10 md:py-16 text-center mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Projelerimiz</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Profesyonel ekibimizle gerçekleştirdiğimiz özel peyzaj ve yapay bitki projelerimizden bazıları
          </p>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <h2 className="text-2xl font-bold text-[#343d33]">{project.title}</h2>
                  <div className="inline-block bg-[#475f45] text-white px-4 py-1 rounded-full text-sm mb-2">
                    <i className="fas fa-map-marker-alt mr-2"></i> {project.location}
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </div>
                  <a
                    href={`#project-${project.id}`}
                    className="inline-flex items-center text-[#475f45] font-medium hover:text-[#343d33] transition-colors"
                  >
                    <span>Detaylı Bilgi</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f0f0f0] py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#343d33] mb-4">Projeniz İçin Bize Ulaşın</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Ev, ofis, otel veya herhangi bir mekanınız için profesyonel peyzaj ve yapay bitki çözümleri sunuyoruz.
            Hayalinizdeki projeyi birlikte gerçekleştirelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#343d33] px-8 text-base font-medium text-white shadow transition-colors hover:bg-[#475f45]"
            >
              <i className="fas fa-envelope mr-2"></i> İletişime Geçin
            </a>
            <a
              href="https://wa.me/905001234567"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#25d366] px-8 text-base font-medium text-white shadow transition-colors hover:bg-[#128c7e]"
            >
              <i className="fab fa-whatsapp mr-2"></i> WhatsApp
            </a>
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

