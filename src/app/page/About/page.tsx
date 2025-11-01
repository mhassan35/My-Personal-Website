"use client"
import Image from 'next/image'
import React from 'react'
import ResponsiveImg from '@/Assets/Images/downloading.svg'
import { Link } from 'react-scroll'
  
const AboutPage = () => {
  return (
    <div id="About" className="w-full px-6 py-20">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section: Text and Description */}
        <div className="space-y-6">
          <h2 className="font-oswald text-4xl font-semibold text-indigo-600">About Me</h2>
          <h1 className="text-3xl font-bold text-gray-800">Hi, I am Muhammad Hassan</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am a passionate web developer who specializes in creating sleek, user-friendly websites and web applications. 
            With expertise in front-end technologies, I focus on building highly responsive and visually appealing solutions 
            for my clients. I am also actively exploring Artificial Intelligence to bring smarter, more intuitive applications to life.
          </p>
          <p className="text-lg text-gray-600">
            I thrive on innovation and creating solutions that enhance the digital experience for users, making each interaction seamless and meaningful.
          </p>

          {/* CTA Button */}
          <div className="flex justify-start">
            <Link to="Contact" smooth={true} duration={500} className="px-8 py-3 cursor-pointer text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"> 
              Lets Connect
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-xs shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
            <Image
              src={ResponsiveImg}
              alt="Illustration of a Developer"
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* AI Section */}
      <div className="mt-20 text-center px-6 py-10 bg-white shadow-lg rounded-xl mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Exploring AI in Web Development</h3>
        <p className="text-lg text-gray-600 mb-6">
          I am deeply intrigued by Artificial Intelligence and how it can elevate the user experience. By integrating AI 
          into my web development process, I aim to automate workflows, enhance personalization, and create smarter web 
          applications.
        </p>
        <p className="text-lg text-gray-600">
        The fusion of AI is revolutionizing the way we approach challenges, and I am excited to be at the forefront of this transformation.
        </p>
      </div>
    </div>
  )
}

export default AboutPage;
