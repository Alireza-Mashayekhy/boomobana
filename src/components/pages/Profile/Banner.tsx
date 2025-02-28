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
      <div className='flex absolute bottom-0 left-11 translate-y-1/2 gap-6 px-5 py-3 rounded-lg bg-secondary-21 shadow-lg'>
        <Link href='/'>
          <BsInstagram size={24} />
        </Link>
        <Link href='/'>
          <BsTwitter size={24} />
        </Link>
        <Link href='/'>
          <BsYoutube size={24} />
        </Link>
        <Link href='/'>
          <BsTelegram size={24} />
        </Link>
        <Link href='/'>
          <BsLinkedin size={24} />
        </Link>
        <Link href='/'>
          <BsWhatsapp size={24} />
        </Link>
      </div>
    </div>
  );
};
