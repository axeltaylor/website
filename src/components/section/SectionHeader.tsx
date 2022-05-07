import { Terminal } from 'lucide-react'

type SectionHeaderProps = {
  children: string
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <Terminal size={18} strokeWidth="3" />
      <h2 className="font-black text-xl lowercase">{children}</h2>
    </div>
  )
}

export default SectionHeader
