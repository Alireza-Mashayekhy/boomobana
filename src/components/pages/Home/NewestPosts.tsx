'use client';

import { useState } from 'react';

import AdvCard from '@/components/atoms/AdvCard';
import Tabs from '@/components/atoms/Tabs';
import Title from '@/components/atoms/Title/indes';

const Cards = () => {
  return (
    <div className='grid grid-cols-4 gap-5 mt-7'>
      <AdvCard
        name='اجاره واحد های نوساز در فردیس کرج'
        image='/images/homeBanner.jpg'
        type='رهن اجاره'
        size={5000}
        rooms={4}
        address='البرز-فردیس-کوچه تهرانسر...'
        rent={10000000}
        mortgage={200000000}
        agency={{
          image: '/images/homeBanner.jpg',
          adviserImage: '/images/homeBanner.jpg',
          name: 'آژانس آکو',
          adviserName: 'مبینا دانه واش'
        }}
      />{' '}
      <AdvCard
        name='اجاره واحد های نوساز در فردیس کرج'
        image='/images/homeBanner.jpg'
        type='رهن اجاره'
        size={5000}
        rooms={4}
        address='البرز-فردیس-کوچه تهرانسر...'
        rent={10000000}
        mortgage={200000000}
        agency={{
          image: '/images/homeBanner.jpg',
          adviserImage: '/images/homeBanner.jpg',
          name: 'آژانس آکو',
          adviserName: 'مبینا دانه واش'
        }}
      />
      <AdvCard
        name='اجاره واحد های نوساز در فردیس کرج'
        image='/images/homeBanner.jpg'
        type='رهن اجاره'
        size={5000}
        rooms={4}
        address='البرز-فردیس-کوچه تهرانسر...'
        rent={10000000}
        mortgage={200000000}
        agency={{
          image: '/images/homeBanner.jpg',
          adviserImage: '/images/homeBanner.jpg',
          name: 'آژانس آکو',
          adviserName: 'مبینا دانه واش'
        }}
      />
      <AdvCard
        name='اجاره واحد های نوساز در فردیس کرج'
        image='/images/homeBanner.jpg'
        type='رهن اجاره'
        size={5000}
        rooms={4}
        address='البرز-فردیس-کوچه تهرانسر...'
        rent={10000000}
        mortgage={200000000}
        agency={{
          image: '/images/homeBanner.jpg',
          adviserImage: '/images/homeBanner.jpg',
          name: 'آژانس آکو',
          adviserName: 'مبینا دانه واش'
        }}
      />
    </div>
  );
};

const NewestPosts = () => {
  const [value, setValue] = useState(0);
  const tabItems = [
    {
      label: 'همه',
      children: <Cards />
    },
    {
      label: 'خرید',
      children: <Cards />
    },
    {
      label: 'رهن اجاره',
      children: <Cards />
    },
    {
      label: 'اقامتگاه',
      children: <Cards />
    }
  ];
  return (
    <div className='p-12 pt-20'>
      <Title
        title='جدید ترین آگهی ها'
        description='بهترین گزینه متناسب با نیاز و سلیقه شما ، تنها با چند کلیک در دسترس شماست'
      />
      <Tabs tabs={tabItems} activeIndex={value} onChange={(index) => setValue(index)} />
    </div>
  );
};

export default NewestPosts;
