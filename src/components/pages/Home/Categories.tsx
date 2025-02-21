'use client';

import 'swiper/css';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Title from '@/components/atoms/Title/indes';

const Categories = () => {
  const agencies = [...Array.from({ length: 20 })];

  return (
    <div className='px-5 py-8 md:p-12'>
      <Title title='دسته بندی اقامتگاه ها ' />
      <Swiper
        slidesPerView='auto'
        spaceBetween={14}
        loop
        className='mySwiper px-12'
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}>
        {agencies.map((agency, index) => {
          return (
            <SwiperSlide key={`category-${index}`} className='w-full max-w-28 md:max-w-36 pt-2 pb-7 '>
              <div className='flex bg-secondary-21 flex-col gap-2 py-4 px-3 rounded-xl md:rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition-all'>
                <Image
                  src='/images/Home/category.png'
                  alt={`category-${index}`}
                  loading='lazy'
                  className='w-full'
                  width={300}
                  height={200}
                />
                <h3 className='text-center md:text-xl'>بوم گردی </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Categories;
