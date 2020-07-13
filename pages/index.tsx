import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Components
import Article from '../components/article';
import Footer from '../components/footer';

// Data
import { homePageArticles } from '../assets/articles/homePageArticles';

// Images
const MainLogoURL = '/images/tap_logo.svg';

const Home = () => (
  <div className='bg-dark-primary'>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <section className='h-screen w-full px-16 flex justify-between items-center'>
      <div className='w-2/4'>
        <div className='text-white text-6xl font-bold leading-none mb-6'>
          <span className='text-light-pink'>Built</span> by the <br /> Community
        </div>
        <p className='text-gray-300 font-semibold leading-normal'>
          The Abstract People is a New Delhi based community that deals in human
          welfare, conducts social campaigns and indulges itself in Arts and
          Cultural Events.
        </p>
      </div>
      <div className='text-white'>
        <img src={MainLogoURL} width='40%' />
      </div>
    </section>

    <section className='h-screen w-full px-16 flex justify-between items-center'>
      <div className='bg-dark-blue h-half w-6/5 rounded-oval absolute -left-1/10 top-75vh rotate-4 z-3'></div>
      <div className='bg-light-blue h-4/5 w-7/5 rounded-oval absolute -left-1/5 top-88vh -rotate-7 z-3'></div>
      <div className='bg-dark-blue h-4/5 w-full absolute left-0 top-120vh z-2'></div>
      <div className='bg-light-blue h-half w-3/4 rounded-oval absolute -right-1/5 top-170vh rotate-4 z-3'></div>
      <div className='bg-dark-primary h-half w-3/5 rounded-oval absolute -left-1/120 top-180vh rotate-4 z-3'></div>
    </section>

    <section className='h-screen w-full px-16'>
      <Link href='./exploreArticles'>
        <a>
          <p className='text-white text-5xl font-bold mt-64 z-3'>
            Discover Articles
          </p>
        </a>
      </Link>
      {homePageArticles.map((article) => {
        return <Article heading={article.heading} content={article.content} />;
      })}
    </section>
    <Footer />
  </div>
);

export default Home;
