"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import MenuButtons from './MenuButtons';
import MobileSideBar from '../SideBar-For-Mobile/MobileSideBar';

import Wrapper from './wrapper';
import Image from 'next/image';
import Logophoto from '@/Components/Assets/Images/Hassan.svg'

import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'


const NavBarPage = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrolly, setlastScrolly] = useState(0)
  const controlNavBar = () => {
    if (window.scrollY > 200) {
      if(window.scrollY > lastScrolly && !MobileMenu ){
        setShow("-translate-y-[80px]")
      }
      else{
        setShow("shadow-sm")
      }

    }
    else {
      setShow("translate-y-0")
    }
    setlastScrolly(window.scrollY)
  };


  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar)  
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrolly])


  return (
    <div className={`w-full h-[50px] md:h-[80px] backdrop-filter backdrop-blur-sm bg-slate-200 bg-opacity-95 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} `}>
        <Wrapper className='h-[60px] flex justify-between items-center ' >
          <Link href='/' >
          <Image src={Logophoto} alt='LOGO' className='w-[100px] md:w-[200px]' />
          </Link>
          <MenuButtons showDesktopMenu={showDesktopMenu} 
          setShowDesktopMenu={setShowDesktopMenu} />

          {MobileMenu && (<MobileSideBar showDesktopMenu={showDesktopMenu} 
          setShowDesktopMenu={setShowDesktopMenu} 
          setMobileMenu={setMobileMenu}
         />)}
              {/* For Mobile Start Coding Here */}
            <div className='w-7 md:hidden md:w-12 h-8 md:h-12 relative rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer -mr-2 ' >
              { MobileMenu ? (
                <VscChromeClose className='text-[16px]'
                onClick={ () => setMobileMenu(false)} />
              ): (
                <BiMenuAltRight className='text-[20px]'
                onClick={ () => setMobileMenu(true)} />
              )}

              </div> 
          
           </Wrapper>
    </div>
  )
}

export default NavBarPage;