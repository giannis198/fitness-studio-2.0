import { ChevronRight, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import facebook from '../public/facebook.svg'
import instagram from '../public/instagram.svg'
import map from '../public/map.png'

export const Contact14 = () => {
  return (
    <section id='relume' className='px-[5%] py-8 md:py-12'>
      <div className='rb-12 md:mb-18 mb-12 lg:mb-20'>
        <p className='mb-3 text-center font-semibold md:mb-4'>
          &quot;Δυνατό Σώμα, Ήρεμο Μυαλό - Με Personal Training - Pilates&quot;
        </p>
        <h2 className='rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl'>
          Επικοινώνησε Μαζί μας
        </h2>
        <p className='md:text-md'>
          Είσαι έτοιμος να ξεκινήσεις το ταξίδι σου προς ένα πιο υγιή, δυνατό
          και ευλύγιστο σώμα; Επικοινώνησε μαζί μας τηλεφωνικά ή online για να
          κλείσεις την πρώτη σου συνεδρία. Η ομάδα μας είναι εδώ για να
          απαντήσει σε όλες τις απορίες σου και να σε βοηθήσει να επιλέξεις το
          κατάλληλο πρόγραμμα για σένα!
        </p>
      </div>
      <div className='grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16'>
        <div className='grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10'>
          <div>
            <div className='mb-3 md:mb-4'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                className='size-8'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z'></path>
              </svg>
            </div>

            <h3 className='text-md mb-2 font-bold leading-[1.4] md:text-xl'>
              Email
            </h3>

            <Link href='mailto:+302315154414' className='underline'>
              essentialfitness00@hotmail.com
            </Link>
          </div>
          <div>
            <div className='mb-3 md:mb-4'>
              <Phone size={24} className='hidden md:block' />
              <Phone size={14} className='md:hidden' />
            </div>
            <h3 className='text-md mb-2 font-bold leading-[1.4] md:text-xl'>
              Τηλέφωνο
            </h3>

            <Link href='tel:+302315154414' className='underline'>
              +30 2315154414
            </Link>
          </div>
          <div>
            <div className='mb-3 md:mb-4'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                className='size-8'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z'></path>
                <path d='M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z'></path>
              </svg>
            </div>
            <h3 className='text-md mb-2 font-bold leading-[1.4] md:text-xl'>
              Τοποθεσία
            </h3>
            <div className='mt-5 flex gap-1 md:mt-6'>
              <Link
                className='flex items-center gap-1 space-y-1'
                href='https://www.google.com/maps/dir/40.584272,22.9695529/Egnatia+95,+Thessaloniki+546+35/@40.6088135,22.9189326,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a839009f78b46b:0x9f96a321f4e8d8a7!2m2!1d22.9490971!2d40.6335823?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
              >
                <p>Εγνατίας 95, Θεσσαλονίκη</p>
                <ChevronRight />
              </Link>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Link href='https://www.facebook.com/profile.php?id=61550994177401'>
              <Image
                src={facebook}
                alt='facebook'
                className='h-6 w-6 md:block md:h-10 md:w-10'
              />
            </Link>

            <Link href='https://www.instagram.com/essential_fitness__?igsh=cm5meTdscnZpZHhk'>
              <Image
                src={instagram}
                alt='instagram'
                className='h-6 w-6 md:block md:h-10 md:w-10'
              />
            </Link>
          </div>
        </div>
        <div className='hidden lg:block'>
          <Link
            href='https://www.google.com/maps/dir/40.584272,22.9695529/Egnatia+95,+Thessaloniki+546+35/@40.6088135,22.9189326,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a839009f78b46b:0x9f96a321f4e8d8a7!2m2!1d22.9490971!2d40.6335823?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'
            className='justify-self-end md:w-[321.6px] lg:w-auto'
          >
            <Image src={map} alt='map' />
          </Link>
        </div>
      </div>
    </section>
  )
}
