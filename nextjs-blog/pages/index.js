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
        Hi! I am <strong>Mukhtar</strong> a Mechanical Engineer transformed into a Software Developer. I started my programming journey in October 2018 as a non-traditional developer with no background in CS. So far, the time metrics have amounted to about 2500 hours on counting.<br />
As a Fleet Engineer at the Organization where I work, the challenge of going through archives to get vehicle information for updates was time-consuming. As a result of that challenge, the idea of <strong><a href="https://www.vimap.io/">VIMAP</a></strong>, an acronym for <i>Vehicles Information Management Application</i>, came up to provide a solution for the replacement of hard copies of vehicle information and easy accessing and updating of vehicle information. The software's features are; but are not limited to the Collection and Storage of Vehicles Information, Inventory, GPS tracking, and Insurance updates. VIMAP is a Startup project, so wish us Goodluck, please. Thank you.
            Hi! I am , a Mechanical Engineer transformed into a Software Developer. I started my programming journey in October 2018, as a non-traditional developer with no background in CS. So far the time metrics have amounted to about 2500 hours on counting.
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
