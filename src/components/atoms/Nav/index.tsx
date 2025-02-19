import Image from 'next/image';
import Link from 'next/link';
import { FaRegBookmark, FaRegUser } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { MdNotificationsNone } from 'react-icons/md';
import { PiChatsBold } from 'react-icons/pi';
import { RiBloggerLine } from 'react-icons/ri';

import Button from '../Button';
import { Tooltip } from '../Tooltip';

export const Nav = () => {
  return (
    <div className='fixed lg:top-0 lg:left-1/2 lg:-translate-x-1/2 z-40 w-full max-w-[1200px] bg-secondary-22/50  backdrop-blur-lg lg:rounded-b-xl grid grid-cols-3 items-center py-2 px-5 shadow-xl lg:shadow-none'>
      <div className='flex items-center justify-between gap-5 lg:gap-10 w-full lg:w-fit'>
        <Image src='/logo.svg' alt='Boomobana' width={50} height={100} className='w-8 lg:w-[50px]' />
      </div>
      <div className='hidden lg:flex justify-center text-secondary-1 gap-4'>
        <Tooltip target='.userIcon' position='bottom'>
          <div
            data-pr-tooltip='جستجو'
            className='aspect-square cursor-pointer userIcon rounded-full bg-primary-2/80 text-white hover:bg-primary-1/80 transition-colors backdrop-blur-md w-10 h-10 flex items-center justify-center'>
            <FaMagnifyingGlass className=' text-xl' />
          </div>
        </Tooltip>
        <Tooltip target='.blogIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='مقاله'
            className='aspect-square blogIcon rounded-full bg-primary-2/80 text-white hover:bg-primary-1/80 transition-colors backdrop-blur-md w-10 h-10 flex items-center justify-center'>
            <RiBloggerLine className=' text-2xl' />
          </Link>
        </Tooltip>
        <Tooltip target='.bookmarkIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='ذخیره شده ها'
            className='aspect-square bookmarkIcon rounded-full bg-primary-2/80 text-white hover:bg-primary-1/80 transition-colors backdrop-blur-md w-10 h-10 flex items-center justify-center'>
            <FaRegBookmark className=' text-xl' />
          </Link>
        </Tooltip>
        <Tooltip target='.notificationIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='اعلان ها'
            className='aspect-square notificationIcon rounded-full bg-primary-2/80 text-white hover:bg-primary-1/80 transition-colors backdrop-blur-md w-10 h-10 flex items-center justify-center'>
            <MdNotificationsNone className=' text-2xl' />
          </Link>
        </Tooltip>
        <Tooltip target='.chatBoxIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='چت'
            className='aspect-square chatBoxIcon rounded-full bg-primary-2/80 text-white hover:bg-primary-1/80 transition-colors backdrop-blur-md w-10 h-10 flex items-center justify-center'>
            <PiChatsBold className=' text-2xl' />
          </Link>
        </Tooltip>
        <Tooltip target='.userIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='پنل کاربری'
            className='aspect-square userIcon rounded-full bg-primary-2/80 text-white hover:bg-primary-1/80 transition-colors backdrop-blur-md w-10 h-10 flex items-center justify-center'>
            <FaRegUser className=' text-xl' />
          </Link>
        </Tooltip>
      </div>
      <div className='flex justify-end'>
        <Button label='ثبت رایگان آگهی' customClasses='px-5' />
      </div>
    </div>
  );
};
