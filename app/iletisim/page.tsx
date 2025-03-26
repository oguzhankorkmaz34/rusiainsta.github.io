"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Burada gerçek bir e-posta gönderme işlemi yapılacak
      // Örnek olarak bir simülasyon yapıyoruz
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Başarılı olduğunu varsayalım
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
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
                    className="text-[#475f45] font-medium py-2 relative transition-colors hover:text-[#343d33] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#343d33]"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3">İletişim</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya projeleriniz için bizimle iletişime geçin
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-[#343d33] mb-6">Bize Ulaşın</h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-200 text-green-800 rounded-md">
                    <p className="flex items-center">
                      <i className="fas fa-check-circle mr-2"></i>
                      Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-200 text-red-800 rounded-md">
                    <p className="flex items-center">
                      <i className="fas fa-exclamation-circle mr-2"></i>
                      Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Adınız Soyadınız</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Adınız Soyadınız"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta Adresiniz</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-posta Adresiniz"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon Numaranız</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Telefon Numaranız"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Konu</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Konu"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Mesajınız</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mesajınız"
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#343d33] hover:bg-[#475f45] text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i> Gönderiliyor...
                      </span>
                    ) : (
                      <span>Gönder</span>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[#f5f5f5] p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold text-[#343d33] mb-6">İletişim Bilgilerimiz</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#343d33] text-white p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#343d33] mb-1">Adres</h3>
                      <p className="text-gray-600">
                        Sultan Selim Mah. Bülent Sok. No:27B
                        <br />
                        Kağıthane / İstanbul
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#343d33] text-white p-3 rounded-full mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#343d33] mb-1">Telefon</h3>
                      <p className="text-gray-600">
                        <a href="tel:+905001234567" className="hover:text-[#475f45] transition-colors">
                          +90 (500) 123 45 67
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#343d33] text-white p-3 rounded-full mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#343d33] mb-1">E-posta</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@naturecrraft.com" className="hover:text-[#475f45] transition-colors">
                          info@naturecrraft.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#343d33] text-white p-3 rounded-full mr-4">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#343d33] mb-1">Çalışma Saatleri</h3>
                      <p className="text-gray-600">
                        Pazartesi - Cuma: 09:00 - 18:00
                        <br />
                        Cumartesi: 10:00 - 15:00
                        <br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-[#343d33] mb-3">Sosyal Medya</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="w-10 h-10 bg-[#343d33] text-white rounded-full flex items-center justify-center transition-colors hover:bg-[#475f45]"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-10 h-10 bg-[#343d33] text-white rounded-full flex items-center justify-center transition-colors hover:bg-[#475f45]"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      aria-label="Twitter"
                      className="w-10 h-10 bg-[#343d33] text-white rounded-full flex items-center justify-center transition-colors hover:bg-[#475f45]"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      aria-label="WhatsApp"
                      className="w-10 h-10 bg-[#25d366] text-white rounded-full flex items-center justify-center transition-colors hover:bg-[#128c7e]"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#343d33] mb-6">Bize Ulaşın</h2>
            <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.9866330876!2d28.9833!3d41.0766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzM1LjgiTiAyOMKwNTgnNTkuOSJF!5e0!3m2!1str!2str!4v1625123456789!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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

