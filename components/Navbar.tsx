"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollToPlugin, useGSAP)

const navLinks = [
  { name: "Αρχική", href: "#top" },
  { name: "Σχετικά", href: "#about" },
  { name: "Ο Χώρος Μας", href: "#gallery" },
  { name: "Αξίες", href: "#values" },
  { name: "Υπηρεσίες", href: "#classes" },
  { name: "Επικοινωνία", href: "#contact" },
]



const Navbar = () => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous! && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setScrolled(latest > 50)
  })

  // useGSAP hook is strictly used for GSAP-related effects/context if needed, 
  // but for simple event handlers we can just use the registered plugin directly.
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === "#top") {
       gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.inOut" })
    } else {
       const element = document.querySelector(href) 
       if (element) {
          gsap.to(window, { duration: 1, scrollTo: element, ease: "power2.inOut" })
       }
    }
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden && !mobileMenuOpen ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-colors duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm dark:shadow-none dark:border-white/5" : "bg-transparent"
      )}
    >
      <nav className="flex w-full max-w-7xl items-center justify-between">
        <Link href="#top" className="z-50 flex items-center gap-2" onClick={(e) => handleScroll(e, "#top")}>
          <span className="font-display text-xl md:text-3xl font-bold tracking-tighter text-foreground">
            ESSENTIAL FITNESS<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="https://essentialfitnessskg.setmore.com/book" target="_blank">
            <Button variant="default" className="rounded-full px-6 font-bold">
              Κλείσε Ραντεβού
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="z-50 block md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background transition-transform duration-300 ease-in-out md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-display text-4xl font-bold uppercase tracking-tight hover:text-primary"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="https://essentialfitnessskg.setmore.com/book" target="_blank" onClick={() => setMobileMenuOpen(false)}>
             <Button size="lg" className="mt-4 rounded-full px-8 text-lg font-bold">
              Κλείσε Ραντεβού
            </Button>
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar
