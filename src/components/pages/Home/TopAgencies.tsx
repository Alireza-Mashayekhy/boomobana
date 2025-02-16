'use client';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import TopAgencyCard from '@/components/atoms/TopAgencyCard';

const TopAgencies = () => {
  const agencies = [...Array.from({ length: 20 })];

  return (
    <div className='p-12'>
      <h2 className='text-3xl font-bold mb-10 text-center'>آژانس های املاک برتر </h2>
      <p className='text-xl mb-10 text-center'>برترین آژانس های املاک بر اساس تجربه و نظرات کاربران</p>
      <Swiper slidesPerView={7} spaceBetween={14} loop className='mySwiper'>
        {agencies.map((agency, index) => {
          return (
            <SwiperSlide key={`agency-${index}`}>
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
