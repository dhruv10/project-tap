import React from 'react';
import Link from 'next/link';

const Notification = (props: {
  month: string;
  day: string;
  topic: string;
  date: string;
  subject: string;
  place: string;
  color: string;
  link: string;
}) => (
  <div>
    <section className='h-screen px-16 mb-64'>
      <div className={`border-4 h-58 mt-8 border-${props.color}-500`}>
        <div className='flex'>
          <div className='w-1/5'>
            <p className='non-italic text-white font-bold my-8 ml-6 text-lg'>
              {props.month}
            </p>
            <p
              className={`non-italic text-${props.color}-500 font-bold -m-12 ml-5 text-5xl`}
            >
              {props.day}
            </p>
          </div>
          <div className='w-2/5 mt-10 ml-2'>
            <div className='non-italic text-white font-bold text-2xl'>
              {props.topic}
            </div>
            <div className='non-italic text-white text-sm font-bold -mt-1'>
              {props.date}
            </div>
          </div>
          <div className='w-2/5 mt-8 ml-64 -mr-64'>
            <div className='text-white non-italic font-bold text-3xl'>
              {props.subject}
            </div>
            <div className='text-white non-italic font-bold text-base'>
              {props.place}
            </div>
          </div>
        </div>
        <div>
          <hr className={`border-${props.color}-500 border-2 my-16`} />
          <Link href={props.link}>
            <a>
              <p
                className={`ml-8 -mt-12 mb-3 text-${props.color}-500 non-italic font-bold hover:underline`}
              >
                Read More >>>
              </p>
            </a>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Notification;
