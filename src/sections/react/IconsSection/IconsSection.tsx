import * as Icons from '@buscacode/icons'
import IconCard from './IconCard'

export default function IconsSection() {
  return (
    <div className="grid grid-cols-[auto] gap-x-4 gap-y-2">
      {Object.entries(Icons).map(([name, Icon]) => {
        return <IconCard key={name} name={name} Icon={Icon} />
      })}
    </div>
  )
}
