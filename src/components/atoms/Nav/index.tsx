import Image from 'next/image';
import Link from 'next/link';
import { FaBlog, FaUser } from 'react-icons/fa';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { HiSaveAs } from 'react-icons/hi';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { MdAddLink, MdNotificationsActive } from 'react-icons/md';

import { Tooltip } from '../Tooltip';

export const Nav = () => {
  return (
    <div className='absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 z-40 w-full max-w-[1180px] bg-secondary-1/70  backdrop-blur-lg lg:rounded-b-xl flex justify-between items-center py-2 px-5 shadow-xl lg:shadow-none'>
      <div className='flex items-center justify-between gap-5 lg:gap-10 w-full lg:w-fit'>
        <Image src='/logo.svg' alt='Boomobana' width={50} height={100} className='w-8 lg:w-[40px]' />
        <Tooltip target='.userIcon' position='bottom'>
          <div
            data-pr-tooltip='جستجو'
            className='aspect-square cursor-pointer userIcon rounded-full text-white transition-colors w-10 h-10 flex items-center justify-center'>
            <GiMagnifyingGlass size={24} />
          </div>
        </Tooltip>
      </div>
      <div className='flex items-center justify-end gap-10'>
        <Tooltip target='.blogIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='مقاله'
            className='aspect-square blogIcon rounded-full text-white transition-colors w-10 h-10 flex items-center justify-center'>
            <FaBlog size={22} />
          </Link>
        </Tooltip>
        <Tooltip target='.bookmarkIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='ذخیره شده ها'
            className='aspect-square bookmarkIcon rounded-full text-white transition-colors w-10 h-10 flex items-center justify-center'>
            <HiSaveAs size={26} />
          </Link>
        </Tooltip>
        <Tooltip target='.notificationIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='اعلان ها'
            className='aspect-square notificationIcon rounded-full text-white transition-colors w-10 h-10 flex items-center justify-center'>
            <MdNotificationsActive size={24} />
          </Link>
        </Tooltip>
        <Tooltip target='.chatBoxIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='چت'
            className='aspect-square chatBoxIcon rounded-full text-white transition-colors w-10 h-10 flex items-center justify-center'>
            <HiChatBubbleLeftRight size={24} />
          </Link>
        </Tooltip>
        <Tooltip target='.userIcon' position='bottom'>
          <Link
            href='/'
            data-pr-tooltip='پنل کاربری'
            className='aspect-square userIcon rounded-full  text-white transition-colors w-10 h-10 flex items-center justify-center'>
            <FaUser size={20} />
          </Link>
        </Tooltip>
        <button className='flex shadow-main items-center gap-1 p-2 px-4 bg-primary-1 rounded-[10px] text-white'>
          <MdAddLink size={24} />
          <div>ثبت رایگان آگهی</div>
        </button>
      </div>
    </div>
  );
};
