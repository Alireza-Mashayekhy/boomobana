'use client';

import Image from 'next/image';
import { Divider } from 'primereact/divider';
import { useState } from 'react';
import { FaBed, FaListUl, FaPenNib } from 'react-icons/fa';
import { PiSquaresFourFill } from 'react-icons/pi';
import { TbHomePlus } from 'react-icons/tb';

import { Advs } from './Advs';
import { Filters } from './Filters';

export const Posts = () => {
  const [selectedType, setSelectedType] = useState(0);
  const [isListFromat, setListFromat] = useState(false);

  return (
    <div>
      <div className='relative flex justify-center mb-5 sm:mb-10'>
        <Image
          className='w-full absolute left-0 top-1/2 -translate-y-1/2'
          src='/images/Line.png'
          alt='Line'
          width={1700}
          height={2}
        />
        <div className='flex items-center gap-5 sm:gap-7 bg-secondary-21 py-3 px-6 sm:py-4 sm:px-8 rounded-lg relative'>
          <div
            onClick={() => setSelectedType(0)}
            className={`flex items-center gap-2 text-sm sm:text-lg font-bold transition-all cursor-pointer ${
              selectedType === 0 ? 'text-primary-1' : ''
            }`}>
            <TbHomePlus size={24} /> املاک
          </div>
          <Divider layout='vertical' pt={{ root: { className: 'border border-black m-0 h-5' } }} />
          <div
            onClick={() => setSelectedType(1)}
            className={`flex items-center gap-2 text-sm sm:text-lg font-bold transition-all cursor-pointer ${
              selectedType === 1 ? 'text-primary-1' : ''
            }`}>
            <FaBed size={24} /> اقامتگاه
          </div>
          <Divider layout='vertical' pt={{ root: { className: 'border border-black m-0 h-5' } }} />
          <div
            onClick={() => setSelectedType(2)}
            className={`flex items-center gap-2 text-sm sm:text-lg font-bold transition-all cursor-pointer ${
              selectedType === 2 ? 'text-primary-1' : ''
            }`}>
            <FaPenNib size={20} /> بلاگ
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4 mb-5 sm:mb-20'>
        <div
          className='cursor-pointer'
          onClick={() => {
            setListFromat((prev) => !prev);
          }}>
          {isListFromat ? <PiSquaresFourFill size={28} /> : <FaListUl size={28} className='rotate-180' />}
        </div>
        <Filters selectedType={selectedType} />
      </div>
      <Advs listView={isListFromat} />
    </div>
  );
};
