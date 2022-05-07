import type { NextPage } from 'next'
import Head from 'next/head'

import MainLayout from '../components/layouts/MainLayout'
import Section from '../components/section/Section'
import SectionHeader from '../components/section/SectionHeader'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Axel Taylor</title>
        <meta
          name="description"
          content="Software engineer. iOS. Android. Web. Realidad Virtual. Realidad Aumentada. Innovación."
        />
      </Head>
      <Section>
        <SectionHeader>Últimas entradas</SectionHeader>
      </Section>

      <p className="text-xl font-bold">👷 En construcción...</p>
      <p>
        Contacto vía twitter{' '}
        <a href="https://twitter.com/taylordotcat">@taylordotcat</a>
      </p>
    </MainLayout>
  )
}

export default HomePage
