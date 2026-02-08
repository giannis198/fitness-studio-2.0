"use client"

import Link from "next/link"
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-white/5 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold tracking-tighter text-foreground">
                ESSENTIAL FITNESS<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground/80 max-w-xs leading-relaxed">
              Επαναπροσδιορίζουμε το fitness μέσα από εξατομικευμένη προπόνηση και premium εμπειρίες pilates στην καρδιά της Θεσσαλονίκης.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="https://www.facebook.com/profile.php?id=61550994177401" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/essential_fitness__?igsh=cm5meTdscnZpZHhk" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Εξερεύνησε</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-primary transition-colors">Σχετικά</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Ο Χώρος Μας</Link></li>
              <li><Link href="#values" className="hover:text-primary transition-colors">Αξίες</Link></li>
              <li><Link href="#classes" className="hover:text-primary transition-colors">Υπηρεσίες</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Επικοινωνία</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Ωράριο</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Δευ - Παρ:</span>
                <span className="text-foreground">08:00 - 22:30</span>
              </li>
              <li className="flex justify-between">
                <span>Σάββατο:</span>
                <span className="text-foreground">10:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Κυριακή:</span>
                <span className="text-primary font-medium">Κλειστά</span>
              </li>
            </ul>
          </div>          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Επικοινωνία</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-primary" />
                <span>Εγνατίας 95, Θεσσαλονίκη</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>essentialfitness00@hotmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+30 2315154414</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Essential Fitness. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground opacity-50">
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
