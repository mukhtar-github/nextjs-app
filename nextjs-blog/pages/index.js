import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <p>
            Hi! I'm <strong>Mukhtar</strong>, a Mechanical Engineer who
            transitioned into a Software Developer. I started my programming
            journey in 2018 as a non-traditional developer with no background in
            Computer Science.
            <br />
            As a Fleet Manager at the Organization where I work, the challenge
            of going through archives to get vehicle information for updates was
            time-consuming. As a result of that challenge, the idea of{" "}
            <strong>
              <a href="https://www.vimap.io/">VIMAP</a>
            </strong>
            , an acronym for <i>Vehicles Information Management Application</i>,
            came up to provide a solution to replace the hard copies method of
            saving and updating vehicle information with a simple application to
            save, access, and update vehicle information. VIMAP is a fleet
            wallet. The software's features are the Collection and Storage of
            Vehicles Information, Inventory, GPS tracking, Insurance updates,
            and more.
          </p>
        </div>
        <h5>Sample View of the App</h5>
        <div>
          <a href="https://postimages.org/" target="_blank">
            <img
              src="https://i.postimg.cc/50bDXhJ5/Whats-App-Image-2022-07-28-at-12-48-37-PM.jpg"
              border="0"
              alt="Whats-App-Image-2022-07-28-at-12-48-37-PM"
            />
          </a>
        </div>
        <br />
        <div>
          <a href="https://postimages.org/" target="_blank">
            <img
              src="https://i.postimg.cc/C5z0K3CP/Whats-App-Image-2022-07-28-at-12-48-41-PM.jpg"
              border="0"
              alt="Whats-App-Image-2022-07-28-at-12-48-41-PM"
            />
          </a>
        </div>
        <br />
        <div>
          <a
            href="https://twitter.com/garba_tanimu"
            class="twitter-follow-button"
            data-size="large"
            data-show-screen-name="false"
            data-show-count="false"
          >
            @garba_tanimu
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
          &nbsp;&nbsp;
          <a
            class="github-button"
            href="https://github.com/mukhtar-github"
            data-size="large"
            aria-label="Follow @mukhtar-github on GitHub"
          >
            GitHub
          </a>
        </div>
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
  );
}
