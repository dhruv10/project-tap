import React from 'react';
import Head from 'next/head';

// Images
const Founder = '/images/1.jpg';
const icon = '/images/icon.jpg';

const CrewMates = () => (
    <div className='bg-dark-primary text-white'>

        <Head>
            <title>CrewMates </title>

        </Head>
        <img className='w-20 h-20  relative object-cover inline-block ' src={icon} width='20%' />
        <div className='inline-block text-white text-3xl font-bold leading-none mb-6 p-5'>CrewMates</div>

        <div className='w-11/12 my-6 p-12'>

            <ul className='border-b-2'>
                <li className='inline p-10 m-4 text-2xl'><a className='hover:underline ' href="#">Core Team</a></li>
                <li className='inline p-10 m-12 text-2xl'><a className='hover:underline ' href="#">Dev Team</a></li>
                <li className='inline p-10 m-12 text-2xl'><a className='hover:underline ' href="#">Authors</a></li>
            </ul>
        </div>

        <div className='box-border relative inline-block w-4/12 h-auto'>
            <img className='w-full block' src={Founder} width='100%' />
            <div className='opacity-0 hover:opacity-50 absolute inset-0  w-full h-full bg-gray-700 p-15 transition-all ease-in-out duration-300'>
                <div className='text-center text-3xl inline-block absolute inset-auto -translate-x-1/2 -translate-y-1/2'>
                    SHIVAM SINGHAL FOUNDER</div>
            </div>
        </div>

        <div className='text-gray-300 font-semibold leading-normal'>
            this is my page This is a test file, test check tezzos common,
            hail hydra This is a test file, test check tezzos common, hail
            hydra This is a test file, test check tezzos common, hail hydra
            this is my page This is a test file, test check tezzos common,
            hail hydra This is a test file, test check tezzos common, hail
            hydra This is a test file, test check tezzos common, hail hydra
            this is my page This is a test file, test check tezzos common,
            hail hydra This is a test file, test check tezzos common, hail
            hydra This is a test file, test check tezzos common, hail hydra
        </div>

        <div className='box-border relative inline-block w-4/12 h-auto'>
            <img className='w-full block' src={Founder} width='100%' />
            <div className='opacity-0 hover:opacity-50 absolute inset-0  w-full h-full bg-gray-700 p-15 transition-all ease-in-out duration-300'>
                <div className='text-center text-3xl inline-block absolute inset-auto -translate-x-1/2 -translate-y-1/2'>
                    SHIVAM SINGHAL FOUNDER</div>
            </div>
        </div>

        <div className='text-gray-300 font-semibold leading-normal'>
            this is my page This is a test file, test check tezzos common,
            hail hydra This is a test file, test check tezzos common, hail
            hydra This is a test file, test check tezzos common, hail hydra
            this is my page This is a test file, test check tezzos common,
            hail hydra This is a test file, test check tezzos common, hail
            hydra This is a test file, test check tezzos common, hail hydra
            this is my page This is a test file, test check tezzos common,
            hail hydra This is a test file, test check tezzos common, hail
            hydra This is a test file, test check tezzos common, hail hydra
        </div>

        <div className='box-border relative inline-block w-4/12 h-auto'>
            <img className='w-full block' src={Founder} width='100%' />
            <div className='opacity-0 hover:opacity-50 absolute inset-0  w-full h-full bg-gray-700 p-15 transition-all ease-in-out duration-300'>
                <div className='text-center text-3xl inline-block absolute inset-auto -translate-x-1/2 -translate-y-1/2'>
                    SHIVAM SINGHAL FOUNDER</div>
            </div>
        </div>

        <div className='text-gray-300 font-semibold leading-normal'>
            this is my page This is a test file, test check tezzos common,
            hail hydra This is a test file, test check tezzos common, hail
            hydra This is a test file, test check tezzos common, hail hydra
            this is my page This is a test file, test check tezzos common,
            hail hydra This is a test file, test check tezzos common, hail
            hydra This is a test file, test check tezzos common, hail hydra
            this is my page This is a test file, test check tezzos common,
            hail hydra This is a test file, test check tezzos common, hail
            hydra This is a test file, test check tezzos common, hail hydra
        </div>

        <section className='h-4 w-full px-16 py-8 flex justify-between items-center bg-grad-red'>
            <p className='text-white text-1xl z-3'>Copyrights 2020 @TAP</p>
            <p className='text-white text-1xl z-3'>Made by Shivani Gupta</p>
            <p className='text-white text-1xl z-3'>Contact Us</p>
        </section>
    </div>
);

export default CrewMates;