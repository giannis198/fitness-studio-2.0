import About from '@/components/About'
import Classes from '@/components/Classes'
import WorkingTime from '@/components/WorkingTime'
import { Separator } from '@/components/ui/separator'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import CoreValues from '@/components/CoreValues'
import { Contact14 } from '@/components/Contact14'

const HomePage = () => {
  return (
    <section id="top" className="flex flex-col gap-10 pb-20">
      <Hero />
      
      <div className="container mx-auto space-y-8 px-4 md:px-8">
        <div id="about" className="scroll-mt-32">
          <About />
        </div>

        <div id="gallery" className="scroll-mt-32">
          <Gallery />
        </div>

        <div id="values" className="scroll-mt-32">
          <CoreValues />
        </div>

        <div className="md:hidden">
          <WorkingTime />
        </div>

        {/* <Separator className="opacity-20" /> */}

        <div id="classes" className="scroll-mt-32 space-y-10">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Οι <span className="text-primary">Υπηρεσίες Μας</span>
          </h2>
          <Classes />
        </div>

        <Separator className="opacity-20" />

        <div id="contact" className="scroll-mt-32">
          <Contact14 />
        </div>
      </div>
    </section>
  )
}

export default HomePage
