import { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode | ReactNode[]
}

const Section = ({ children }: SectionProps) => {
  return (
    <div className="Section md:container mx-auto flex flex-col w-full my-6 px-6 md:my-8 md:px-8 space-y-2">
      {children}
    </div>
  )
}

export default Section
