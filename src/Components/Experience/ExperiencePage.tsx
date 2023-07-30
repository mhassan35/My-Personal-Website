import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Working from '@/Components/Assets/Images/pic-0.png'
import Webone from '@/Components/Assets/Images/pic-1.png'
import Twoweb from '@/Components/Assets/Images/pic-2.png'
import Threeweb from '@/Components/Assets/Images/pic-3.png'
import Webfour from '@/Components/Assets/Images/pic-4.png'
import Fiveweb from '@/Components/Assets/Images/pic-5.png'

const ExperiencePage = () => {
  return (
    <div className='project' >
      <div className='pt-32 mt-52  '>
        <h1 className='p-4 text-4xl text-[#3C82F6] '>Experience</h1>
        <h2 className='p-4 text-2xl text-gray-500 leading-none'>
          The latest project I have created
          </h2>
          <div className='p-4 grid gap-8 lg:grid-cols-2 md:grid-cols-2'>
            <div id='row' className='row'>
            {/* <div className='img' >my image hare</div> */}
            <Image src={Working} alt='MyImage' />
              <div className='layer'>
                <h5>Ux and Ui Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo</p>
                <Link href='/' className='bx bx-link' >icons</Link>
              </div>
            </div>
            <div id='row' className='row'>
            {/* <div className='img' >my image hare</div> */}
            <Image src={Working} alt='MyImage' />
              <div className='layer'>
                <h5>Ux and Ui Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo</p>
                <Link href='/' className='bx bx-link' >icons</Link>
              </div>
            </div>
            <div id='row' className='row'>
            {/* <div className='img' >my image hare</div> */}
            <Image src={Working} alt='MyImage' />
              <div className='layer'>
                <h5>Ux and Ui Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo</p>
                <Link href='/' className='bx bx-link' >icons</Link>
              </div>
            </div>
            <div id='row' className='row'>
            {/* <div className='img' >my image hare</div> */}
            <Image src={Working} alt='MyImage' />
              <div className='layer'>
                <h5>Ux and Ui Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo</p>
                <Link href='/' className='bx bx-link' >icons</Link>
              </div>
            </div>
            <div id='row' className='row'>
              {/* <div className='img' >my image hare</div> */}
            <Image src={Working} alt='MyImage' />
              <div className='layer'>
                <h5>Ux and Ui Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo</p>
                <Link href='/' className='bx bx-link' >icons</Link>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default ExperiencePage





// import Link from 'next/link';
// import React from 'react';

// const ExperiencePage = () => {
//   return (
//     <div className='project'>
//       <div className='pt-32 mt-52'>
//         <h2 className='text-4xl leading-none text-center'>
//           The latest project I have created
//         </h2>
//         <div className='grid gap-8 lg:grid-cols-[minmax(350px,auto),auto]'>
//           {/* First grid item */}
//           <div className='row'>
//             <div className='img'>my image here</div>
//             <div className='layer'>
//               <h5>Ux and Ui Design</h5>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit labore nemo
//               </p>
//               <Link href='/' className='bx bx-link'>
//                 icons
//               </Link>
//             </div>
//           </div>

//           {/* Add more grid items as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperiencePage;
