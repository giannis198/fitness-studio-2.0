import Link from 'next/link'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <div>
      <Link href='https://essentialfitnessskg.setmore.com/book'>
        <Button className='w-full bg-primary text-primary-foreground hover:bg-primary/90'>
          Book Now
        </Button>
      </Link>
    </div>
  )
}

export default CTA
