import { Terminal } from 'lucide-react'
import { ReactNode } from 'react'

type SectionHeaderProps = {
  children: ReactNode
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <div className="flex flex-row items-center space-x-2 w-full">
      <Terminal
        size={18}
        strokeWidth="3"
        className="text-not-blue text-opacity-50"
      />
      <h1 className="text-not-blue font-black text-xl lowercase">{children}</h1>
    </div>
  )
}

export default SectionHeader
