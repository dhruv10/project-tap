import React from 'react';
import Head from 'next/head';

// Components
import Article from '../components/article';

// Images
const Founder = '/images/1.jpg';

const CrewMates = () => (
    <div className='  bg-dark-primary text-white'>
        <Head>
            <title>CrewMates </title>

        </Head>

        <div text-white text-6xl font-bold leading-none mb-6>CrewMates</div>
        <div className='w-11/12 underline'>

            <ul>
                <li className='inline'><a className='hover:underline focus:shadow-outline' href="#">Core Team</a></li>
                <li className='inline'><a className='hover:underline focus:shadow-outline' href="#">Dev Team</a></li>
                <li className='inline'><a className='hover:underline focus:shadow-outline' href="#">Authors</a></li>
            </ul>
        </div>

        <div>
            <img className='w-full h-56 relative object-cover' src={Founder} width='80%' />
            <p className='text-yellow-500 absolute bottom-0 left-0 top-0 invisible hover:visible text-3xl'>SHIVAM SINGHAL FOUNDER</p>
            <p className='text-gray-300 font-semibold leading-normal'>
                this is my page This is a test file, test check tezzos common,
                hail hydra This is a test file, test check tezzos common, hail
                hydra This is a test file, test check tezzos common, hail hydra
             </p>
        </div>

        <div>
            <img className='w-full h-56 relative object-cover' src={Founder} width='80%' />
            <p className='text-yellow-500 absolute bottom-0 left-0 top-0 invisible hover:visible text-3xl'>SHIVAM SINGHAL FOUNDER</p>
            <p className='text-gray-300 font-semibold leading-normal'>
                this is my page This is a test file, test check tezzos common,
                hail hydra This is a test file, test check tezzos common, hail
                hydra This is a test file, test check tezzos common, hail hydra
             </p>
        </div>


        <div>
            <img className='w-full h-56 relative object-cover' src={Founder} width='80%' />
            <p className='text-yellow-500 absolute bottom-0 left-0 top-0 invisible hover:visible text-3xl'>SHIVAM SINGHAL FOUNDER</p>
            <p className='text-gray-300 font-semibold leading-normal'>
                this is my page This is a test file, test check tezzos common,
                hail hydra This is a test file, test check tezzos common, hail
                hydra This is a test file, test check tezzos common, hail hydra
             </p>
        </div>


);

export default CrewMates;
