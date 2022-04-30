import type { NextPage } from 'next'
import Head from 'next/head'

import MainLayout from '../components/layouts/MainLayout'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Axel Taylor</title>
        <meta
          name="description"
          content="Software engineer. iOS. Android. Web. Realidad Virtual. Realidad Aumentada. Innovación."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-xl font-bold">👷 En construcción...</p>
      <p>
        Contacto vía twitter{' '}
        <a href="https://twitter.com/taylordotcat">@taylordotcat</a>
      </p>
    </MainLayout>
  )
}

export default HomePage
