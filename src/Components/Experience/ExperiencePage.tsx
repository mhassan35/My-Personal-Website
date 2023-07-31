import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import website from '@/Components/Assets/Images/e-commerce.png'
import moringa from '@/Components/Assets/Images/moringa-powder.png'
import Webone from '@/Components/Assets/Images/pic-1.png'
import weatherApp from '@/Components/Assets/Images/weather-app.png'
import Working from '@/Components/Assets/Images/pic-0.png'
import sideBar from '@/Components/Assets/Images/SideBar.png'
import Webfour from '@/Components/Assets/Images/pic-4.png'
import Fiveweb from '@/Components/Assets/Images/pic-5.png'
import portfolio from '@/Components/Assets/Images/portfolio website.png'

const ExperiencePage = () => {
  return (
    <div className='project' >
      <div className='pt-60'>
        <h1 className='p-4 text-4xl text-[#3C82F6] '>Experience</h1>
        <h2 className='p-4 text-2xl text-gray-500 leading-none'>
          The latest project I have created
          </h2>
          <div className='p-4 grid gap-8 lg:grid-cols-2 md:grid-cols-2'>
            <div className='row'>
            <Image src={website} alt='MyImage' /> 
              <div className='layer'>
                <h5>E-Commerce Websites</h5>
                <p>Complete and responsive E-commerce website using Advance framework</p>
                <div className='flex flex-row gap-4' >
                <Link href='https://e-commerce-pink-three.vercel.app' target="_blank" >
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Demo
                  </button>
                  </Link>
                  <Link href='https://github.com/M-Hassan1/e-commerce' target="_blank"  >
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Code
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='row'>
            <Image src={moringa} alt='MyImage' />
              <div className='layer'>
                <h5>Moringa Powder Website</h5>
                <p>Moringa Powder Website Moringa Powder Website</p>
                <div className='flex flex-row gap-4' >
                <Link href='https://moringa-powder.vercel.app' target="_blank" >
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Demo
                  </button>
                  </Link>
                  <Link href='https://github.com/M-Hassan1/moringa-powder' target="_blank"  >
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Code
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='row'>
            <Image src={weatherApp} alt='MyImage' />
              <div className='layer'>
                <h5>Weather-App</h5>
                <p>Beautiful Weather-App Using Html, Css And JavaScript</p>
                <div className='flex flex-row gap-4' >
                <Link href='/' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Demo
                  </button>
                  </Link>
                  <Link href='/' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Code
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='row'>
            <Image src={Webone} alt='MyImage' />
              <div className='layer'>
                <h5>Form Validation</h5>
                <p>Using Next.js with tailwind.css and typescript</p>
                <div className='flex flex-row gap-4' >
                <Link href='https://form-validation-peach.vercel.app' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Demo
                  </button>
                  </Link>
                  <Link href='https://github.com/M-Hassan1/Form-Validation' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Code
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='row'>
            <Image src={Working} alt='MyImage' />
              <div className='layer'>
                <h5>NavBarn</h5>
                <p>Responsive Navbar Using Html5 Css&JavaScript</p>
                <div className='flex flex-row gap-4' >
                <Link href='/ErrorPage' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Demo
                  </button>
                  </Link>
                  <Link href='https://github.com/M-Hassan1' target="_blank" >
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Code
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='row'>
            <Image src={sideBar} alt='MyImage' />
              <div className='layer'>
                <h5>Ui and Ux Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo</p>
                <div className='flex flex-row gap-4' >
                <Link href='/' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Demo
                  </button>
                  </Link>
                  <Link href='/' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Code
                  </button>
                  </Link>
                </div>
              </div>
            </div>   
            <div className='row'>
            <Image src={Fiveweb} alt='MyImage' />
              <div className='layer'>
                <h5>Ui and Ux Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo</p>
                <div className='flex flex-row gap-4' >
                <Link href='/' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Demo
                  </button>
                  </Link>
                  <Link href='/' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Code
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='row'>
            <Image src={portfolio} alt='MyImage' />
              <div className='layer'>
                <h5>Ui and Ux Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo</p>
                <div className='flex flex-row gap-4' >
                <Link href='/' target="_blank" >
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Demo
                  </button>
                  </Link>
                  <Link href='/' target="_blank" >
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Code
                  </button>
                  </Link>
                </div>
              </div>
            </div>   
            <div  className='row'>
            <Image src={Webfour} alt='MyImage' />
              <div className='layer'>
                <h5>Ui and Ux Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo</p>
                <div className='flex flex-row gap-4' >
                <Link href='/' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Demo
                  </button>
                  </Link>
                  <Link href='/' target="_blank">
                  <button className='bg-blue-500 hover:bg-blue-400 p-2 rounded-md'>
                    Code
                  </button>
                  </Link>
                </div>
              </div>
            </div>  
          </div>
      </div>

    </div>
  )
}

export default ExperiencePage;
