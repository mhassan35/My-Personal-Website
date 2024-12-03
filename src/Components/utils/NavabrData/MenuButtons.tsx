import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Skills", scrollTo: "Skills" },
  { id: 3, name: "Experience", scrollTo: "Experience" },
  { id: 4, name: "About", scrollTo: "About" },
  { id: 5, name: "Contact", scrollTo: "Contact" },
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
          <a href={item.url}>{item.name}</a>
        )}
      </li>
    );
  })}
</ul>
  );
};

export default MenuButtons;