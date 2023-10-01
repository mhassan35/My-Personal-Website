"use client"
import { useEffect, useRef } from 'react';
import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typed from 'typed.js';
import BackgroundPage from '@/Components/shared/Background/BackgroundPage';
import Link from 'next/link';

const HomePage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Website Developer', 'Youtuber', 'Graphic Designer'],
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 100,
        loop: true,
        cursorChar: '|',
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className='absolute top-0 left-0 right-0 bottom-0'>
        <BackgroundPage />
      </div>
      <div className='w-full h-screen relative font-oswald pt-8 text-left'>
        <div className='max-w-screen-xl w-full h-full mx-auto p-4 flex flex-col justify-center items-center'>
          <div>
            <div className='py-2 font-urbanisttext-gray-200 font-samibold '>
              <h1 className='text-pink-600 text-xl md:text-2xl ' >Hi! I am</h1> 
              <h1 className='text-green-500 text-3xl md:text-5xl underline'>Muhammad-Hassan</h1>
            </div>
            <div className='py-2'>
              <h1 className='text-pink-600' >I am a</h1>
              <span className='text-3xl text-fuchsia-400' ref={typedRef}></span>
            </div>
            <div>
              <p className='py-2 max-w-2xl mx-auto text-slate-300'>
              As-Salaam-Alaikum, My Name is Muhammad-Hassan. I am a FullStack Web Developer dedicated to creating clean and user-friendly UI, with a strong priority on optimizing SEO for search engines.
              </p>
            </div>

            <div className='flex items-center justify-center space-x-5 md:space-x-6 py-4'>
              <Link href='https://www.linkedin.com/in/muhammad-hassan-86b302293' target='_blank'>
                <div
                  title='Linkedin Account'
                  className='rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.4)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
                >
                  <FaLinkedin className='text-white' />
                </div>
              </Link>
              <Link href='https://github.com/M-Hassan1' target='_blank'>
                <div
                  title='Github Account'
                  className='rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
                >
                  <FaGithub className='text-white' />
                </div>
              </Link>
              <Link href='https://www.youtube.com/channel/UCok9epwf7EcKPV_eX1_-oNg' target='_blank'>
                <div
                  title='Send Massage On Gmail'
                  className='rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300 '
                >
                  <BsYoutube className='text-white' />
                </div>
              </Link>
              <Link href='https://www.facebook.com/profile.php?id=100084384853396' target='_blank'>
                <div
                  title='Personal Link'
                  className='rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
                >
                  <BsFacebook className='text-white' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
