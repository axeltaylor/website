import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

type SectionSubHeaderProps = {
  children: ReactNode
  className?: string
}

const SectionSubHeader = ({ children, className }: SectionSubHeaderProps) => {
  return (
    <div
      className={`flex flex-row items-center space-x-2 w-full ${className}`.trim()}>
      <ArrowRight
        size={16}
        strokeWidth="3"
        className="text-not-yellow text-opacity-50"
      />
      <h1 className="text-not-yellow font-black text-lg lowercase">
        {children}
      </h1>
    </div>
  )
}

export default SectionSubHeader
