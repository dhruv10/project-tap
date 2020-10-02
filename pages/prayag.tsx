import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Components
import Footer from '../components/footer';

// Images
const TAPLogo = '/images/tap_logo.svg';
const Anusha = '/images/anusha.jpg';

const Prayag = () => (
  <div className='bg-dark-primary'>
    <div className='px-32'>
      <Head>
        <title>Prayag Institute of Music Allahbad</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

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

      <section className='py-6'>
        <div className='flex content-center justify-center bg-blue-600'>
          <div className='py-8 text-white text-4xl font-bold'>
            Prayag Sangeet Samiti
          </div>
        </div>
      </section>

      <section className='py-4'>
        <div className='text-white text-3xl font-bold'>
          A note on Junior Diploma from Prayag Institute of Music Allahbad
        </div>
        <div className='text-gray-300 text-2xl font-semibold'>
          From a 4th year student pursuing senior diploma in music
        </div>
      </section>

      <section className='py-12'>
        <div className='flex h-20 justify-between'>
          <div className=''>
            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <div className='rounded border-2 bg-yellow-500 border-yellow-500'>
                  <div className='text-black font-bold text-center'>#music</div>
                </div>
                <div className='ml-3 rounded border-2 bg-yellow-500 border-yellow-500'>
                  <div className='text-black font-bold text-center'>
                    #prayag
                  </div>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='mt-3 rounded border-2 bg-yellow-500 border-yellow-500'>
                  <div className='text-black font-bold text-center'>
                    #allahbad
                  </div>
                </div>
                <div className='ml-3 mt-3 rounded border-2 bg-yellow-500 border-yellow-500'>
                  <div className='text-black font-bold text-center'>
                    #institute
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='grid content-end grid-rows-2 grid-flow-col'>
              <p className='row-span-1 col-span-10 text-2xl text-white font-semibold'>
                Anusha Bhatnagar
              </p>
              <p className='row-span-1 col-span-10 text-xl text-gray-300 pr-4 font-semibold'>
                Sep 26, 2020 . 7 min read
              </p>
              <img
                src={Anusha}
                className='h-auto w-20 row-span-2 w-10 rounded-full'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='pt-8 text-gray-300 font-semibold text-xl'>
        <b>Introduction</b>
        <br />
        <br />
        Prayag institute of Music is one of the finest institutes which give you
        the chance to make your career in music. It is also named as{' '}
        <a target='_blank' href='https://www.prayagsangeetsamiti.co.in/'>
          Prayag Sangeet Samiti
        </a>
        . <br />
        This organization was established in 1926. It also organizes events,
        competitions, and many more to revive taste and devotion towards the art
        of music amongst the people. And reward students with rewards and
        certificates. This organization is having a high reputation for
        consistently upholding the highest and the richest traditions of this
        sublime art. Youngsters who want to learn Classical Hindustani music can
        apply here with no doubt. Not only in vocals but students and whosoever
        want to get a diploma in any of the instruments like sitar, harmonium,
        flute, veena, etc. can also get admission to this prestigious
        organization.
        <br></br>
        <br></br>
        <b>My Experience</b>
        <br />
        <br />
        Nowadays, people are also making a career in music because they want to
        follow their passion, their dreams, and I am one of them. I am also a
        student of this organization and just completed my junior diploma and
        now pursuing a senior diploma. I have experience of 3 years in this
        music institute. And I feel that in these 3 years I have improved myself
        so well. I get hesitant whenever I have to sing or perform something,
        slowly and gradually, people and the teachers gave me the motivation and
        the confidence to perform on stage. Now I have that inner confidence
        that we need when we are on stage. If you have that art of music then
        you can pursue this line also.
        <br></br>
        <br></br>
        <b>Advantages</b>
        <br />
        <br />
        There are many advantages for the students which we don’t found in any
        other big institutes of music which are as follows:
        <br></br>
        <br></br>
        <b>1. Can complete their diploma from anywhere in India</b>
        <br></br>
        The main Prayag institute for music is in Allahabad. So it is not
        necessary that if you want to apply you have to go to Allahabad or if
        you want the diploma you have to study there, it is not necessary. You
        can apply online and you can learn anywhere in India with the teachers
        or guru’s you are comfortable with. Exams (theoretical and practical) of
        this institute is done all over India.
        <br></br>
        <br></br>
        <b>
          2. The students who have that passion and art but cannot afford the
          course
        </b>
        <br></br>
        The students who have the talent to learn and have a passion for music,
        Prayag institution is the best place for them to learn. Many big
        institutions and their courses of music are way too expensive that
        students who can’t afford it cannot take admission there. But Prayag
        sangeet samiti offers courses that are affordable to most of them.
        <br></br>
        <br></br>
        <b>Conclusion</b>
        <br />
        <br />
        Today’s youth prefer more light songs, rock songs, and much more. Prayag
        sangeet samiti is the organization which aims to show the culture and
        the tradition we have in the past, the way we respect the guru’s who
        teach music to us, the way we learn our own Hindustani music to the
        coming generations. Thank you for reading.
      </section>
    </div>

    <div>
      <Footer />
    </div>
  </div>
);

export default Prayag;
