import React from 'react';

const TAPLogo = '/images/tap_logo.svg';

const Articles = (props: { topic: string; description: string; author: string; issueDate: string; timeToRead: string; img: string }) => (
    <div className='my-12 ml-32 w-1/5 flex content-start'>
        <a href='#' className='hover:bg-gray-800 rounded'>
            <img src={props.img} />
            <div className='text-white text-2xl font-bold'>{props.topic}</div>
            <p className='text-white text-sm font-semibold '>
                {props.description}
            </p>

            <div className='grid grid-rows-2 grid-flow-col  text-white mt-2'>
                <img src={TAPLogo} className='row-span-2 w-10' />
                <p className='row-span-1 col-span-10 text-sm italic'>{props.author}</p>
                <p className='row-span-1 col-span-10 text-xs italic'>{props.issueDate} - {props.timeToRead}</p>
            </div>
        </a>

    </div>
);

export default Articles;
