// components/ClassCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

type ClassCardProps = {
  title: string
  description: string
  items: {
    title: string
    points: string[]
  }[]
}

const ClassCard: React.FC<ClassCardProps> = ({ title, description, items }) => {
  return (
    <Card className='h-full bg-background ring-1 ring-foreground'>
      <CardHeader>
        <CardTitle className='flex items-center justify-center pb-4 text-2xl md:text-3xl'>
          {title}
        </CardTitle>
        <CardDescription className='flex w-full items-center justify-center'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type='single' collapsible>
          {items.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent className='space-y-4'>
                <h3 className='text-lg font-semibold md:text-xl'>
                  {item.title}
                </h3>
                <ul>
                  {item.points.map((point, pointIndex) => (
                    <li className='grid grid-cols-[25px_1fr]' key={pointIndex}>
                      <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                      <p className='md:text-xl'>{point}</p>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default ClassCard
