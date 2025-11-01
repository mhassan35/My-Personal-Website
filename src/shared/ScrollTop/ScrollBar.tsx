"use client"

import { useState, useEffect } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';


const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='fixed bottom-4 right-4'>
      {isVisible && (
          <button className='rounded-full bg-blue-500 animate-bounce p-4 cursor-pointer' onClick={handleClick}>
          <HiOutlineChevronDoubleUp size={20} />
          </button>
       
      )}
    </div>
  );
};

export default ScrollTopBtn;