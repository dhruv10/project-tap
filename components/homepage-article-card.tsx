import React from 'react';

const HomepageArticleCard = (props: { heading: string; content: string }) => (
  <div className='my-16 flex justify-between'>
    <div className='w-2/5'>
      <p className='text-white text-3xl font-bold'>{props.heading}</p>
      <p className='text-txt-gray text-sm font-semibold mt-8'>
        {props.content}
      </p>
      <button className='bg-transparent border-2 border-solid border-green-400 hover:bg-green-400 hover:text-white text-green-400 font-bold py-2 px-4 mt-8 rounded'>
        Learn more >>
      </button>
    </div>
    <div className='w-3/5'></div>
  </div>
);

export default HomepageArticleCard;
