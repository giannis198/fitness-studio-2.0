import type { Metadata } from "next"
import { Syne, Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { TextSizeProvider } from "@/components/textSize-provider"
import WidgetCTA from "@/components/WidgetCTA"
import Widget from "@/components/AccessibilityWidget"
import "./index.css"
import { Analytics } from "@vercel/analytics/next"



const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Essential Fitness | Redefine Your Limits",
  description: "Award-winning personal training and pilates studio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className={`${manrope.className} flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <TextSizeProvider>
              <div className="flex flex-grow flex-col justify-between">
                <Navbar />
                <main className="flex-1 overflow-x-hidden">
                  {children}
                  <Analytics />
                </main>
                <Widget />
              
                <WidgetCTA />
                <Footer />
              </div>
          </TextSizeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
