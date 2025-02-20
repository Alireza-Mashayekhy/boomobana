'use client';

import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import LovelyCard from '@/components/atoms/LovelyCard';
import Title from '@/components/atoms/Title/indes';

const LovelyCities = () => {
  const cities = [
    {
      name: 'کردستان',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'تهران',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'البرز',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'مشهد',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'کردستان',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'تهران',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'البرز',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'مشهد',
      image: '/images/Home/Kordestan.png'
    }
  ];

  return (
    <div className='p-12'>
      <Title title='شهرهای محبوب و پربازدید' />
      <Swiper
        slidesPerView={4}
        spaceBetween={14}
        loop
        className='mySwiper px-12'
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}>
        {cities.map((city, index) => {
          return (
            <SwiperSlide key={`category-${index}`} className='w-full pt-2 pb-7 '>
              <LovelyCard key={city.name} name={city.name} image={city.image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LovelyCities;
