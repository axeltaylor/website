import { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode | ReactNode[]
}

const Section = ({ children }: SectionProps) => {
  return (
    <div className="Section md:container mx-auto flex w-full my-6 px-6 md:my-8 md:px-8">
      {children}
    </div>
  )
}

export default Section
