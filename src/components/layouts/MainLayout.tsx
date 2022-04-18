import Header from '../header/Header'
import Footer from '../footer/Footer'

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
