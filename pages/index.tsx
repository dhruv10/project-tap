import React from 'react';
import Head from 'next/head';

// Images
// import TapLogoSVG from '../assets/tap_logo.svg';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className='bg-dark-primary'>
      <section className='h-screen w-full px-16 flex justify-between items-center'>
        <div className='w-2/4'>
          <div className='text-white text-6xl font-bold leading-none mb-6'>
            <span className='text-light-pink'>Built</span> by the <br />{' '}
            Community
          </div>
          <p className='text-gray-300 font-semibold leading-normal'>
            The Abstract People is a New Delhi based community that deals in
            human welfare, conducts social campaigns and indulges itself in Arts
            and Cultural Events.
          </p>
        </div>
        <div className='text-white'>
          {/* <TapLogoSVG /> */}
          LOGO
        </div>
      </section>
    </div>
  </div>
);

export default Home;
