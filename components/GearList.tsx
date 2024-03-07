import Tools from 'components/Tools'
import type { Tool } from 'lib/sanity.queries'

export interface GearListProps {
  tools: Tool[]
}

export default function GearList(props: GearListProps) {
  const { tools } = props

  return (
    <div>
      {tools.length > 0 && <Tools tools={tools} />}
    </div>
  )
}
