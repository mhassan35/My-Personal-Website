// import React from 'react'
// import Link from 'next/link'


// const data = [
//   {id: 1, name: "Home", url: "/"},
//   {id: 2, name: "AboutProduct", url: "/AboutPageRo"},
//   {id: 3, name: "BeneFits", url: "/"},
//   {id: 4, name: "Uses", url: "/UsesPage"},
//   {id: 5, name: "Blogs", url: "/Blogpage"},
// ];

// type MobileSideBarProps = {
//   showDesktopMenu: boolean;
//   setShowDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
//   setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const MobileSideBar: React.FC<MobileSideBarProps> = ({ showDesktopMenu, setShowDesktopMenu, setMobileMenu }) => {
//   return (
//     <ul className='flex flex-col absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white md:hidden font-bold border-t text-black' >
//       {data.map((item) =>{
//         return (
//           <li key={item.id} className='py-4 px-5 border-b'>
//             <Link href={item.url} onClick={() => setMobileMenu(false)} >
//               {item.name}
//             </Link>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

// export default MobileSideBar;





"use client"
import React from 'react'
import Link from 'next/link'
import { BsChevronDown } from "react-icons/bs"



const data = [
  {id: 1, name: "Home", url: "/"},
  {id: 2, name: "About", url: "/"},
  {id: 3, name: "Categories", subMenu: true},
  {id: 4, name: "Contact", url: "/"}
]
const SubMenuData = [
  {id: 1, name: "Running Shoes", url: "/contact" },
  {id: 2, name: "FootBall Shoes" },
  {id: 3, name: "Jogging Shoes " },
  {id: 4, name: "Simple Shoes" }
]

type MobileSideBarProps = {
    showDesktopMenu: boolean;
    setShowDesktopMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  };


  const MobileSideBar: React.FC<MobileSideBarProps> = ({ showDesktopMenu, setShowDesktopMenu, setMobileMenu }) => {
  
  
  
  return (
    <ul className='flex flex-col absolute top-[50px] left-0 w-full h-[calc(100vh-50px)]
    bg-white md:hidden font-bold border-t text-black' >
    {data.map((item) =>{
      return (
        <React.Fragment key={item.id} >
          {!!item?.subMenu ? (
            <li className='cursor-pointer py-4 px-5 border-b flex flex-col relative' onClick={() => setShowDesktopMenu(!showDesktopMenu)} >
              <div className='flex justify-between items-center' >

              {item.name}
              <BsChevronDown size={14}  />
              </div>
              {showDesktopMenu && (
                <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4' >
                  {SubMenuData.map((subMenu)=>{
                  return(
                    <Link key={subMenu.id} href='/contact' onClick={() => {
                        setShowDesktopMenu(false), 
                        setMobileMenu(false) }} >

                      <li className='py-4 px-8 border-t flex justify-between '>
                        {subMenu.name}
                        <span className='opacity-50 text-sm '>78</span>
                        </li>
                    </Link>
                  )
                })}
                </ul>
              )}
            </li>
          ) : (
            <li className='py-4 px-5 border-b'>
              <Link href='/' onClick={() => setMobileMenu(false)} >
              {item.name}
              </Link>
              </li>
          ) }
        </React.Fragment>
      )
    } 
    
    )}

    </ul>
  )
}

export default MobileSideBar;