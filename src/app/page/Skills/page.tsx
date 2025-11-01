import React from 'react';
import Image from 'next/image';
import { skills } from '@/utils/skillsData';

const Skills = () => {
  return (
    <div id='Skills' className='w-full pt-20'>
      <div className="text-center mb-2">
        <h1 className="font-oswald text-4xl font-semibold text-indigo-600">Skills</h1>
        <h2 className="text-xl text-gray-500 mt-2">Advanced Technology</h2>
      </div>
      <div className='p-3 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='p-8 shadow-[0px_3px_3px_4px_rgba(130,100,120,0.3)] hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={skill.imgSrc} alt={skill.altText} width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{skill.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
