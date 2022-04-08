import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Mukhtar Garba, a MERN Stack Developer.

So far, the time metrics in my programming journey have amounted to 2200 hours, averaging working 3 hours per day for two consecutive years on a streak.

I'm currently working on a SaaS Project named VIMAP. VIMAP is an acronym for Vehicles Information Management Application. MERN Stack is the technology used for building this software application. The software's function is to collect, store, and get information about vehicles in organizations. And to also enable printing vehicle’s info in pdf, word, etc. When my knowledge grew stronger I will want to add features like GPS, maps, and other vehicle's inventory and tracking features. So far I was able to build a tested development backend using Node.js, and I'm presently ongoing with some React courses to help me build an amazing interacting UI. VIMAP is a startup project. Wish us Goodluck. Thank you.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}