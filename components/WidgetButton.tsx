import { LucideIcon } from 'lucide-react'

type Props = {
  text: string
  icon: LucideIcon
  onClick?: () => void
}

function WidgetButton({ icon: Icon, text, onClick }: Props) {
  return (
    <button onClick={onClick} className="h-full w-full cursor-pointer focus:outline-none">
      <div className='flex h-full w-full flex-col items-center justify-center rounded-md border border-input bg-transparent hover:bg-accent hover:text-accent-foreground p-2 transition-colors'>
        <Icon size={32} className='mb-2' />
        <p className='text-xs font-medium text-center'>{text}</p>
      </div>
    </button>
  )
}

export default WidgetButton
