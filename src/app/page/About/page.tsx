import Image from 'next/image'
import React from 'react'
import ResponsiveImg from'@/Components/Assets/Images/downloading.svg'
const AboutPage = () => {
  return (
    <div id='About' className='w-full px-4 pt-20 flex items-center'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>
            <div className='cols-span-2'>
                <p className='text-3xl tracking-widest text-blue-500 font-semibold'>
                    About Me!
                    </p>
                <h1 className=' py-4 font-bold'>Introduction</h1>
                <p className='py-2'>My Name is <mark>Muhammad-Hassan</mark>. I Live in Bahawalpur, Punjab, Pakistan. I am a FullStack Web developer (Web 3.0).I am interested in building beautiful web applications with a focus on creating clean and SEO-friendly websites. My goal is to employ advanced technology and innovative design principles to achieve this.</p>
                <h1 className='font-bold'>
                  Education
                </h1>
                <p className='pt-4' >I am a student of Government College Bahawalpur.</p>
            </div>
            <div className=' w-full h-auto m-auto shadow-[0px_7px_25px_-6px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl flex items-center justify-center  p-2 hover:scale-105 ease-in duration-300 '  >
            <Image className=' rounded-xl' src={ResponsiveImg} alt='Logo' width={300} height={100} />
            </div>
        </div>
    </div>
  )
}

export default AboutPage;