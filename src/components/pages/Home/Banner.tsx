'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GlobalSearch } from '@/components/atoms/GlobalSearch';

export default function Banner() {
  return (
    <div className='h-screen min-h-[555px] w-full overflow-hidden relative'>
      <Swiper
        direction={'vertical'}
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        className='h-full w-full'>
        <SwiperSlide className='h-full'>
          <Image
            className='object-cover h-full w-full'
            src='/images/homeBanner.jpg'
            alt='home banner'
            width={1700}
            height={900}
          />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Image
            className='object-cover h-full w-full'
            src='/images/homeBanner.jpg'
            alt='home banner'
            width={1700}
            height={900}
          />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Image
            className='object-cover h-full w-full'
            src='/images/homeBanner.jpg'
            alt='home banner'
            width={1700}
            height={900}
          />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Image
            className='object-cover h-full w-full'
            src='/images/homeBanner.jpg'
            alt='home banner'
            width={1700}
            height={900}
          />
        </SwiperSlide>
      </Swiper>
      <div className='bg-secondary-1/50  w-[90%] md:w-fit rounded-2xl backdrop-blur-md border border-secondary-22/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] p-8 lg:p-12 lg:pb-28'>
        <h1 className='text-4xl md:text-5xl text-white font-bold text-center'>بوم و بنا</h1>
        <h2 className='md:text-lg text-center text-white my-10'>به جستجوی حرفه ای ملک و اقامتگاه بپردازید</h2>
        <div className='md:w-[500px]'>
          <GlobalSearch />
        </div>
      </div>
    </div>
  );
}
