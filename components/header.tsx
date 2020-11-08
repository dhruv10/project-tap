import Link from 'next/link';

// Images
const TAPLogo = '/images/tap_logo.svg';

const Header = () => (
  <section className='py-2'>
    <div className='w-1/3'>
      <Link href='./index'>
        <a>
          <div className='flex'>
            <img src={TAPLogo} className='w-12' alt='TAPLogo' />
            <p className='text-white text-2xl font-bold leading-none p-6'>
              The Abstract People
            </p>
          </div>
        </a>
      </Link>
    </div>
  </section>
);

export default Header;
