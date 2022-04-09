import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am <strong>Mukhtar</strong>, a MERN Stack Developer.<br></br> So far, the time metrics in my programming journey has amounted to 2200 hours plus, averaging working 3 hours per day for two consecutive years on a streak.<br></br>
          I'm currently working on a SaaS Project named VIMAP.<br></br> VIMAP is an acronym for Vehicles Information Management Application. MERN Stack is the technology used for the building the software application.<br></br> The software's function is to collect, store, and get information about vehicles in organizations. And to also enable printing vehicle's info in pdf, word, etc.<br></br> When my knowledge grew stronger I will want to add more features like GPS tracking, maps, and vehicle's inventory features.<br></br>
          So far I was able to build a tested development backend using Node.js, and I'm presently ongoing with some React courses to help me build an amazing interacting UI.<br></br> VIMAP is a startup project, so wish us Goodluck, please.<br></br> Thank you.
        </p>
    
        <a href="https://twitter.com/garba_tanimu" class="twitter-follow-button" data-size="large" data-show-screen-name="false" data-show-count="false">@garba_tanimu</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

      </section>
    </Layout>
  )
}