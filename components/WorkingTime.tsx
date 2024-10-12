'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { isOpenNow } from '@/lib/utils'
import { Clock } from 'lucide-react'
import Day from './Day'
import { useEffect, useState } from 'react'

const WorkingTime = () => {
  const [openNow, setOpenNow] = useState(isOpenNow())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpenNow(isOpenNow())
    }, 60000) // Check every minute

    return () => clearInterval(intervalId) // Cleanup interval on component unmount
  }, [])

  return (
    <section className='px-[5%] py-16 md:py-24 lg:py-28'>
      <p className='text-md mb-2 font-bold tracking-widest md:text-xl'>
        Ωράριο
      </p>
      <Accordion
        type='single'
        collapsible
        className='px-2 ring-1 ring-foreground'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <Clock />
            {openNow ? 'Ανοιχτά' : 'Κλειστά'}
          </AccordionTrigger>
          <AccordionContent>
            <Day day='Δευτέρα' hour='08:00 - 22:30' />
            <Day day='Τρίτη' hour='08:00 - 22:30' />
            <Day day='Τετάρτη' hour='08:00 - 22:30' />
            <Day day='Πέμπτη' hour='08:00 - 22:30' />
            <Day day='Παρασκευή' hour='08:00 - 22:30' />
            <Day day='Σάββατο' hour='10:00 - 17:00' />
            <Day day='Κυριακή' hour='Κλειστά' />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default WorkingTime
