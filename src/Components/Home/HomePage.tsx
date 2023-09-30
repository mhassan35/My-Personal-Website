"use client"
import { useEffect, useRef } from 'react';
import { BsYoutube ,BsFacebook } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typed from 'typed.js';
import BackgroundPage from '../Background/BackgroundPage';
import Link from 'next/link';

const HomePage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['I Am A', 'Website Developer', 'Youtuber', 'Graphic Designer'],
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
      <div className='w-full h-screen relative font-oswald pt-8 text-center'>
        <div className='max-w-screen-xl w-full h-full mx-auto p-4 flex flex-col justify-center items-center'>
          <div>
            <div className='py-2 font-bold font-urbanist text-3xl md:text-5xl text-gray-200'>
              Hi! I am <span className='text-green-500'>M Hassan</span>
            </div>
            <p className='text-2xl py-2 text-red-300'>
              <span ref={typedRef}></span>
            </p>
            <div>
              <p className='py-4 max-w-2xl mx-auto text-slate-300 '>
                My Name Is Muhammad-Hassan. I am a Web-Developer, Youtuber, Graphic Designer
              </p>
            </div>
            
            <div className='flex items-center justify-center space-x-5 md:space-x-6 py-4'>
            <Link href="https://www.linkedin.com/in/muhammad-hassan-86b302293" >
              <div
                title='Linkedin Account'
                className='rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.4)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
              >
                <FaLinkedin className="text-white"/>
              </div>
              </Link>
              <Link href="https://github.com/M-Hassan1">
              <div
                title='Github Account'
                className='rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
              >
                <FaGithub className="text-white" />
              </div>
              </Link>
              <Link href="https://www.youtube.com/channel/UCok9epwf7EcKPV_eX1_-oNg">
                <div
                title='Send Massage On Gmail'
                className='rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300 '
              >
                <BsYoutube className="text-white" />
              </div>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100084384853396">
              <div
                title='Personal Link'
                className='rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
              >
                <BsFacebook className="text-white" />
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