import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NatureCraft - Yapay Bitkiler ve Peyzaj Çözümleri",
  description: "Premium yapay bitkiler ve profesyonel peyzaj çözümleri",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script id="back-to-top">
          {`
            document.addEventListener("DOMContentLoaded", () => {
              // Back to Top Button
              const backToTopButton = document.createElement("button");
              backToTopButton.id = "back-to-top";
              backToTopButton.className = "fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#343d33] text-white border-none shadow-lg cursor-pointer flex justify-center items-center text-xl z-50 opacity-0 invisible transform translate-y-5 transition-all";
              backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
              backToTopButton.setAttribute("aria-label", "Yukarı Çık");
              document.body.appendChild(backToTopButton);
              
              // Show/hide button based on scroll position
              window.addEventListener("scroll", () => {
                const scrollPosition = window.pageYOffset;
                
                if (scrollPosition > 300) {
                  backToTopButton.classList.add("opacity-100", "visible");
                  backToTopButton.classList.remove("opacity-0", "invisible", "translate-y-5");
                } else {
                  backToTopButton.classList.remove("opacity-100", "visible");
                  backToTopButton.classList.add("opacity-0", "invisible", "translate-y-5");
                }
              });
              
              // Scroll to top when button is clicked
              backToTopButton.addEventListener("click", () => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'