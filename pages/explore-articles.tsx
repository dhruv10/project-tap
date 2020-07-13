import React from 'react';
import Head from 'next/head';

// Components
import Articles from '../components/articles';
import TrendingArticle from '../components/trending-article';
import Footer from '../components/footer';

// Data
import { exploreArticlesContent } from '../assets/articles/exploreArticlesContent';

// Images
const TAPLogo = '/images/tap_logo.svg';
const expLogo = '/images/d.jpg';

const exploreArticles = () => (
  <div className='bg-dark-primary'>
    <Head>
      <title>Explore Articles</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <section className='px-32 py-2'>
      <div className='flex'>
        <img src={TAPLogo} className='w-12' alt='TAPLogo' />
        <p className='text-white text-2xl font-bold leading-none p-6'>
          The Abstract People
        </p>
      </div>

      <div className='mt-6 flex text-white w-3/5'>
        <div className='w-1/6'>
          <img src={expLogo} width='90%' alt='expLogo' />
        </div>

        <div className='w-5/6 ml-3'>
          <div className='-mt-4 font-inter text-6xl font-bold content-center'>
            Explore Articles
          </div>
          <div className='font-semibold text-base'>
            With a wide range of selection hover over here and there
          </div>
        </div>
      </div>
    </section>

    {/* <!-- DESIGN FOR THE BACKGROUND --> 
    <section className='h-screen w-full px-16 flex justify-between items-center'>
      <div className='bg-dark-blue h-half w-6/5 rounded-oval absolute -left-1/10 top-75vh rotate-4 z-3'></div>
      <div className='bg-light-blue h-4/5 w-7/5 rounded-oval absolute -left-1/5 top-88vh -rotate-7 z-3'></div>
      <div className='bg-dark-blue h-4/5 w-full absolute left-0 top-120vh z-2'></div>
      <div className='bg-light-blue h-half w-3/4 rounded-oval absolute -right-1/5 top-170vh rotate-4 z-3'></div>
      <div className='bg-dark-primary h-half w-3/5 rounded-oval absolute -left-1/120 top-180vh rotate-4 z-3'></div>
    </section>
    */}

    <section className='z-5 mx-32'>
      <div className='inline-block text-white mt-16 w-full whitespace-no-wrap overflow-x-scroll font-semibold text-3xl'>
        <a href='#' className='mx-16 hover:text-gray-600'>
          Magic
        </a>
        <a href='#' className='mx-16 hover:text-gray-600'>
          Innovation and Technology
        </a>
        <a href='#' className='mx-16 hover:text-gray-600'>
          Magic
        </a>
        <a href='#' className='mx-16 hover:text-gray-600'>
          Web Development
        </a>
      </div>

      <hr className='h-1 bg-gray-300 rounded' />
    </section>

    <section className='my-16 flex flex-wrap text-align-center '>
      {exploreArticlesContent.map((article, index) => {
        if (index === 0)
          return (
            <section className='px-32 py-12 text-center'>
              <TrendingArticle
                topic={article.topic}
                description={article.description}
                author={article.author}
                issueDate={article.issueDate}
                timeToRead={article.timeToRead}
                img={article.img}
              />
            </section>
          );
        return (
          <Articles
            topic={article.topic}
            description={article.description}
            author={article.author}
            issueDate={article.issueDate}
            timeToRead={article.timeToRead}
            img={article.img}
          />
        );
      })}
    </section>

    <Footer />
  </div>
);

export default exploreArticles;
