import React from 'react';

const TAPLogo = '/images/tap_logo.svg';

const TrendingArticleCard = (props: {
  topic: string;
  description: string;
  author: string;
  issueDate: string;
  timeToRead: string;
  img: string;
}) => (
  <a href='#'>
    <div className='flex items-center justify-center flex-row text-white transform scale-100 hover:scale-105 hover:shadow-2xl rounded'>
      <div className='w-3/5'>
        <img src={props.img} />
      </div>

      <div className='w-2/5 mx-6'>
        <div className='text-5xl font-semibold'>{props.topic}</div>
        <p className='text-2xl mx-14'>{props.description}</p>

        <div className='flex mt-2'>
          <div className='w-1/5'></div>

          <div className='w-1/5'>
            <img src={TAPLogo} />
          </div>

          <div className='w-4/6'>
            <p className='italic text-xl'>{props.author}</p>
            <p className='italic text-base'>
              {props.issueDate} - {props.timeToRead}
            </p>
          </div>

          <div className='w-1/5'></div>
        </div>
      </div>
    </div>
  </a>
);

export default TrendingArticleCard;
