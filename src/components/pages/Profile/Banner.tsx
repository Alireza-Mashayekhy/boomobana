import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsLinkedin, BsTelegram, BsTwitter, BsWhatsapp, BsYoutube } from 'react-icons/bs';

export const Banner = () => {
  return (
    <div className='relative w-full h-[300px] mt-11 mb-16'>
      <Image
        className='object-cover h-full w-full rounded-2xl'
        src='/images/homeBanner.jpg'
        alt='home banner'
        width={1700}
        height={900}
        loading='lazy'
      />
      <div className='flex text-xl sm:text-2xl absolute bottom-0 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-11 translate-y-1/2 gap-6 px-5 py-3 rounded-lg bg-secondary-21 shadow-lg'>
        <Link href='/'>
          <BsInstagram />
        </Link>
        <Link href='/'>
          <BsTwitter />
        </Link>
        <Link href='/'>
          <BsYoutube />
        </Link>
        <Link href='/'>
          <BsTelegram />
        </Link>
        <Link href='/'>
          <BsLinkedin />
        </Link>
        <Link href='/'>
          <BsWhatsapp />
        </Link>
      </div>
    </div>
  );
};
