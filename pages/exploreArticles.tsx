import React from 'react';
import Head from 'next/head';

// Components
import Articles from '../components/articles';
import Article1 from '../components/article1';

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
                <p className='text-white text-2xl font-bold leading-none p-6'>The Abstract People</p>
            </div>

            <div className='grid grid-rows-2 grid-cols-5 grid-flow-col w-3/5 gap-4 text-white'>
                <img src={expLogo} className='row-span-2 col-span-1 mt-4' width='80%' alt='expLogo' />
                <div className='row-span-1 col-start-2 col-span-3 font-inter text-5xl font-bold '>Explore Articles</div>
                <div className='row-span-1 col-start-2 col-span-4 mb-4'>With a wide range of selection hover over here and there</div>
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

        <section className='z-5'>
            <div className='inline-block text-white mt-8 w-full whitespace-no-wrap overflow-x-scroll font-semibold text-5xl'>
                <a href='#' className='mx-20 hover:text-gray-600'>Magic</a>
                <a href='#' className='mx-20 hover:text-gray-600'>Innovation and Technology</a>
                <a href='#' className='mx-20 hover:text-gray-600'>Magic</a>
                <a href='#' className='mx-20 hover:text-gray-600'>Web Development</a>
            </div>
        </section>

        <section className='my-16 flex flex-wrap text-align-center '>

            {exploreArticlesContent.map((article, index) => {
                if (index === 0)
                    return <section className='px-32 text-center'><Article1 topic={article.topic} description={article.description} author={article.author} issueDate={article.issueDate} timeToRead={article.timeToRead} img={article.img} /></section>;
                return <Articles topic={article.topic} description={article.description} author={article.author} issueDate={article.issueDate} timeToRead={article.timeToRead} img={article.img} />;
            })}
        </section>

        <section className='h-4 w-full px-16 py-8 flex justify-between items-center bg-grad-red'>
            <p className='text-white text-1xl z-3'>Owned by Shivam Singhal</p>
            <p className='text-white text-1xl z-3'>Made with love by TAP</p>
            <p className='text-white text-1xl z-3'></p>
        </section>
    </div>
);

export default exploreArticles;