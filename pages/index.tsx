import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

// Components
import ArticleCard from '../components/homepage-article-card';
import Footer from '../components/footer';
import Eventcard from '../components/event-card';

// Data
import { homePageArticles } from '../assets/articles/homePageArticles';
import { Eventdata } from '../assets/articles/event-data';

// Images
const MainLogoURL = '/images/tap_logo.svg';

const Home = () => (
  <div className='bg-dark-primary'>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <section className='px-12 -mb-20'>
      <div className='flex'>
        <p className='text-white text-2xl font-bold leading-none p-6'>
          The Abstract People
        </p>
      </div>
    </section>

    <section className='h-screen w-full px-16 flex justify-between items-center'>
      <div className='w-2/4'>
        <div className='text-white text-6xl font-bold leading-none mb-6'>
          <span className='text-light-pink'>Built</span> by the <br /> Community
        </div>
        <p className='text-gray-300 font-semibold leading-normal'>
          The Abstract People is a New Delhi based <br></br> community that
          deals in human welfare, conducts <br></br> social campaigns and
          indulges itself in Arts <br></br> and Cultural Events.
        </p>
      </div>
      <div className='text-white flex justify-end'>
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
    <a>
      <p className='text-white text-5xl font-bold mt-64 px-16'>
        Discover Events
      </p>
    </a>
    {Eventdata.map((notify) => {
      return (
        <Eventcard
          month={notify.month}
          day={notify.day}
          topic={notify.topic}
          date={notify.date}
          subject={notify.subject}
          place={notify.place}
          color={notify.color}
          link={notify.link}
        />
      );
    })}
    <div className='flex flex-col'>
      <div className='h-screen px-16'>
        <Link href='./explore-articles'>
          <a>
            <p className='text-white text-5xl font-bold -mt-64 hover:underline'>
              Discover Articles
            </p>
          </a>
        </Link>
        {homePageArticles.map((article) => {
          return (
            <ArticleCard
              heading={article.heading}
              content={article.content}
              img={article.img}
            />
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
