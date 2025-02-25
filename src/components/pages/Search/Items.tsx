'use client';

import { useParams } from 'next/navigation';
import { Checkbox } from 'primereact/checkbox';
import { useState } from 'react';
import { AiFillAlert, AiFillTag } from 'react-icons/ai';
import { FaSwimmingPool } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { PiLadderSimpleBold } from 'react-icons/pi';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { SiHomeassistant } from 'react-icons/si';
import { TbDisabled, TbSortDescending } from 'react-icons/tb';

import { FilterItem } from './FilterItem';

const villaItems = [
  {
    name: 'رزو آنی  ',
    icon: <AiFillAlert size={24} />
  },
  {
    name: 'استخردار ',
    icon: <FaSwimmingPool size={24} />
  },
  {
    name: 'ویژه معلولین  ',
    icon: <TbDisabled size={24} />
  },
  {
    name: 'تخفیف دار ',
    icon: <RiDiscountPercentFill size={24} />
  },
  {
    name: 'بیشترین امتیاز ',
    icon: <IoIosStar size={24} />
  }
];

const otherItems = [
  {
    name: 'فوری',
    icon: <AiFillAlert size={24} />
  },
  {
    name: 'اگازیون',
    icon: <AiFillTag size={24} />
  },
  {
    name: 'نردبان',
    icon: <PiLadderSimpleBold size={24} />
  },
  {
    name: 'تهاتر',
    icon: <SiHomeassistant size={24} />
  }
];

export const Items = () => {
  const params = useParams();

  const [selectedSort, setSelectedSort] = useState('item1');
  const [selectedItem, setSelectedItem] = useState('');
  const [value, setValue] = useState(0);

  return (
    <div className='flex gap-2 sm:gap-4 lg:gap-0 lg:justify-between xl:grid grid-cols-3'>
      <div className='w-fit'>
        <FilterItem title='مرتب سازی بر اساس' icon={<TbSortDescending />}>
          <div className='p-4 flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <Checkbox
                inputId='item1'
                value='item1'
                checked={selectedSort === 'item1'}
                onChange={() => setSelectedSort('item1')}
                pt={{
                  box: { className: 'border border-black h-full rounded' },
                  root: { className: 'w-4 h-4' },
                  icon: { className: 'w-3 h-3' }
                }}
              />
              <label className='text-xs' htmlFor='item1'>
                آیتم 1
              </label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                inputId='item2'
                value='item2'
                checked={selectedSort === 'item2'}
                onChange={() => setSelectedSort('item2')}
                pt={{
                  box: { className: 'border border-black h-full rounded' },
                  root: { className: 'w-4 h-4' },
                  icon: { className: 'w-3 h-3' }
                }}
              />
              <label className='text-xs' htmlFor='item2'>
                آیتم 2
              </label>
            </div>
            <div className='flex items-center gap-2'>
              <Checkbox
                inputId='item3'
                value='item3'
                checked={selectedSort === 'item3'}
                onChange={() => setSelectedSort('item3')}
                pt={{
                  box: { className: 'border border-black h-full rounded' },
                  root: { className: 'w-4 h-4' },
                  icon: { className: 'w-3 h-3' }
                }}
              />
              <label className='text-xs' htmlFor='item3'>
                آیتم 3
              </label>
            </div>
          </div>
        </FilterItem>
      </div>
      <div className='hidden lg:block '>
        {params.Type === 'villa-residence' ? (
          <div className='flex items-center relative justify-center gap-5 mb-5'>
            {villaItems.map((item, index) => {
              return (
                <div
                  onClick={() => setValue(index)}
                  key={item.name + index}
                  className={`flex whitespace-nowrap items-center gap-1 p-1 cursor-pointer ${
                    value === index ? 'text-primary-1 border-b border-primary-1' : ''
                  }`}>
                  {item.icon}
                  {item.name}
                </div>
              );
            })}
          </div>
        ) : (
          <div className='flex items-center relative justify-center gap-5 mb-5'>
            {otherItems.map((item, index) => {
              return (
                <div
                  onClick={() => setValue(index)}
                  key={item.name + index}
                  className={`flex whitespace-nowrap items-center gap-1 p-1 cursor-pointer ${
                    value === index ? 'text-primary-1 border-b border-primary-1' : ''
                  }`}>
                  {item.icon}
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className='lg:hidden'>
        {params.Type === 'villa-residence' ? (
          <div className='flex items-center relative justify-center gap-5'>
            <FilterItem title='دسته بندی' icon={<TbSortDescending />}>
              <div className='p-4 flex flex-col gap-2'>
                {villaItems.map((item, index) => {
                  return (
                    <div key={item.name + index} className='flex items-center gap-2'>
                      <Checkbox
                        inputId={item.name}
                        value={item.name}
                        checked={selectedItem === item.name}
                        onChange={() => setSelectedItem(item.name)}
                        pt={{
                          box: { className: 'border border-black h-full rounded' },
                          root: { className: 'w-4 h-4' },
                          icon: { className: 'w-3 h-3' }
                        }}
                      />
                      <label className='text-xs' htmlFor={item.name}>
                        {item.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </FilterItem>
          </div>
        ) : (
          <div className='flex items-center relative justify-center gap-5 mb-5'>
            <FilterItem title='دسته بندی' icon={<TbSortDescending />}>
              <div className='p-4 flex flex-col gap-2'>
                {otherItems.map((item, index) => {
                  return (
                    <div key={item.name + index} className='flex items-center gap-2'>
                      <Checkbox
                        inputId={item.name}
                        value={item.name}
                        checked={selectedItem === item.name}
                        onChange={() => setSelectedItem(item.name)}
                        pt={{
                          box: { className: 'border border-black h-full rounded' },
                          root: { className: 'w-4 h-4' },
                          icon: { className: 'w-3 h-3' }
                        }}
                      />
                      <label className='text-xs' htmlFor={item.name}>
                        {item.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </FilterItem>
          </div>
        )}
      </div>

      <div className='hidden xl:block' />
    </div>
  );
};
