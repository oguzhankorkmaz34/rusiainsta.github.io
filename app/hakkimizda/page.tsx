import Link from "next/link"
import Image from "next/image"

export default function AboutUs() {
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
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#343d33] after:transition-all hover:after:w-full"
                  >
                    Projeler
                  </Link>
                </li>
                <li className="mx-4">
                  <Link
                    href="/hakkimizda"
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#343d33]"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Hakkımızda</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Doğanın güzelliğini yapay bitkilerle yaşam alanlarınıza taşıyoruz
          </p>
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="w-full lg:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="NatureCraft Ekibi"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#343d33]">Hikayemiz</h2>
              <p className="text-gray-700 leading-relaxed">
                NatureCraft, 2020 yılında doğanın güzelliğini bakım derdi olmadan yaşam alanlarına taşıma vizyonuyla
                kurulmuştur. Kurulduğumuz günden bu yana, en kaliteli malzemelerle üretilen yapay bitkiler ve
                profesyonel peyzaj çözümleri sunarak müşterilerimizin beklentilerini aşmayı hedefliyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ekibimiz, peyzaj mimarları, tasarımcılar ve bitki uzmanlarından oluşan deneyimli profesyonellerden
                oluşmaktadır. Her projede, müşterilerimizin ihtiyaçlarını anlamak, mekanın potansiyelini keşfetmek ve
                estetik ile işlevselliği bir araya getiren çözümler sunmak için titizlikle çalışıyoruz.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-[#475f45] mb-3">Değerlerimiz</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#475f45] mt-1 mr-3"></i>
                    <span>Kaliteden ödün vermeden müşteri memnuniyetini ön planda tutmak</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#475f45] mt-1 mr-3"></i>
                    <span>Sürdürülebilir ve çevre dostu çözümler sunmak</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#475f45] mt-1 mr-3"></i>
                    <span>Yenilikçi tasarım anlayışıyla fark yaratmak</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-[#475f45] mt-1 mr-3"></i>
                    <span>Profesyonel ve güvenilir hizmet sunmak</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="my-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#343d33] text-center mb-12">Gelişim Sürecimiz</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#475f45]/20"></div>

              {/* Timeline items */}
              <div className="space-y-16">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#475f45] border-4 border-white"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-[#343d33]">2020</h3>
                      <p className="text-gray-700">NatureCraft'ın kuruluşu ve ilk showroom'umuzun açılışı</p>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="2020 Kuruluş"
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#475f45] border-4 border-white"></div>
                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="w-full md:w-1/2 md:pl-12 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-[#343d33]">2021</h3>
                      <p className="text-gray-700">
                        İlk büyük ölçekli otel projemizin tamamlanması ve ekibimizin genişlemesi
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="2021 Büyüme"
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#475f45] border-4 border-white"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-[#343d33]">2022</h3>
                      <p className="text-gray-700">Üretim tesisimizin açılışı ve ürün yelpazemizin genişlemesi</p>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="2022 Üretim"
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#475f45] border-4 border-white"></div>
                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="w-full md:w-1/2 md:pl-12 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-[#343d33]">2023</h3>
                      <p className="text-gray-700">
                        İlk yurt dışı projemizin gerçekleştirilmesi ve ihracata başlamamız
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="2023 İhracat"
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#475f45] border-4 border-white"></div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-[#343d33]">2024</h3>
                      <p className="text-gray-700">
                        İkinci showroom'umuzun açılışı ve online satış platformumuzun hayata geçirilmesi
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-12">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="2024 Genişleme"
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="my-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#343d33] text-center mb-12">Ekibimiz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Ahmet Yılmaz"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#343d33]">Ahmet Yılmaz</h3>
                <p className="text-[#475f45] font-medium">Kurucu & CEO</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Ayşe Kaya"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#343d33]">Ayşe Kaya</h3>
                <p className="text-[#475f45] font-medium">Peyzaj Mimarı</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Mehmet Demir"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#343d33]">Mehmet Demir</h3>
                <p className="text-[#475f45] font-medium">Tasarım Direktörü</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Zeynep Şahin"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#343d33]">Zeynep Şahin</h3>
                <p className="text-[#475f45] font-medium">Proje Yöneticisi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f0f0f0] py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#343d33] mb-4">Bizimle Çalışmak İster misiniz?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Profesyonel ekibimizle hayalinizdeki projeyi gerçekleştirmek için hazırız. Yapay bitkiler ve peyzaj
            çözümleri konusunda uzman kadromuzla tanışın.
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

