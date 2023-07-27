

import React from 'react'
import Link from 'next/link'

const data = [
  {id: 1, name: "Home", url: "/"},
  {id: 2, name: "About", url: "/"},
  {id: 3, name: "Skills", url: "/"},
  {id: 4, name: "Experience", url: "/"},
  {id: 5, name: "Contect", url: "/"},
];


type MenuButtonsProps = {
  showDesktopMenu: boolean;
  setShowDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuButtons: React.FC<MenuButtonsProps> = ({ showDesktopMenu, setShowDesktopMenu }) => {
  return (
    <ul className='hidden md:flex items-center gap-8 text-black'>
      {data.map((item) => {
        return (
          <li className='cursor-pointer' key={item.id}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuButtons;
