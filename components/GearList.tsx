import Tools from 'components/Tools'
import type { Tool } from 'lib/sanity.queries'

export interface GearListProps {
  tools: Tool[]
}

export default function GearList(props: GearListProps) {
  const { tools } = props

  return (
    <div className="border-blue-500 border-2 rounded-xl p-4 m-4">
      <h2 className="text-3xl font-bold">Gear List</h2>
      {tools.length > 0 && <Tools tools={tools} />}
    </div>
  )
}
