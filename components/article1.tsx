import React from 'react';

const TAPLogo = '/images/tap_logo.svg';

const Article1 = (props: { topic: string; description: string; author: string; issueDate: string; timeToRead: string; img: string }) => (
    <a href='#'>
        <div className='grid grid-cols-7 grid-rows-3 gap-2 text-white hover:bg-gray-800 rounded'>
            <img src={props.img} className='my-10 row-start-1 row-span-3 col-start-1 col-span-4' />
            <div className='px-12 pt-12 row-start-1 row-span-1 col-start-5 col-span-3 text-5xl font-semibold mx-10 mt-20'>{props.topic}</div>
            <p className='px-12 row-start-2 row-span-1 col-start-5 col-span-3 text-2xl mx-14'>{props.description}</p>

            <div className='row-start-3 row-span-1 col-start-5 col-span-3'>
                <div className='grid grid-rows-2 grid-flow-col text-white justify-center content-center'>
                    <img src={TAPLogo} className='row-start-1 row-span-2 w-16 my-2' />
                    <p className='row-span-1 col-span-10 text-sm italic ml-2 text-2xl'>{props.author}</p>
                    <p className='row-span-1 col-span-10 text-xs italic ml-2 text-2xl'>{props.issueDate} - {props.timeToRead}</p>
                </div>
            </div>


        </div>
    </a>
);

export default Article1;
