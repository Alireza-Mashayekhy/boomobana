'use client';

import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Title from '@/components/atoms/Title/indes';
import TopAgencyCard from '@/components/atoms/TopAgencyCard';

const TopAgencies = () => {
  const agencies = [...Array.from({ length: 20 })];

  return (
    <div className='p-12'>
      <Title
        title='آژانس های املاک برتر'
        description='برترین آژانس های املاک بر اساس تجربه و نظرات کاربران'
      />
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
