import Footer from '../footer/Footer'
import Header from '../header/Header'
import Section from '../section/Section'

type MainLayoutProps = {
  children: React.ReactNode | React.ReactNode[]
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Section>
        <Header />
      </Section>

      {children}
      <Section>
        <Footer />
      </Section>
    </>
  )
}

export default MainLayout
