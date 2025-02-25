'use client';

import { JSX, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface PropsTypes {
  children: JSX.Element;
  title: string;
  icon: JSX.Element;
}

export const FilterItem = ({ children, title, icon }: PropsTypes) => {
  const [isOpen, setStatus] = useState(false);
  return (
    <div className='relative '>
      <div
        onClick={() => setStatus(true)}
        className='flex relative items-center justify-between cursor-pointer gap-3 border border-black rounded-lg p-2'>
        <div className='flex gap-3 items-center'>
          {icon}
          <div className='text-[10px] sm:text-xs font-extralight'>{title}</div>
        </div>
        <BiChevronDown size={20} />
      </div>
      {isOpen && (
        <div className='absolute min-w-full right-0 top-10 bg-white rounded-lg shadow-xl z-[60] w-max'>
          {children}
        </div>
      )}
      {isOpen && (
        <div onClick={() => setStatus(false)} className='w-screen h-screen left-0 top-0 fixed z-[50]' />
      )}
    </div>
  );
};
