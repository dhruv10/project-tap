import React from 'react';
import Head from 'next/head';

// Images
// import TapLogoSVG from '../assets/tap_logo.svg';

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
        {/* <TapLogoSVG /> */}
        LOGO
      </div>
    </section>

    <section className='h-screen w-full px-16 flex justify-between items-center'>
      <div className='bg-dark-blue h-2/5 w-6/5 rounded-oval absolute -left-1/10 top-80vh z-3'></div>
      <div className='bg-light-blue h-3/5 w-6/5 rounded-oval absolute -left-1/10 top-88vh z-3'></div>
      <div className='bg-dark-blue h-half w-full absolute left-0 top-120vh z-2'></div>
      <div className='bg-light-blue h-1/3 w-3/4 rounded-oval absolute -right-3/20 top-150vh z-3'></div>
      <div className='bg-dark-primary h-1/3 w-3/5 rounded-oval absolute -left-17/100 top-160vh z-3'></div>
    </section>
  </div>
);

export default Home;
