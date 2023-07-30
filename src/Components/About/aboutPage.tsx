import Image from 'next/image'
import React from 'react'
import ResponsiveImg from'@/Components/Assets/Images/downloading.svg'
const AboutPage = () => {
  return (
    <div  id='about' className=' w-full px-4 pt-60 flex items-center ' >
        <div className='max-w-[1240px] m-auto  md:grid grid-cols-2 gap-8 ' >
            <div className='cols-span-2 ' >
                <p className='uppercase text-3xl tracking-widest text-blue-500 ' >ABout Me!</p>
                <h2 className=' py-4  ' >Introduction</h2>
                <p className='py-2 ' >  My Name Is Muhammad-Hassan i am a Student of National University of Sciences and Technology (NUST) Islamabad.I am a Front-End-Developer,Youtuber,Graphic Designer</p>
                <p className=' py-2 ' > My Name Is Muhammad-Hassan i am a Student of National University of Sciences and Technology (NUST) Islamabad.I am a Front-End-Developer, Youtuber, Graphic Designer</p>
                
            </div>
            <div className=' w-full h-auto m-auto shadow-[0px_7px_25px_-6px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl flex items-center justify-center  p-2 hover:scale-105 ease-in duration-300 '  >
            <Image className=' rounded-xl' src={ResponsiveImg} alt='Logo' width={300} height={100} />
            </div>
        </div>
    </div>
  )
}

export default AboutPage;