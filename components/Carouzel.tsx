'use client'

import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useRef } from 'react'
import img1 from '../public/img1.jpg'
import img3 from '../public/img3.jpg'
import img4 from '../public/img4.jpg'
import img5 from '../public/img5.jpg'
import img6 from '../public/img6.jpg'
import lobby from '../public/lobby.jpg'
import entrance from '../public/entrance.jpg'
import img2 from '../public/img2.jpg'
import Image from 'next/image'
import CTA from './CTA'
import { Button } from './ui/button'
import Link from 'next/link'

const images = [entrance, lobby, img1, img2, img3, img4, img5, img6]

const Carouzel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  return (
    <section className='w-full items-center justify-between md:flex md:pr-12'>
      <div className='flex w-full flex-col  justify-center md:w-1/3 '>
        <p className='hidden pb-5 md:block md:text-3xl'>
          Η αποστολή μας είναι να παρέχουμε ένα μέρος όπου η προπόνηση όλων
          βασίζεται στις Essential ανάγκες.
        </p>
        <Link href='https://essentialfitnessskg.setmore.com/book'>
          <Button className='hidden bg-primary text-primary-foreground hover:bg-primary/90 md:block'>
            Book now
          </Button>
        </Link>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className='flex w-full max-w-md'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className='mx-0 px-0'>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className=''>
                <Image src={image} alt='' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default Carouzel
