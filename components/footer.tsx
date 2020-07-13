import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <section className='h-4 w-full px-16 py-8 flex justify-between items-center bg-grad-red'>
    <p className='text-white text-1xl z-3'>Copyrights 2020</p>
    <p className='text-white text-1xl z-3'>Made with ❤️ by team TAP</p>
    <p className='text-white text-1xl z-3'>
      <Link href='https://www.instagram.com/theabstractpeople.in/'>
        <a>
          <span>Reach us on Instagram</span>
        </a>
      </Link>
    </p>
  </section>
);

export default Footer;
