'use client';

import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import TopAgencyCard from '@/components/atoms/TopAgencyCard';

const TopAgencies = () => {
  const agencies = [...Array.from({ length: 20 })];

  return (
    <div className='py-12'>
      <h2 className='text-3xl font-bold mb-10 text-center'>آژانس های املاک برتر </h2>
      <p className='text-xl mb-10 text-center'>برترین آژانس های املاک بر اساس تجربه و نظرات کاربران</p>
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
            <SwiperSlide key={`agency-${index}`} className='w-full max-w-48'>
              <TopAgencyCard
                name='آژانس املاک  رویا'
                image='/images/Home/agency.png'
                description='تهران -نیاوران - بش سه راه آزادی'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopAgencies;
