"use client"
import { useEffect, useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typed from 'typed.js';




const HomePage = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        if (typedRef.current) {
          const typed = new Typed(typedRef.current, {
            strings: ['Front-End-Developer', 'Youtuber', 'Graphic Designer'],
            typeSpeed: 150,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
            cursorChar: '|'
          });
      
          return () => {
            typed.destroy();
          };
        }
      }, []);
      



    return (
    <div className='w-full font-oswald pt-44 text-center ' >
        <div className='max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center ' ><div>
       
        <div className='py-2 font-bold font-urbanist text-3xl md:text-5xl text-gray-500'>
        Hi! I am <span className='text-blue-600'>M Hassan</span>
      </div>
            <p className='text-2xl py-2 text-green-700 ' >
           <span ref={typedRef}></span>
         </p><span>
         <p className='py-4 max-w-[70%] m-auto md:mx-48 '>
         My Name Is Muhammad-Hassan I am a Front-End-Developer,Youtuber,Graphic Designer
         </p></span>
         <div title='Linkedin Account' className='flex items-center justify-between max-w-[330px] m-auto py-4 ' >
            <div className=' rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)]  shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300 '>
            <FaLinkedin  />

            </div>   
            <div title='Github Account' className=' rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)]  shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300 '>
            <FaGithub  />

            </div>   
            <div title='Send Massage On Gmail' className='  rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)]  shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300 '>
            <AiOutlineMail  />

            </div>
            <div title='Personal Link' className=' rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)]  shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300  '  >
            <BsFillPersonLinesFill />

            </div>
         </div>
            </div>
        </div>

    </div>

  )
}

export default HomePage
