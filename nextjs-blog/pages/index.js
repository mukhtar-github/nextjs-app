import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <p>
            Hi! I am <strong>Mukhtar</strong>, a Mechanical Engineer transforming into a Software Developer. I'm a Fleet Manager at the Transport Section of the Federal High Court of Nigeria. I started learning programming in October 2018, and so far, the time metrics in my programming journey have amounted to about 2500 hours on counting.<br />
            I'm currently working on a SaaS Project named <strong>VIMAP</strong> which is an acronym for <i>Vehicles Information Management Application</i>. The idea of this project came as a result of finding a solution for the replacement of hard copies of the vehicle's information with an application for easy access and manipulation. The software's features are the Collection and Storage of Vehicle Information, Inventory, GPS tracking, Maps, Insurance updates, e.t.c. So far, I was able to build a tested development backend using Node.js, and I'm presently ongoing with some React courses to help me build a friendly interacting UI. <strong>VIMAP</strong> is a Startup project, so wish us Goodluck, please.<br /> Thank you.
          </p>
        </div>
        <a href="https://twitter.com/garba_tanimu" class="twitter-follow-button" data-size="large" data-show-screen-name="false" data-show-count="false">@garba_tanimu</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>&nbsp;&nbsp;
        <a class="github-button" href="https://github.com/mukhtar-github" data-size="large" aria-label="Follow @mukhtar-github on GitHub">GitHub</a>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
    </Layout>
  )
}