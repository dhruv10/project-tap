import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
  <section className='h-4 w-full px-16 py-8 flex justify-between items-center bg-grad-red mt-64'>
    <p className='text-white text-1xl z-3'>Copyrights 2020</p>
    <p className='text-white text-1xl z-3'>Made with ❤️ by team TAP</p>
    <p className='text-white text-1xl z-3'>
      <Link href='https://www.instagram.com/theabstractpeople.in/'>
        <SocialIcon
          url='https://www.instagram.com/theabstractpeople.in'
          bgColor='rgba(255, 255, 255, .4)'
        />
      </Link>
      <Link href='https://www.instagram.com/theabstractpeople.in/'>
        <SocialIcon
          url='https://www.facebook.com/theabstractpeople.in'
          bgColor='rgba(255, 255, 255, .4)'
        />
      </Link>
      <Link href='https://www.instagram.com/theabstractpeople.in/'>
        <SocialIcon
          url='https://www.youtube.com/c/TheAbstractPeople'
          bgColor='rgba(255, 255, 255, .4)'
        />
      </Link>
    </p>
  </section>
);

export default Footer;
