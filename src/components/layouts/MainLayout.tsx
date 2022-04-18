import Footer from '../footer/Footer'
import Header from '../header/Header'

type MainLayoutProps = {
  children: React.ReactNode | React.ReactNode[]
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
