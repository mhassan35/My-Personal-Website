import { BsYoutube, BsFacebook } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbBrandFiverr } from "react-icons/tb";
import BackgroundPage from '@/Components/shared/Background/BackgroundPage';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <div id='Home' className='absolute top-0 left-0 right-0 bottom-0'>
        <BackgroundPage />
      </div>
      <div className='w-full h-screen relative text-left'>
        <div className='max-w-screen-xl w-full h-full mx-auto p-4 flex flex-col justify-center items-center'>
          <div>
            <div className='py-2'>
              <h1 className='text-gray-900 py-2 font-oswald font-700 text-2xl md:text-4xl'>Welcome to My Portfolio</h1> 
              <h1 className='text-gray-800 text-center text-xl md:text-2xl'>My self Muhammad Hassan</h1>
            </div>
            <div>
              <p className='font-400 bg-gray-200 rounded-lg p-3 hover:scale-105 duration-700 font-roboto max-w-2xl mx-auto text-gray-700'>
              As a web developer, I specialize in creating responsive, user-centric websites and web applications. My goal is to deliver functional, visually appealing solutions tailored to meet the unique needs of each client.
              In addition, I'm actively expanding my knowledge of Artificial Intelligence, exploring its potential to enhance web development, improve user experiences, and automate processes. The integration of AI into my work allows me to create smarter, more personalized applications.
              </p>
            </div>

            <div className='flex items-center justify-center space-x-5 md:space-x-6 py-4'>
              <Link href='https://www.linkedin.com/in/muhammad-hassan-86b302293' target='_blank'>
                <div
                  title='Linkedin Account'
                  className='rounded-full bg-[#0077B5] shadow-[0px_1px_1px_2px_rgba(0,0,0,0.4)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
                >
                  <FaLinkedin className='text-white' />
                </div>
              </Link>
              <Link href='https://github.com/M-Hassan1' target='_blank'>
                <div
                  title='Github Account'
                  className='rounded-full bg-[#1B1F24] shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
                >
                  <FaGithub className='text-white' />
                </div>
              </Link>
              <Link href='https://www.facebook.com/profile.php?id=100084384853396' target='_blank'>
                <div
                  title='Personal Link'
                  className='rounded-full bg-[#1DBF73] shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
                >
                  <TbBrandFiverr className='text-white' />
                </div>
              </Link>
              <Link href='https://www.youtube.com/channel/UCok9epwf7EcKPV_eX1_-oNg' target='_blank'>
                <div
                  title='Send Massage On Gmail'
                  className='rounded-full bg-[#FF0000] shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300 '
                >
                  <BsYoutube className='text-white' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
