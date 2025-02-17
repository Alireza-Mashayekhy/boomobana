import Image from 'next/image';
import Link from 'next/link';
import { FaBlog, FaBookmark, FaUser } from 'react-icons/fa';
import { IoMdChatboxes, IoMdNotifications } from 'react-icons/io';

import Button from '../Button';
import { GlobalSearch } from '../GlobalSearch';
import { Tooltip } from '../Tooltip';

export const Nav = () => {
  return (
    <div className='fixed lg:top-5 lg:left-1/2 lg:-translate-x-1/2 z-40 w-full lg:w-[calc(100vw-40px)] max-w-[1400px] bg-secondary-22/50  backdrop-blur-lg lg:rounded-xl flex justify-between items-center py-2 px-5 shadow-xl lg:shadow-none'>
      <div className='flex items-center justify-between gap-5 lg:gap-10 w-full lg:w-fit'>
        <Image src='/logo.svg' alt='Boomobana' width={50} height={100} className='w-8 lg:w-[50px]' />
        <GlobalSearch />
      </div>
      <div className='hidden lg:flex items-center text-secondary-1 gap-4'>
        <Tooltip target='.blogIcon' position='bottom'>
          <Link href='/'>
            <FaBlog className='blogIcon text-xl' data-pr-tooltip='مقاله' />
          </Link>
        </Tooltip>
        <Tooltip target='.bookmarkIcon' position='bottom'>
          <Link href='/'>
            <FaBookmark className='bookmarkIcon text-xl' data-pr-tooltip='ذخیره شده ها' />
          </Link>
        </Tooltip>
        <Tooltip target='.notificationIcon' position='bottom'>
          <Link href='/'>
            <IoMdNotifications className='notificationIcon text-2xl' data-pr-tooltip='اعلان ها' />
          </Link>
        </Tooltip>
        <Tooltip target='.chatBoxIcon' position='bottom'>
          <Link href='/'>
            <IoMdChatboxes className='chatBoxIcon text-2xl' data-pr-tooltip='چت' />
          </Link>
        </Tooltip>
        <Tooltip target='.userIcon' position='bottom'>
          <Link href='/'>
            <FaUser className='userIcon text-xl' data-pr-tooltip='پنل کاربری' />
          </Link>
        </Tooltip>
        <Button label='ثبت رایگان آگهی' customClasses='px-5' />
      </div>
    </div>
  );
};
