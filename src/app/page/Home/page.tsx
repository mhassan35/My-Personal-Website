import { BsYoutube} from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbBrandFiverr } from "react-icons/tb";
import Link from 'next/link';

const HomePage = () => {
  return (
    <div id='Home' className='w-full h-screen relative pt-10 text-left'>
        <div className='max-w-screen-xl pb-20 w-full h-full mx-auto p-4 flex flex-col justify-center items-center'>
          <div>
            <div className='py-2'>
              <h1 className='text-gray-900 py-2 font-oswald font-700 text-2xl md:text-4xl'>Welcome to My Portfolio</h1> 
              <h1 className='text-gray-800 text-center text-xl md:text-2xl'>My self Muhammad Hassan</h1>
            </div>
            <div>
              <p className='font-400 text-[17px] bg-gray-200 rounded-lg p-4 hover:scale-105 duration-700 font-roboto max-w-2xl mx-auto text-gray-700'>
              As a web developer, I specialize in creating responsive, user-centric websites and web applications. My goal is to deliver functional, visually appealing solutions tailored to meet the unique needs of each client.
              In addition, I am actively expanding my knowledge of Artificial Intelligence, exploring its potential to enhance web development, improve user experiences, and automate processes. The integration of AI into my work allows me to create smarter, more personalized applications.
              </p>
            </div>

            <div className='flex items-center justify-center space-x-5 md:space-x-6 py-4'>
              <Link href='https://www.linkedin.com/in/mhassanmajeed' target='_blank'>
                <div
                  title='Linkedin Account'
                  className='rounded-full bg-[#0077B5] shadow-[0px_1px_1px_2px_rgba(0,0,0,0.4)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
                >
                  <FaLinkedin className='text-white' />
                </div>
              </Link>
              <Link href='https://github.com/mhassan35' target='_blank'>
                <div
                  title='Github Account'
                  className='rounded-full bg-[#1B1F24] shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
                >
                  <FaGithub className='text-white' />
                </div>
              </Link>
              <Link href='https://www.fiverr.com/mhassan011' target='_blank'>
                <div
                  title='Personal Link'
                  className='rounded-full bg-[#1DBF73] shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-300 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300'
                >
                  <TbBrandFiverr className='text-white' />
                </div>
              </Link>
              <Link href='https://github.com/mhassan35' target='_blank'>
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
  );
};

export default HomePage;
