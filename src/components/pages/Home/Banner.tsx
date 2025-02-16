import Image from 'next/image';

import { GlobalSearch } from '@/components/atoms/GlobalSearch';

export default function Banner() {
  return (
    <div className='h-screen min-h-[555px] overflow-hidden relative'>
      <Image
        src='/images/homeBanner.jpg'
        alt='home banner'
        className='w-full h-full object-cover'
        width={1440}
        height={820}
        loading='lazy'
      />
      <div className='bg-secondary-22/30 w-[90%] md:w-fit rounded-2xl backdrop-blur-md border border-secondary-22/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] p-8 lg:p-12'>
        <h1 className='text-3xl md:text-4xl font-bold text-center'>بوم و بنا</h1>
        <h2 className='md:text-lg text-center my-6'>به جستجوی حرفه ای ملک و اقامتگاه بپردازید</h2>
        <div className='md:w-[500px]'>
          <GlobalSearch />
        </div>
      </div>
    </div>
  );
}
