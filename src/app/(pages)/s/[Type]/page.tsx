'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FaBed, FaListUl } from 'react-icons/fa';
import { PiSquaresFourFill } from 'react-icons/pi';
import { TbHomeDollar, TbHomeSignal } from 'react-icons/tb';

import { Advs } from '@/components/pages/Search/Advs';
import { Filters } from '@/components/pages/Search/Filters';
import { Items } from '@/components/pages/Search/Items';

export default function Type() {
  const [isListFromat, setListFromat] = useState(false);

  const params = useParams();

  return (
    <div className='relative'>
      <div className='sticky top-0 w-full bg-white z-[2] py-5 px-1.5 flex flex-col gap-4'>
        <div className='flex flex-col lg:flex-row items-center gap-4'>
          <div className='flex items-center gap-4'>
            <div
              className='cursor-pointer hidden sm:block'
              onClick={() => {
                setListFromat((prev) => !prev);
              }}>
              {isListFromat ? <PiSquaresFourFill size={28} /> : <FaListUl size={28} className='rotate-180' />}
            </div>
            <input
              type='text'
              placeholder='جستجوی _ شهر _ فایل _ اقامتگاه_وجاذبه های گردشگری'
              className='border border-black outline-none rounded-lg px-6 py-2 text-xs sm:text-sm w-80 sm:w-96'
            />
          </div>
          <div className='grid grid-cols-3 gap-2 sm:gap-5 text-sm'>
            <Link
              href={params.Type === 'buy-sell' ? '/s' : '/s/buy-sell'}
              className={`border border-black rounded-md py-2 text-center px-2 sm:px-4 flex items-center gap-2 text-xs sm:text-sm ${
                params.Type === 'buy-sell' && 'bg-primary-1 text-white  '
              }`}>
              <TbHomeSignal size={20} /> خرید و فروش
            </Link>
            <Link
              href={params.Type === 'mortgage-rent' ? '/s' : '/s/mortgage-rent'}
              className={`border border-black rounded-md py-2 text-center px-2 sm:px-4 flex items-center gap-2 text-xs sm:text-sm ${
                params.Type === 'mortgage-rent' && 'bg-primary-1 text-white '
              }`}>
              <TbHomeDollar size={20} /> رهن و اجاره
            </Link>
            <Link
              href={params.Type === 'villa-residence' ? '/s' : '/s/villa-residence'}
              className={`border border-black rounded-md py-2 text-center px-2 sm:px-4 flex items-center gap-2 text-xs sm:text-sm ${
                params.Type === 'villa-residence' && 'bg-primary-1 text-white '
              }`}>
              <FaBed size={20} /> ویلا و اقامتگاه
            </Link>
          </div>
        </div>
        <div className='flex lg:flex-col gap-2 sm:gap-4'>
          <Filters />
          <Items />
        </div>
      </div>
      <Advs listView={isListFromat} />
    </div>
  );
}
