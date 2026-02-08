"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import lobby from "../public/lobby.jpg" 

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={ref} className="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden">
      {/* Background Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
          <Image
            src={lobby}
            alt="Luxury Gym Interior"
            fill
            className="object-cover opacity-40 grayscale filter"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-white/60 dark:bg-black/40" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-32 text-center sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="mb-4 inline-block rounded-full border border-foreground/10 bg-background/50 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-primary backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            Premium Personal Training & Pilates
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl font-bold uppercase leading-tight tracking-tighter text-foreground dark:text-white sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Ξεπερασε <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            Τα ορια Σου
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl dark:text-neutral-300"
        >
          Ζήσε μια εμπειρία fitness υψηλών προδιαγραφών. Έμπειρη καθοδήγηση, κορυφαίος εξοπλισμός και μια κοινότητα αφιερωμένη στην εξέλιξή σου.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="https://essentialfitnessskg.setmore.com/book" target="_blank">
             <Button variant="glow" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
              Ξεκίνα Τώρα
            </Button>
          </Link>
          <Link href="#classes">
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-foreground/10 bg-background/50 text-foreground hover:bg-background/80 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/10 w-full sm:w-auto">
              Δες τα Προγράμματα
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground dark:text-neutral-300">SCROLL</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
