"use client"

import { motion } from "framer-motion"
import { classesData } from "@/constants"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Classes = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {classesData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={cn(
            "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20",
            index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"
          )}
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/40" />
          
          <h3 className="mb-2 font-display text-2xl font-bold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground/90 leading-relaxed md:mb-6">
            {item.description}
          </p>

          <Accordion type="single" collapsible className="w-full">
            {item.items.map((subItem, subIndex) => (
              <AccordionItem key={subIndex} value={`item-${index}-${subIndex}`} className="border-white/10">
                <AccordionTrigger className="py-2 text-sm font-medium hover:text-primary hover:no-underline md:py-4">
                  {subItem.title}
                </AccordionTrigger>
                <AccordionContent className="pb-2 md:pb-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {subItem.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      ))}
    </section>
  )
}

export default Classes
