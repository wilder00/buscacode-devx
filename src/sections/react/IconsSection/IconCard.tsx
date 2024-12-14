import { cn } from 'packages/tailwind-utils/src'
import { useState } from 'react'

interface IconCardProps {
  Icon: React.ElementType
  name: string
}
export default function IconCard({ Icon, name }: Readonly<IconCardProps>) {
  const [hasCopied, setHasCopied] = useState(false)
  const handleCopyOnClick = () => {
    navigator?.clipboard.writeText(name)
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 350)
  }
  const handleCopyOnDobleClick = () => {
    navigator?.clipboard.writeText(`import { ${name} } from '@buscacode/icons'`)
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 350)
  }

  return (
    <button
      className={cn(
        'w-fit cursor-pointer rounded-md border-2 border-bc-accent-500 bg-transparent p-4 transition-[border-color,transform] duration-[300ms]',
        'enabled:active:scale-95',
        {
          'border-bc-success': hasCopied
        }
      )}
      onClick={handleCopyOnClick}
      onDoubleClick={handleCopyOnDobleClick}
    >
      <div className="flex items-center justify-center">
        <Icon />
      </div>
      <div className="select-none text-center">{name}</div>
    </button>
  )
}
