import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

type SectionSubHeaderProps = {
  children: ReactNode
}

const SectionSubHeader = ({ children }: SectionSubHeaderProps) => {
  return (
    <div className="flex flex-row items-center space-x-2 w-full">
      <ArrowRight
        size={16}
        strokeWidth="3"
        className="text-not-blue text-opacity-50"
      />
      <h1 className="text-not-blue font-black text-lg lowercase">{children}</h1>
    </div>
  )
}

export default SectionSubHeader
