'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBed, FaListUl } from 'react-icons/fa';
import { PiSquaresFourFill } from 'react-icons/pi';
import { TbHomeDollar, TbHomeSignal } from 'react-icons/tb';

import { Advs } from '@/components/pages/Search/Advs';

export default function SearchPage() {
  const [isListFromat, setListFromat] = useState(false);
  return (
    <div className='relative'>
      <div className='flex items-center sticky top-0 w-full bg-white py-5 px-1.5 z-[2] gap-6'>
        <div
          className='cursor-pointer'
          onClick={() => {
            setListFromat((prev) => !prev);
          }}>
          {isListFromat ? <PiSquaresFourFill size={28} /> : <FaListUl size={28} className='rotate-180' />}
        </div>
        <input
          type='text'
          placeholder='جستجوی _ شهر _ فایل _ اقامتگاه_وجاذبه های گردشگری'
          className='border border-black outline-none rounded-lg px-6 py-2 text-sm w-96'
        />
        <div className='grid grid-cols-3 gap-5 text-sm'>
          <Link
            href='/s/buy-sell'
            className='border border-black rounded-md py-2 px-4 flex items-center gap-2 '>
            <TbHomeSignal size={20} /> خرید و فروش
          </Link>
          <Link
            href='/s/mortgage-rent'
            className='border border-black rounded-md py-2 px-4 flex items-center gap-2 '>
            <TbHomeDollar size={20} /> رهن و اجاره
          </Link>
          <Link
            href='/s/villa-residence'
            className='border border-black rounded-md py-2 px-4 flex items-center gap-2 '>
            <FaBed size={20} /> ویلا و اقامتگاه
          </Link>
        </div>
      </div>
      <Advs listView={isListFromat} />
    </div>
  );
}
