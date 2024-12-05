"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import MenuButtons from '../../../utils/NavabrData/MenuButtons';
import MobileSideBar from '@/Components/views/NavBer/SideBarPage/MobileSideBar';
import Wrapper from '../../../utils/NavabrData/wrapper';

const NavBarPage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavBar = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY > 200) {
      if (scrollY > lastScrollY && !isMobileMenuOpen) {
        setShow('-translate-y-[80px]');
      } else {
        setShow('shadow-sm');
      }
    } else {
      setShow('translate-y-0');
    }

    setLastScrollY(scrollY);
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavBar);
    return () => {
      window.removeEventListener('scroll', controlNavBar);
    };
  }, [controlNavBar]);

  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`w-full h-[50px] md:h-[80px] flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 backdrop-blur-lg bg-gray-200 ${show} `}>
      <Wrapper className='h-[60px] flex justify-between items-center'>
      <Link href="/" className="md:flex hidden text-center items-center justify-center">
        <button className="w-14 h-14 bg-blue-600 text-white sm:text-xl text-3xl lg:text-3xl font-bold rounded-full flex text-center items-center justify-center hover:bg-blue-700 
        transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:animate-pulse">M</button>
        <h1 className="pl-2 text-center text-xl font-semibold text-gray-800">
          Muhammad Hassan
        </h1>
    </Link>
        <MenuButtons showDesktopMenu={showDesktopMenu} setShowDesktopMenu={setShowDesktopMenu} />
        {isMobileMenuOpen && (
          <MobileSideBar
            showDesktopMenu={showDesktopMenu}
            setShowDesktopMenu={setShowDesktopMenu}
            setMobileMenu={setMobileMenuOpen}
          />
        )}
        {/* For Mobile Start Coding Here */}
        <div
          className='w-7 md:hidden md:w-12 h-8 md:h-12 relative rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer -mr-2'
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <VscChromeClose className='text-[16px]' />
          ) : (
            <BiMenuAltRight className='text-[20px]' />
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default NavBarPage;
