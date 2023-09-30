import React from 'react';
import Image from 'next/image';

const SkillCard = ({ imgSrc, altText, title }: any) => {
  return (
    <div className='p-8 shadow-[0px_3px_3px_4px_rgba(130,100,120,0.3)] hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center '>
        <div className='m-auto'>
          <Image src={imgSrc} alt={altText} width='64' height='64' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
