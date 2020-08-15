import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


// Components
import Footer from '../components/footer';

// Images
const TAPLogo = '/images/tap_logo.svg';
const Nanak = '/images/nanak.jpg';

const theme = () => (
    <div className='bg-dark-primary'>
        <div className='px-32'>
            <Head>
                <title>Theme</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <section className='py-2'>
                <div className='w-1/3'>
                    <Link href='./index'><a>
                        <div className='flex'>
                            <img src={TAPLogo} className='w-12' alt='TAPLogo' />
                            <p className='text-white text-2xl font-bold leading-none p-6'>
                                The Abstract People
                            </p>
                        </div></a>
                    </Link>
                </div>
            </section>

            <section className='py-6'>
                <div className='flex content-center justify-center bg-blue-600'>
                    <div className='py-8 text-white text-8xl font-bold'>
                        Theme UI
                    </div>
                </div>
            </section>

            <section className='py-4'>
                <div className='text-white text-6xl font-bold'>
                    Tutorial: Developing an Action-able app
                </div>
                <div className='text-gray-300 text-2xl font-semibold'>
                    Making your Slack app accessible directly from a message
                </div>
            </section>

            <section className='py-12'>
                <div className='flex h-20 justify-between'>
                    <div className=''>
                        {/* hashtags would go here */}
                    </div>

                    <div className=''>
                        <div className='grid content-end grid-rows-2 grid-flow-col'>

                            <p className='row-span-1 col-span-10 text-2xl text-white font-semibold'>
                                Nanak Singh Khurana
                            </p>
                            <p className='row-span-1 col-span-10 text-2xl text-gray-300 pr-4 font-semibold'>
                                May 12, 2020 . 7 min read
                            </p>
                            <img src={Nanak} className='h-auto w-20 row-span-2 w-10 rounded-full' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='pt-8 text-gray-300 font-semibold text-3xl'>
                Tezos Commons supports the ideas, individuals and organizations dedicated to building the digital commonwealth.<br></br><br></br>
                We empower the community to be the architects through bootstrapping local communities, communications, promotion,
                education, funding open source initiatives and advocacy.<br></br>Tezos Commons supports the ideas, individuals and
                organizations dedicated to building the digital commonwealth.<br></br><br></br>We empower the community to be the architects through
                bootstrapping local communities, communications, promotion, education, funding open source initiatives and advocacy.<br></br><br></br>
                Tezos Commons supports the ideas, individuals and organizations dedicated to building the digital commonwealth.<br></br><br></br>
                We empower the community to be the architects through bootstrapping local communities, communications, promotion,
                education, funding open source initiatives and advocacy.<br></br>Tezos Commons supports the ideas, individuals and
                orgnizations dedicated to building the digital commonwealth.<br></br><br></br>We empower the community to be the architects through
                bootstrapping local communities, communications, promotion, education, funding open source initiatives and advocacy.
            </section>
        </div>

        <div>
            <Footer />
        </div>
    </div>
)

export default theme;