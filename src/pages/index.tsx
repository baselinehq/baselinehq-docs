import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ReactPlayer from 'react-player';
// @ts-ignore
import DemoVideo from '@site/static/video/demo.webm';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <Heading as="h1" className="hero__title">
                {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/category/costgraph">
                    Tutorials
                </Link>
                {/*<Link*/}
                {/*    className="button button--secondary button--lg"*/}
                {/*    to="/blog">*/}
                {/*    Blog*/}
                {/*</Link>*/}
            </div>
        </div>
    </header>
  );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Data Driven FinOps for Modern Infrastructure.">
            <HomepageHeader />
            <div className="video">
                <Heading as="h2">Learn how Costgraph works!</Heading>
                <ReactPlayer playing controls url={DemoVideo} />
                <p className={styles.buttons} style={{marginTop: '1rem'}}>Love the product? Learn more about building on Costgraph's knowledge base
                    <Link
                    className="button button--secondary button--lg"
                    to="/docs/costgraph/building-on-costgraph-data">
                    Building on Costgraph Data
                </Link></p>
            </div>
        </Layout>
  );
}
