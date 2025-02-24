'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { AiFillAlert, AiFillTag } from 'react-icons/ai';
import { FaBed, FaListUl, FaSwimmingPool } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { MdOutlineHomeWork } from 'react-icons/md';
import { PiLadderSimpleBold, PiSquaresFourFill } from 'react-icons/pi';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { SiApachejmeter, SiHomeassistant } from 'react-icons/si';
import {
  TbDisabled,
  TbHomeCog,
  TbHomeDollar,
  TbHomeShare,
  TbHomeSignal,
  TbSortDescending
} from 'react-icons/tb';

import { Advs } from '@/components/pages/Search/Advs';
import { FilterItem } from '@/components/pages/Search/FilterItem';

export default function Type() {
  const [isListFromat, setListFromat] = useState(false);
  const [value, setValue] = useState(0);

  const params = useParams();

  const villaItems = [
    {
      name: 'رزو آنی  ',
      icon: <AiFillAlert size={24} />
    },
    {
      name: 'استخردار ',
      icon: <FaSwimmingPool size={24} />
    },
    {
      name: 'ویژه معلولین  ',
      icon: <TbDisabled size={24} />
    },
    {
      name: 'تخفیف دار ',
      icon: <RiDiscountPercentFill size={24} />
    },
    {
      name: 'بیشترین امتیاز ',
      icon: <IoIosStar size={24} />
    }
  ];

  const otherItems = [
    {
      name: 'فوری',
      icon: <AiFillAlert size={24} />
    },
    {
      name: 'اگازیون',
      icon: <AiFillTag size={24} />
    },
    {
      name: 'نردبان',
      icon: <PiLadderSimpleBold size={24} />
    },
    {
      name: 'تهاتر',
      icon: <SiHomeassistant size={24} />
    }
  ];

  return (
    <div className='relative'>
      <div className='sticky top-0 w-full bg-white z-[2] py-5 px-1.5 flex flex-col gap-4'>
        <div className='flex items-center gap-6'>
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
              className={`border border-black rounded-md py-2 px-4 flex items-center gap-2 ${
                params.Type === 'buy-sell' && 'bg-primary-1 text-white  '
              }`}>
              <TbHomeSignal size={20} /> خرید و فروش
            </Link>
            <Link
              href='/s/mortgage-rent'
              className={`border border-black rounded-md py-2 px-4 flex items-center gap-2 ${
                params.Type === 'mortgage-rent' && 'bg-primary-1 text-white '
              }`}>
              <TbHomeDollar size={20} /> رهن و اجاره
            </Link>
            <Link
              href='/s/villa-residence'
              className={`border border-black rounded-md py-2 px-4 flex items-center gap-2 ${
                params.Type === 'villa-residence' && 'bg-primary-1 text-white '
              }`}>
              <FaBed size={20} /> ویلا و اقامتگاه
            </Link>
          </div>
        </div>
        {params.Type === 'villa-residence' ? (
          <div className='flex gap-2.5'>
            <FilterItem title='نوع اقامتگاه' icon={<MdOutlineHomeWork size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='قیمت' icon={<TbHomeDollar size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='تاریخ رزرو' icon={<TbHomeCog size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='تعداد نفرات ' icon={<SiApachejmeter size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='امکانات  ' icon={<FaBed size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='مقررارت ' icon={<FaBed size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
          </div>
        ) : (
          <div className='flex gap-2.5'>
            <FilterItem title='نوع اقامتگاه' icon={<MdOutlineHomeWork size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='قیمت' icon={<TbHomeDollar size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='سن بنا' icon={<TbHomeCog size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='متراژ' icon={<SiApachejmeter size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='تعداد خواب' icon={<FaBed size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
            <FilterItem title='امکانات' icon={<TbHomeShare size={20} />}>
              <div className='p-5'>test</div>
            </FilterItem>
          </div>
        )}
      </div>
      <div className='grid grid-cols-3'>
        <div className='w-fit'>
          <FilterItem title='مرتب سازی بر اساس' icon={<TbSortDescending />}>
            <div className='p-5'>test</div>
          </FilterItem>
        </div>
        {params.Type === 'villa-residence' ? (
          <div className='flex items-center relative justify-center gap-5 mb-5'>
            {villaItems.map((item, index) => {
              return (
                <div
                  onClick={() => setValue(index)}
                  key={item.name + index}
                  className={`flex whitespace-nowrap items-center gap-1 p-1 cursor-pointer ${
                    value === index ? 'text-primary-1 border-b border-primary-1' : ''
                  }`}>
                  {item.icon}
                  {item.name}
                </div>
              );
            })}
          </div>
        ) : (
          <div className='flex items-center relative justify-center gap-5 mb-5'>
            {otherItems.map((item, index) => {
              return (
                <div
                  onClick={() => setValue(index)}
                  key={item.name + index}
                  className={`flex whitespace-nowrap items-center gap-1 p-1 cursor-pointer ${
                    value === index ? 'text-primary-1 border-b border-primary-1' : ''
                  }`}>
                  {item.icon}
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
        <div />
      </div>
      <Advs listView={isListFromat} />
    </div>
  );
}
