import Link from 'next/link';
import { FaBlog, FaPlus, FaUser } from 'react-icons/fa';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import { MdNotificationsActive } from 'react-icons/md';

export const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 z-40 w-full bg-secondary-1/70 backdrop-blur-lg md:hidden flex justify-between items-center py-2 px-5 shadow-xl'>
      <Link
        href='/'
        className='aspect-square blogIcon rounded-full text-white transition-colors w-10 h-10 flex items-center justify-center'>
        <FaBlog size={22} />
      </Link>
      <Link
        href='/'
        className='aspect-square notificationIcon rounded-full text-white transition-colors w-10 h-10 flex items-center justify-center'>
        <MdNotificationsActive size={24} />
      </Link>
      <Link
        href='/'
        className='aspect-square notificationIcon rounded-full text-white transition-colors w-10 h-10 flex items-center justify-center'>
        <FaPlus size={24} />
      </Link>
      <Link
        href='/'
        className='aspect-square chatBoxIcon rounded-full text-white transition-colors w-10 h-10 flex items-center justify-center'>
        <HiChatBubbleLeftRight size={24} />
      </Link>
      <Link
        href='/'
        className='aspect-square userIcon rounded-full  text-white transition-colors w-10 h-10 flex items-center justify-center'>
        <FaUser size={20} />
      </Link>
    </div>
  );
};
