'use client';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import AdvCard from '@/components/atoms/AdvCard';

const items = Array.from({ length: 7 }, (_, index) => ({
  itemType: (index + 1) % 7 === 0 ? 'ads' : 'adv',
  name: `اجاره واحد نوساز شماره ${index + 1} در فردیس کرج`,
  image: '/images/homeBanner.jpg',
  type: 'رهن اجاره',
  size: 5000,
  rooms: 4,
  address: `البرز-فردیس-کوچه تهرانسر-${index + 1}`,
  rent: 10000000 + index * 100000,
  mortgage: 200000000 + index * 1000000,
  agency: {
    image: '/images/homeBanner.jpg',
    adviserImage: '/images/homeBanner.jpg',
    name: 'آژانس آکو',
    adviserName: 'مبینا دانه واش'
  }
}));

export const Advs = ({ listView }: { listView: boolean }) => {
  const [allItems, setItems] = useState(items);

  const loadFunc = () => {
    const newItems = Array.from({ length: 7 }, (_, index) => ({
      itemType: (index + 1) % 7 === 0 ? 'ads' : 'adv',
      name: `اجاره واحد نوساز شماره ${index + 1} در فردیس کرج`,
      image: '/images/homeBanner.jpg',
      type: 'رهن اجاره',
      size: 5000,
      rooms: 4,
      address: `البرز-فردیس-کوچه تهرانسر-${index + 1}`,
      rent: 10000000 + index * 100000,
      mortgage: 200000000 + index * 1000000,
      agency: {
        image: '/images/homeBanner.jpg',
        adviserImage: '/images/homeBanner.jpg',
        name: 'آژانس آکو',
        adviserName: 'مبینا دانه واش'
      }
    }));
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  return (
    <div className='flex items-start gap-4 relative'>
      <div className='sticky top-10 flex flex-col gap-2'>
        <div className='rounded-2xl bg-red-500 h-[200px] w-[150px] flex items-center justify-center'>
          تبلیغات
        </div>
        <div className='rounded-2xl bg-green-500 h-[200px] w-[150px] flex items-center justify-center'>
          تبلیغات
        </div>
      </div>
      <div className='w-full'>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true}
          loader={
            <div className='loader' key={0}>
              Loading ...
            </div>
          }>
          <div className={` ${listView ? 'flex flex-col w-full' : 'grid grid-cols-3'} gap-4`}>
            {allItems.map((data, index) => {
              return data.itemType === 'adv' ? (
                <div key={data.name + index} className='col-span-1'>
                  <AdvCard
                    listFormat={listView}
                    name={data.name}
                    image={data.image}
                    type={data.type}
                    size={data.size}
                    rooms={data.rooms}
                    address={data.address}
                    rent={data.rent}
                    mortgage={data.mortgage}
                    agency={data.agency}
                  />
                </div>
              ) : (
                <div
                  key={data.name + index}
                  className='col-span-3 py-10 bg-secondary-9 rounded-xl flex items-center justify-center'>
                  تبلیغات
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};
