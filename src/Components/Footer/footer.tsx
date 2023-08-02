"use client"

import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Footer: React.FC = () => {
    
    

    useEffect(() => {
    // Initialize the Typed.js effect on the element with ID "typed"
    const typed = new Typed('#typed', {
      strings: ['Thanks For Visiting My Website.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <footer className="p-4 bg-gray-800 text-center">
      <div className="container mx-auto">
        <div className="mb-4">
          <span className='text-green-500' id="typed"></span>
        </div>
        <div className='m-4 text-white'>
            <p>© 2023 Muhammad Hassan All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
