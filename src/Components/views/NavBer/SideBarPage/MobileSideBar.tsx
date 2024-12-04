"use client"
import React from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll';



const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Skills", scrollTo: "Skills" },
  { id: 3, name: "Experience", scrollTo: "Experience" },
  { id: 4, name: "About", scrollTo: "About" },
  { id: 5, name: "Contact", scrollTo: "Contact" },
];

type MobileSideBarProps = {
  showDesktopMenu: boolean;
  setShowDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSideBar: React.FC<MobileSideBarProps> = ({ showDesktopMenu, setShowDesktopMenu, setMobileMenu }) => {
  return (
    <ul className='flex flex-col absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white md:hidden font-bold text-black' >
      {data.map((item) =>{
        return (
          <li className='py-4 px-5' key={item.id}>
          {item.scrollTo ? (
            <ScrollLink 
              to={item.scrollTo}
              smooth={true}
              duration={500}
              offset={50}
            >
              {item.name}
            </ScrollLink>
          ) : (
            <Link href="Home">{item.name}</Link>
          )}
        </li>
        )
      })}
    </ul>
  )
}

export default MobileSideBar;





