import Image from 'next/image'
import React from 'react'
import HtmlImg from'@/Components/Assets/Images/html.png'
import CssImg from'@/Components/Assets/Images/CSS3_logo_and_wordmark.svg.png'
import JavascriptImg from'@/Components/Assets/Images/javascript.png'
import TypescriptImg from'@/Components/Assets/Images/Typescript_logo_2020.svg.png'
import ReactImg from'@/Components/Assets/Images/1631110818-logo-react-js.png'
import NextImg from'@/Components/Assets/Images/download.png'
import AngulerImg from'@/Components/Assets/Images/anguler.png'

const SkillsPage = () => {

  return (
    <div className=' w-full pt-60 px-4 ' id='skills' >
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full ' >
        <p className=' text-3xl  text-blue-500 ' >Skills</p>
        <p className=' text-2xl py-2  text-gray-400 ' >
          <span className='word' >Advanced </span>
          <span className='word' >tech </span>
          <span className='word' >for </span> 
          <span className='word' >web </span> 
          <span className='word' >& </span>
          <span className='word' >app </span>
          <span className='word'>div</span></p>
        <div className=' py-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8 ' >


      <div className=' p-8 shadow-[0px_3px_3px_4px_rgba(130,100,120,0.3)] hover:scale-105 ease-in duration-300 ' >
        <div className=' grid grid-cols-2 gap-4 justify-center items-center '>
          <div className='m-auto'>
          <Image src={HtmlImg} alt='Logo' width='64' height='64' />

          </div>
          <div className='flex flex-col items-center justify-center' >
            <h3>HTML:5</h3>
          </div>
        </div>

      </div>
      <div className=' p-6 shadow-[0px_3px_3px_4px_rgba(130,100,120,0.3)] hover:scale-105 ease-in duration-300 ' >
        <div className=' grid grid-cols-2 gap-4 justify-center items-center '>
          <div className='m-auto'>
          <Image src={CssImg } alt='Logo' width='64' height='64' />

          </div>
          <div className='flex flex-col items-center justify-center' >
            <h3>CSS</h3>
          </div>
        </div>

      </div>
      <div className=' p-6 shadow-[0px_3px_3px_4px_rgba(130,100,120,0.3)] hover:scale-105 ease-in duration-300 ' >
        <div className=' grid grid-cols-2 gap-4 justify-center items-center '>
          <div className='m-auto'>
          <Image src={JavascriptImg}alt='Logo' width='64' height='64' />

          </div>
          <div className='flex flex-col items-center justify-center' >
            <h3>JavaScript</h3>
          </div>
        </div>

      </div><div className=' p-6 shadow-[0px_3px_3px_4px_rgba(130,100,120,0.3)] hover:scale-105 ease-in duration-300 ' >
        <div className=' grid grid-cols-2 gap-4 justify-center items-center '>
          <div className='m-auto'>
          <Image src={TypescriptImg} alt='Logo' width='64' height='64' />

          </div>
          <div className='flex flex-col items-center justify-center' >
            <h3>TypeScript</h3>
          </div>
        </div>

      </div><div className=' p-6 shadow-[0px_3px_3px_4px_rgba(130,100,120,0.3)] hover:scale-105 ease-in duration-300 ' >
        <div className=' grid grid-cols-2 gap-4 justify-center items-center '>
          <div className='m-auto'>
          <Image src={ReactImg} alt='Logo' width='64' height='64' />

          </div>
          <div className='flex flex-col items-center justify-center' >
            <h3>REACT</h3>
          </div>
        </div>

      </div>
      <div className=' p-6 shadow-[0px_3px_3px_4px_rgba(130,100,120,0.3)] hover:scale-105 ease-in duration-300 ' >
        <div className=' grid grid-cols-2 gap-4 justify-center items-center '>
          <div className='m-auto'>
          <Image src={NextImg} alt='Logo' width='64' height='64' />

          </div>
          <div className='flex flex-col items-center justify-center' >
            <h3>NEXT</h3>
          </div>
        </div>

      </div>
      <div className=' p-6 shadow-[0px_3px_3px_4px_rgba(130,100,120,0.3)] hover:scale-105 ease-in duration-300 ' >
        <div className=' grid grid-cols-2 gap-4 justify-center items-center '>
          <div className='m-auto'>
          <Image src={AngulerImg} alt='Logo' width='64' height='64' />

          </div>
          <div className='flex flex-col items-center justify-center' >
            <h3>ANGULER</h3>
          </div>
        </div>

      </div>
      
        </div>
        </div>
    </div>
  )
}

export default SkillsPage;