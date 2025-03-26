"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

// Product data for artificial plants and trees
const artificialProducts = [
  {
    id: 1,
    name: "Yapay Zeytin Ağacı",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    price: "₺1.299,99",
    shortFeatures: "Gerçekçi görünüm, UV korumalı, iç ve dış mekan kullanımı",
    fullFeatures: `
      <ul>
        <li><strong>Yükseklik:</strong> 180 cm</li>
        <li><strong>Malzeme:</strong> Yüksek kalite ipek kumaş ve doğal ahşap gövde</li>
        <li><strong>UV Koruma:</strong> Güneş ışınlarına dayanıklı</li>
        <li><strong>Kullanım:</strong> İç ve dış mekan</li>
        <li><strong>Bakım:</strong> Toz alınması yeterli, su gerekmez</li>
        <li><strong>Saksı:</strong> Dekoratif saksı dahil (renk seçenekli)</li>
        <li><strong>Garanti:</strong> 1 yıl</li>
      </ul>
    `,
  },
  {
    id: 2,
    name: "Yapay Palmiye",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    price: "₺899,99",
    shortFeatures: "Tropikal görünüm, dayanıklı yaprak, dekoratif saksı",
    fullFeatures: `
      <ul>
        <li><strong>Yükseklik:</strong> 150 cm</li>
        <li><strong>Malzeme:</strong> Yüksek kalite ipek kumaş ve plastik gövde</li>
        <li><strong>Yaprak Sayısı:</strong> 12 büyük yaprak</li>
        <li><strong>Kullanım:</strong> İç mekan</li>
        <li><strong>Bakım:</strong> Nemli bezle silme</li>
        <li><strong>Saksı:</strong> Siyah plastik saksı dahil</li>
      </ul>
    `,
  },
  {
    id: 3,
    name: "Yapay Gül Aranjmanı",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    price: "₺249,99",
    shortFeatures: "Gerçek görünümlü, solmaz, dekoratif vazo dahil",
    fullFeatures: `
      <ul>
        <li><strong>İçerik:</strong> 15 adet gerçek dokulu yapay gül</li>
        <li><strong>Malzeme:</strong> Yüksek kalite ipek kumaş ve plastik</li>
        <li><strong>Renk:</strong> Kırmızı, pembe veya beyaz (seçiminize göre)</li>
        <li><strong>Vazo:</strong> Cam vazo dahil</li>
        <li><strong>Kullanım:</strong> İç mekan</li>
      </ul>
    `,
  },
  {
    id: 4,
    name: "Yapay Bambu Ağacı",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    price: "₺749,99",
    shortFeatures: "Doğal görünüm, uzun ömürlü, dekoratif saksı",
    fullFeatures: `
      <ul>
        <li><strong>Yükseklik:</strong> 160 cm</li>
        <li><strong>Malzeme:</strong> Doğal bambu gövde, yapay yapraklar</li>
        <li><strong>Kullanım:</strong> İç mekan</li>
        <li><strong>Bakım:</strong> Toz alınması yeterli</li>
        <li><strong>Saksı:</strong> Seramik saksı dahil</li>
      </ul>
    `,
  },
]

export default function Products() {
  const [activeTab, setActiveTab] = useState("yapay-cicek")
  const [fullscreenProduct, setFullscreenProduct] = useState<null | {
    id: number
    images: string[]
    currentIndex: number
  }>(null)

  // Refs for touch/drag functionality
  const sliderRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const fullscreenSliderRef = useRef<HTMLDivElement | null>(null)

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  // Initialize sliders with touch/drag functionality
  useEffect(() => {
    const initializeSlider = (slider: HTMLDivElement, dotsContainer: HTMLDivElement | null) => {
      if (!slider || !dotsContainer) return

      const dots = Array.from(dotsContainer.querySelectorAll(".slider-dot"))
      let currentIndex = 0
      let startX: number | null = null
      let currentTranslate = 0
      let isDragging = false

      // Update slider position
      const updateSliderPosition = (index: number) => {
        currentIndex = index
        slider.style.transform = `translateX(-${currentIndex * 100}%)`

        // Update active dot
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === currentIndex)
        })
      }

      // Touch events
      slider.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX
        isDragging = true
        slider.style.transition = "none"
      })

      slider.addEventListener("touchmove", (e) => {
        if (!isDragging || startX === null) return

        const currentX = e.touches[0].clientX
        const diff = startX - currentX
        const slideWidth = slider.clientWidth

        currentTranslate = -currentIndex * 100 - (diff / slideWidth) * 100

        // Limit translation to prevent overscrolling
        if (currentTranslate <= 0 && currentTranslate >= -((dots.length - 1) * 100)) {
          slider.style.transform = `translateX(${currentTranslate}%)`
        }
      })

      slider.addEventListener("touchend", (e) => {
        if (!isDragging || startX === null) return

        isDragging = false
        slider.style.transition = "transform 0.3s ease"

        const currentX = e.changedTouches[0].clientX
        const diff = startX - currentX
        const threshold = slider.clientWidth * 0.2 // 20% of slider width

        if (Math.abs(diff) > threshold) {
          if (diff > 0 && currentIndex < dots.length - 1) {
            // Swipe left - next slide
            updateSliderPosition(currentIndex + 1)
          } else if (diff < 0 && currentIndex > 0) {
            // Swipe right - previous slide
            updateSliderPosition(currentIndex - 1)
          } else {
            // Return to current slide if at the edges
            updateSliderPosition(currentIndex)
          }
        } else {
          // Return to current slide if swipe wasn't strong enough
          updateSliderPosition(currentIndex)
        }

        startX = null
      })

      // Mouse events for desktop
      slider.addEventListener("mousedown", (e) => {
        e.preventDefault()
        startX = e.clientX
        isDragging = true
        slider.style.transition = "none"
        slider.style.cursor = "grabbing"
      })

      slider.addEventListener("mousemove", (e) => {
        if (!isDragging || startX === null) return

        const currentX = e.clientX
        const diff = startX - currentX
        const slideWidth = slider.clientWidth

        currentTranslate = -currentIndex * 100 - (diff / slideWidth) * 100

        // Limit translation to prevent overscrolling
        if (currentTranslate <= 0 && currentTranslate >= -((dots.length - 1) * 100)) {
          slider.style.transform = `translateX(${currentTranslate}%)`
        }
      })

      slider.addEventListener("mouseup", (e) => {
        if (!isDragging || startX === null) return

        isDragging = false
        slider.style.transition = "transform 0.3s ease"
        slider.style.cursor = "grab"

        const currentX = e.clientX
        const diff = startX - currentX
        const threshold = slider.clientWidth * 0.2 // 20% of slider width

        if (Math.abs(diff) > threshold) {
          if (diff > 0 && currentIndex < dots.length - 1) {
            // Swipe left - next slide
            updateSliderPosition(currentIndex + 1)
          } else if (diff < 0 && currentIndex > 0) {
            // Swipe right - previous slide
            updateSliderPosition(currentIndex - 1)
          } else {
            // Return to current slide if at the edges
            updateSliderPosition(currentIndex)
          }
        } else {
          // Return to current slide if swipe wasn't strong enough
          updateSliderPosition(currentIndex)
        }

        startX = null
      })

      slider.addEventListener("mouseleave", () => {
        if (isDragging) {
          isDragging = false
          slider.style.transition = "transform 0.3s ease"
          slider.style.cursor = "grab"
          updateSliderPosition(currentIndex)
          startX = null
        }
      })

      // Dot navigation
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          updateSliderPosition(index)
        })
      })

      // Initialize slider
      updateSliderPosition(0)
    }

    // Initialize all product sliders
    artificialProducts.forEach((product) => {
      const slider = sliderRefs.current[`slider-${product.id}`]
      const dotsContainer = document.querySelector(`#dots-${product.id}`)
      if (slider && dotsContainer) {
        initializeSlider(slider, dotsContainer as HTMLDivElement)
      }
    })

    // Initialize fullscreen slider if active
    if (fullscreenProduct && fullscreenSliderRef.current) {
      const fullscreenDotsContainer = document.getElementById("fullscreen-dots")
      initializeSlider(fullscreenSliderRef.current, fullscreenDotsContainer)
    }
  }, [activeTab, fullscreenProduct])

  // Open fullscreen view
  const openFullscreen = (product: (typeof artificialProducts)[0], initialIndex = 0) => {
    setFullscreenProduct({
      id: product.id,
      images: product.images,
      currentIndex: initialIndex,
    })
    document.body.classList.add("no-scroll")
  }

  // Close fullscreen view
  const closeFullscreen = () => {
    setFullscreenProduct(null)
    document.body.classList.remove("no-scroll")
  }

  // Navigate fullscreen images
  const navigateFullscreen = (direction: "prev" | "next") => {
    if (!fullscreenProduct) return

    let newIndex = fullscreenProduct.currentIndex

    if (direction === "prev") {
      newIndex = (newIndex - 1 + fullscreenProduct.images.length) % fullscreenProduct.images.length
    } else {
      newIndex = (newIndex + 1) % fullscreenProduct.images.length
    }

    setFullscreenProduct({
      ...fullscreenProduct,
      currentIndex: newIndex,
    })
  }

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
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#343d33]"
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

      {/* Header */}
      <header className="bg-[#343d33] text-white py-10 md:py-16 text-center mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Peyzaj ve Çiçek Kataloğu</h1>
          <p className="text-white/90 max-w-2xl mx-auto">Doğal güzelliği evinize taşıyın</p>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <button
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${activeTab === "yapay-cicek" ? "bg-[#343d33] text-white" : "bg-[#475f45] text-white hover:bg-[#3a4d39]"}`}
            onClick={() => handleTabChange("yapay-cicek")}
          >
            <i className="fas fa-tree"></i>
            <span>Yapay Çiçek ve Ağaç</span>
          </button>
          <button
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${activeTab === "canli-cicek" ? "bg-[#343d33] text-white" : "bg-[#475f45] text-white hover:bg-[#3a4d39]"}`}
            onClick={() => handleTabChange("canli-cicek")}
          >
            <i className="fas fa-leaf"></i>
            <span>Canlı Çiçek</span>
          </button>
          <button
            className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${activeTab === "saksi" ? "bg-[#343d33] text-white" : "bg-[#475f45] text-white hover:bg-[#3a4d39]"}`}
            onClick={() => handleTabChange("saksi")}
          >
            <i className="fas fa-seedling"></i>
            <span>Saksı</span>
          </button>
        </div>

        {/* Shipping Info */}
        <div className="bg-[#343d33] text-white p-4 rounded-lg flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <i className="fas fa-truck"></i>
            <span>İstanbul içi aynı gün kargo</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-credit-card"></i>
            <span>Kapıda ödeme (Kredi kartı geçerli)</span>
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${activeTab === "yapay-cicek" ? "block" : "hidden"}`}
        >
          {artificialProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-[#475f45] text-white p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-center">{product.name}</h2>
              </div>

              <div className="p-4 flex-grow flex flex-col">
                {/* Product Slider */}
                <div className="relative h-[280px] w-full mb-4 rounded-lg overflow-hidden shadow-sm">
                  <div
                    className="flex h-full transition-transform duration-300 cursor-grab active:cursor-grabbing"
                    ref={(el) => (sliderRefs.current[`slider-${product.id}`] = el)}
                  >
                    {product.images.map((image, index) => (
                      <div key={index} className="flex-none w-full h-full">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${product.name} - Görsel ${index + 1}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Slider Dots */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2" id={`dots-${product.id}`}>
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        className={`slider-dot w-2.5 h-2.5 rounded-full transition-all ${index === 0 ? "bg-white scale-110" : "bg-white/50"}`}
                        data-index={index}
                        aria-label={`Görsel ${index + 1}`}
                      ></button>
                    ))}
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    className="absolute top-3 right-3 w-8 h-8 bg-white/70 rounded-full flex items-center justify-center text-[#343d33] transition-colors hover:bg-white"
                    onClick={() => openFullscreen(product)}
                    aria-label="Tam ekran görüntüle"
                  >
                    <i className="fas fa-expand"></i>
                  </button>
                </div>

                {/* Product Details */}
                <div className="mb-4">
                  <p className="text-xl font-bold text-[#343d33] mb-3">{product.price}</p>

                  <div className="w-full">
                    <div
                      className="max-h-0 overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg"
                      id={`features-${product.id}`}
                      dangerouslySetInnerHTML={{ __html: product.fullFeatures }}
                    ></div>

                    <button
                      className="text-[#475f45] flex items-center gap-1 mt-2 text-sm hover:underline"
                      onClick={() => {
                        const el = document.getElementById(`features-${product.id}`)
                        const btn = document.getElementById(`btn-${product.id}`)
                        if (el && btn) {
                          if (el.classList.contains("max-h-0")) {
                            el.classList.remove("max-h-0")
                            el.classList.add("max-h-[500px]", "p-4", "border", "border-gray-200", "my-2")
                            btn.innerHTML = '<i class="fas fa-minus-circle"></i> Daha az göster'
                          } else {
                            el.classList.add("max-h-0")
                            el.classList.remove("max-h-[500px]", "p-4", "border", "border-gray-200", "my-2")
                            btn.innerHTML = '<i class="fas fa-plus-circle"></i> Daha fazla özellik göster'
                          }
                        }
                      }}
                      id={`btn-${product.id}`}
                    >
                      <i className="fas fa-plus-circle"></i> Daha fazla özellik göster
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Footer */}
              <div className="p-4 border-t border-gray-200">
                <a
                  href={`https://wa.me/905001234567?text=${encodeURIComponent(`${product.name} ürünü hakkında bilgi almak istiyorum. Fiyat: ${product.price}`)}`}
                  className="w-full py-3 bg-[#343d33] text-white rounded-md flex items-center justify-center gap-3 transition-colors hover:bg-[#475f45] relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  <span>Bilgi almak için tıklayın</span>
                  <i className="fas fa-arrow-right absolute right-4 animate-[bounceRight_1.5s_infinite]"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other tabs content (empty for now) */}
        <div className={`${activeTab === "canli-cicek" ? "block" : "hidden"}`}>
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-[#343d33] mb-4">Canlı Çiçek Koleksiyonumuz</h2>
            <p className="text-gray-600 mb-4">Bu kategorideki ürünlerimiz yakında eklenecektir.</p>
            <button
              className="px-6 py-3 bg-[#343d33] text-white rounded-lg hover:bg-[#475f45] transition-colors"
              onClick={() => handleTabChange("yapay-cicek")}
            >
              Yapay Çiçek Koleksiyonumuza Göz Atın
            </button>
          </div>
        </div>

        <div className={`${activeTab === "saksi" ? "block" : "hidden"}`}>
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-[#343d33] mb-4">Saksı Koleksiyonumuz</h2>
            <p className="text-gray-600 mb-4">Bu kategorideki ürünlerimiz yakında eklenecektir.</p>
            <button
              className="px-6 py-3 bg-[#343d33] text-white rounded-lg hover:bg-[#475f45] transition-colors"
              onClick={() => handleTabChange("yapay-cicek")}
            >
              Yapay Çiçek Koleksiyonumuza Göz Atın
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenProduct && (
        <div className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center">
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            {/* Fullscreen Slider */}
            <div
              className="w-full h-[80vh] flex transition-transform duration-300"
              ref={fullscreenSliderRef}
              style={{ transform: `translateX(-${fullscreenProduct.currentIndex * 100}%)` }}
            >
              {fullscreenProduct.images.map((image, index) => (
                <div key={index} className="flex-none w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Fullscreen image ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-5">
              <button
                className="w-10 h-10 rounded-full bg-white/30 text-white flex items-center justify-center hover:bg-white/50 transition-colors"
                onClick={() => navigateFullscreen("prev")}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="flex gap-2.5" id="fullscreen-dots">
                {fullscreenProduct.images.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot w-3 h-3 rounded-full transition-all ${index === fullscreenProduct.currentIndex ? "bg-white scale-110" : "bg-white/50"}`}
                    data-index={index}
                  ></button>
                ))}
              </div>

              <button
                className="w-10 h-10 rounded-full bg-white/30 text-white flex items-center justify-center hover:bg-white/50 transition-colors"
                onClick={() => navigateFullscreen("next")}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-5 right-5 bg-white/20 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-white/30 transition-colors"
              onClick={closeFullscreen}
            >
              <i className="fas fa-times"></i> Kapat
            </button>
          </div>
        </div>
      )}

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

