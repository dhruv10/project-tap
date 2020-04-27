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
      <div className='bg-dark-blue h-half w-6/5 rounded-oval absolute -left-1/10 top-75vh rotate-4 z-3'></div>
      <div className='bg-light-blue h-4/5 w-7/5 rounded-oval absolute -left-1/5 top-88vh -rotate-7 z-3'></div>
      <div className='bg-dark-blue h-4/5 w-full absolute left-0 top-120vh z-2'></div>
      <div className='bg-light-blue h-half w-3/4 rounded-oval absolute -right-1/5 top-170vh rotate-4 z-3'></div>
      <div className='bg-dark-primary h-half w-3/5 rounded-oval absolute -left-1/120 top-180vh rotate-4 z-3'></div>
    </section>

    <section className='h-screen w-full px-16'>
      <p className='text-white text-5xl font-bold mt-64 z-3'>
        Discover Articles
      </p>

      <div className='my-16 flex justify-between'>
        <div className='w-2/5'>
          <p className='text-white text-3xl font-bold'>
            Automatic tracking with GitHub
          </p>
          <p className='text-txt-gray text-sm font-semibold mt-8'>
            Tezos Commons supports the ideas, individuals and organizations
            dedicated to building the digital commonwealth. <br /> <br />
            We empower the community to be the architects through bootstrapping
            local communities, communications, promotion, education, funding
            open source initiatives and advocacy.
          </p>
          <button className='bg-transparent border-2 border-solid border-green-400 hover:bg-green-400 hover:text-white text-green-400 font-bold py-2 px-4 mt-8 rounded'>
            Learn more >>
          </button>
        </div>
        <div className='w-3/5'></div>
      </div>
    </section>
  </div>
);

export default Home;
