"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import MenuButtons from '../../../utils/NavabrData/MenuButtons';
import MobileSideBar from '@/Components/views/NavBer/SideBarPage/MobileSideBar';
import Wrapper from '../../../utils/NavabrData/wrapper';
import Logophoto from '@/Components/Assets/Images/Hassan.svg';

const NavBarPage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavBar = () => {
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
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavBar);
    return () => {
      window.removeEventListener('scroll', controlNavBar);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`w-full h-[50px] md:h-[80px] flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 backdrop-blur-lg bg-gray-300 bg-opacity-50 ${show} `}>
      <Wrapper className='h-[60px] flex justify-between items-center'>
        <Link href='/'>
          <Image src={Logophoto} alt='LOGO' className='w-[100px] md:w-[200px]' />
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
