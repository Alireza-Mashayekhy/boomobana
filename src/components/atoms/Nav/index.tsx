import Image from 'next/image';
import Link from 'next/link';
import { FaBlog, FaBookmark, FaUser } from 'react-icons/fa';
import { IoMdChatboxes, IoMdNotifications } from 'react-icons/io';

import Button from '../Button';
import { GlobalSearch } from '../GlobalSearch';
import { Tooltip } from '../Tooltip';

export const Nav = () => {
  return (
    <div className='fixed top-5 left-5 w-[calc(100vw-40px)] bg-secondary-22/50  backdrop-blur-lg rounded-xl flex justify-between items-center py-2 px-5'>
      <div className='flex items-center gap-10'>
        <Image src='/logo.svg' alt='Boomobana' width={50} height={100} />
        <GlobalSearch />
      </div>
      <div className='flex items-center text-secondary-22 gap-4'>
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
