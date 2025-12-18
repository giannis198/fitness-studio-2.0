import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Widget from '../components/Widget'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import { TextSizeProvider } from '@/components/textSize-provider'
import WidgetCTA from '@/components/WidgetCTA'
import './index.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'Personal Training Θεσσαλονίκη | Personal Trainer | essentialfitness.gr',
  description:
    'Υπηρεσίες Personal training και Πιλάτες Θεσσαλονίκη.Αίθουσα γυμναστικής στο κέντρο της Θεσσαλονίκης | essentialfitness.gr',
  keywords:
    'personal training θεσσαλονικη,personal training θεσσαλονίκη, Fitness Studio Θεσσαλονικη,The Process Personal & Fitness Studio Thesslaoniki,ΔΙΑΤΡΟΦΙΚΗ ΚΑΘΟΔΗΓΗΣΗ,ΔΙΑΤΡΟΦΙΚΗ ΚΑΘΟΔΗΓΗΣΗ Θεσσαλονικη, PERSONAL AND FITNESS STUDIO thessaloniki, Personal Trainer Θεσσαλονίκη,essentialfitness γυμναστηριο, γυμναστηριο κεντρο θεσσαλονικης αιθουσα γυμναστικης κεντρο της θεσσαλονικης, essentialfitness κεντρο θεσσαλονικης, personal trainer κεντρο θεσσαλονικης, αιθουσα γυμναστικης θεσσαλονικη, Συμβουλευτική καθοδήγηση, Private training Thessaloniki,Pilates Thessaloniki,πιλάτες Θεσσαλονικη'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <TextSizeProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            disableTransitionOnChange
            enableSystem
          >
            <div className='flex flex-grow flex-col justify-between'>
              <Navbar />
              <main className='flex-1 overflow-x-hidden'>
                {children}
                <Analytics />
              </main>
              <Widget />
              <WidgetCTA />
              <Footer />
            </div>
          </ThemeProvider>
        </TextSizeProvider>
      </body>
    </html>
  )
}
