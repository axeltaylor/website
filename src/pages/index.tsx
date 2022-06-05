import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { ContentRenderer } from '../components/content-renderer/content-renderer'
import MainLayout from '../components/layouts/MainLayout'
import Section from '../components/section/Section'
import SectionHeader from '../components/section/SectionHeader'
import ContactSection from '../components/sections/contact-section'
import { contentService } from '../services/content-service/content.service'

const HomePage = ({
  introBlocks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        <SectionHeader>Intro</SectionHeader>
        <ContentRenderer blocks={introBlocks} />
      </Section>
      <Section>
        <SectionHeader>Últimas entradas</SectionHeader>
      </Section>
      <Section>
        <SectionHeader>contacto</SectionHeader>
        <ContactSection />
      </Section>
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const introBlocks = await contentService.getIntroBlocks()
  return {
    props: {
      introBlocks,
    },
    revalidate: 10
  }
}

export default HomePage
