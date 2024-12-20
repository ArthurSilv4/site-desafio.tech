import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "@/components/landingPage/layout/footer"
import Header from "@/components/landingPage/layout/header"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import AppSideBar from "@/components/dashboard/sideBar/page"
import { AppProvider } from "@/contexts/page"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Desafioo.Tech",
  description: "Desafios de programação para desenvolvedores",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          <AppSideBar />
          <main className="m-auto h-full w-full overflow-hidden">
            <Header />

            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </main>
        </AppProvider>
      </body>
    </html>
  )
}
