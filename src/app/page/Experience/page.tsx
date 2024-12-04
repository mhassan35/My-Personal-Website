"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import website from '@/Components/Assets/Images/e-commerce.png';
import moringa from '@/Components/Assets/Images/moringa-powder.png';
import Webone from '@/Components/Assets/Images/pic-1.png';
import weatherApp from '@/Components/Assets/Images/weather-app.png';
import Working from '@/Components/Assets/Images/pic-0.png';
import searchApp from '@/Components/Assets/Images/New-Photo Search-App.png';
import sideBar from '@/Components/Assets/Images/SideBar.png';
import CarWeb from '@/Components/Assets/Images/Travels Agency.png';
import Webfour from '@/Components/Assets/Images/pic-4.png';
import Fiveweb from '@/Components/Assets/Images/pic-5.png';
import portfolio from '@/Components/Assets/Images/portfolio website.png';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
  return (
    <div id="Experience" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-oswald text-4xl font-semibold text-indigo-600">Experience</h1>
          <h2 className="text-xl text-gray-500 mt-2">The latest projects I have created</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={website} alt="E-Commerce Website" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">E-Commerce Website</h5>
              <p className="text-gray-500 mt-2">A fully responsive and modern e-commerce platform built with advanced frameworks.</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://e-commerce-web-five-beta.vercel.app/" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/e-commerce" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={moringa} alt="Moringa Powder Website" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Moringa Powder Website</h5>
              <p className="text-gray-500 mt-2">A website for selling moringa powder, developed with a clean and simple design.</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://moringa-powder.vercel.app" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/moringa-powder" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={weatherApp} alt="Weather App" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Weather App</h5>
              <p className="text-gray-500 mt-2">A simple yet beautiful weather application built using HTML, CSS, and JavaScript.</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://weather.hassanali137.repl.co" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://replit.com/@HassanAli137/weather" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={Webone} alt="Form Validation" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Form Validation</h5>
              <p className="text-gray-500 mt-2">A form validation app built with Next.js, TypeScript, and Tailwind CSS.</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://form-validation-peach.vercel.app" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/Form-Validation" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>


           {/* Project 4 */}          
           <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={Working} alt="Form Validation" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Navbar</h5>
              <p className="text-gray-500 mt-2">A Navbar built with Next.js, TypeScript, and Tailwind CSS.</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://form-validation-peach.vercel.app" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/Form-Validation" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Project 5 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={searchApp} alt="Form Validation" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Search Photo</h5>
              <p className="text-gray-500 mt-2">A Search Photo app built with Next.js, TypeScript, and Tailwind CSS.</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://form-validation-peach.vercel.app" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/Form-Validation" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>
          {/* Project 6 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={sideBar} alt="Form Validation" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Sidebar</h5>
              <p className="text-gray-500 mt-2">A sidebar website built with Reactjs and Tailwind CSS.</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://form-validation-peach.vercel.app" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/Form-Validation" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>
          {/* Project 7 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={CarWeb} alt="Form Validation" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Car Info</h5>
              <p className="text-gray-500 mt-2">A Car info website built with reactjs</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://form-validation-peach.vercel.app" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/Form-Validation" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>
          {/* Project 8 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={Webfour} alt="Form Validation" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Calculator</h5>
              <p className="text-gray-500 mt-2">A Calculator built with simple html, css and javascript</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://form-validation-peach.vercel.app" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/Form-Validation" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>
          {/* Project 9 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={Fiveweb} alt="Form Validation" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Digital Clock</h5>
              <p className="text-gray-500 mt-2">Digital Clock using html, css and javascript </p>
              <div className="mt-4 flex gap-4">
                <Link href="https://form-validation-peach.vercel.app" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/Form-Validation" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>
          {/* Project 10 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={portfolio} alt="Form Validation" className="w-full h-60 object-cover"/>
            <div className="p-6">
              <h5 className="text-2xl font-semibold text-gray-800">Portfolio</h5>
              <p className="text-gray-500 mt-2"> Portfolio built with React</p>
              <div className="mt-4 flex gap-4">
                <Link href="https://form-validation-peach.vercel.app" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Demo</button>
                </Link>
                <Link href="https://github.com/M-Hassan1/Form-Validation" target="_blank">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Code</button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;

