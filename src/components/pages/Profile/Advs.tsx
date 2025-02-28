'use client';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import AdvCard from '@/components/atoms/AdvCard';

const items = Array.from({ length: 6 }, (_, index) => ({
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
    const newItems = Array.from({ length: 6 }, (_, index) => ({
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
        <div
          className={` ${
            listView ? 'flex flex-col w-full' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          } gap-4`}>
          {allItems.map((data, index) => {
            return (
              <div key={data.name + index} className='lg:col-span-1'>
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
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};
