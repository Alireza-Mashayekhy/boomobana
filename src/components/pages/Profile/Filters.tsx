'use client';

import { useParams } from 'next/navigation';
import { Checkbox } from 'primereact/checkbox';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FaBed, FaFilter } from 'react-icons/fa';
import { MdOutlineHomeWork } from 'react-icons/md';
import { SiApachejmeter } from 'react-icons/si';
import { TbHomeCog, TbHomeDollar, TbHomeShare } from 'react-icons/tb';

import { FilterItem } from '../Search/FilterItem';

export const Filters = ({ selectedType }: { selectedType: number }) => {
  const params = useParams();

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const villaFilters = [
    {
      name: 'نوع اقامتگاه',
      icon: <MdOutlineHomeWork size={20} />,
      type: 'checkbox',
      items: ['آیتم 1', 'آیتم 2', 'آیتم 3', 'آیتم 4']
    },
    {
      name: 'قیمت',
      icon: <TbHomeDollar size={20} />,
      type: 'checkbox',
      items: ['آیتم 5', 'آیتم 6', 'آیتم 7', 'آیتم 8']
    },
    {
      name: 'تاریخ رزرو',
      icon: <TbHomeCog size={20} />,
      type: 'checkbox',
      items: ['آیتم 9', 'آیتم 10', 'آیتم 11', 'آیتم 12']
    },
    {
      name: 'تعداد نفرات',
      icon: <SiApachejmeter size={20} />,
      type: 'checkbox',
      items: ['آیتم 13', 'آیتم 14', 'آیتم 15', 'آیتم 16']
    },
    {
      name: 'امکانات',
      icon: <FaBed size={20} />,
      type: 'checkbox',
      items: ['آیتم 17', 'آیتم 18', 'آیتم 19', 'آیتم 20']
    },
    {
      name: 'مقررارت',
      icon: <FaBed size={20} />,
      type: 'checkbox',
      items: ['2آیتم 1', 'آیتم 22', 'آیتم 23', '2آیتم 4']
    }
  ];

  const otherFilters = [
    {
      name: 'نوع اقامتگاه',
      icon: <MdOutlineHomeWork size={20} />,
      type: 'checkbox',
      items: ['آیتم 1', 'آیتم 2', 'آیتم 3', 'آیتم 4']
    },
    {
      name: 'قیمت',
      icon: <TbHomeDollar size={20} />,
      type: 'checkbox',
      items: ['آیتم 5', 'آیتم 6', 'آیتم 7', 'آیتم 8']
    },
    {
      name: 'سن بنا',
      icon: <TbHomeCog size={20} />,
      type: 'checkbox',
      items: ['آیتم 9', 'آیتم 10', 'آیتم 11', 'آیتم 12']
    },
    {
      name: 'متراژ',
      icon: <SiApachejmeter size={20} />,
      type: 'checkbox',
      items: ['آیتم 13', 'آیتم 14', 'آیتم 15', 'آیتم 16']
    },
    {
      name: 'تعداد خواب',
      icon: <FaBed size={20} />,
      type: 'checkbox',
      items: ['آیتم 17', 'آیتم 18', 'آیتم 19', 'آیتم 20']
    },
    {
      name: 'امکانات',
      icon: <TbHomeShare size={20} />,
      type: 'checkbox',
      items: ['2آیتم 1', 'آیتم 22', 'آیتم 23', '2آیتم 4']
    }
  ];

  const onFilterChange = (e: any) => {
    const _selectedFilters = [...selectedFilters];

    if (e.checked) _selectedFilters.push(e.value);
    else _selectedFilters.splice(_selectedFilters.indexOf(e.value), 1);
    setSelectedFilters(_selectedFilters);
  };

  return (
    <>
      <div className='hidden lg:block'>
        {selectedType === 0 ? (
          <div className='flex gap-2.5'>
            {villaFilters.map((filter) => {
              const set1 = new Set(filter.items);
              const commonElements = selectedFilters.filter((item) => set1.has(item));
              const commonCount = commonElements.length;

              return (
                <FilterItem
                  key={`villa-${filter.name}`}
                  title={commonCount ? `${commonCount} ${filter.name}` : filter.name}
                  icon={filter.icon}>
                  <div className='grid grid-cols-2 gap-4 p-4'>
                    {filter.items.map((item) => {
                      return (
                        <div key={`villa-${filter.name}-${item}`} className='flex items-center gap-2'>
                          <Checkbox
                            inputId={`villa-${filter.name}-${item}`}
                            checked={selectedFilters.includes(item)}
                            value={item}
                            onChange={onFilterChange}
                            pt={{
                              box: { className: 'border border-black h-full rounded' },
                              root: { className: 'w-4 h-4' },
                              icon: { className: 'w-3 h-3' }
                            }}
                          />
                          <label className='text-xs' htmlFor={`villa-${filter.name}-${item}`}>
                            {item}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </FilterItem>
              );
            })}
          </div>
        ) : selectedType === 1 ? (
          <div className='flex gap-2.5'>
            {otherFilters.map((filter) => {
              const set1 = new Set(filter.items);
              const commonElements = selectedFilters.filter((item) => set1.has(item));
              const commonCount = commonElements.length;

              return (
                <FilterItem
                  key={`villa-${filter.name}`}
                  title={commonCount ? `${commonCount} ${filter.name}` : filter.name}
                  icon={filter.icon}>
                  <div className='grid grid-cols-2 gap-4 p-4'>
                    {filter.items.map((item) => {
                      return (
                        <div key={`villa-${filter.name}-${item}`} className='flex items-center gap-2'>
                          <Checkbox
                            inputId={`villa-${filter.name}-${item}`}
                            checked={selectedFilters.includes(item)}
                            value={item}
                            onChange={onFilterChange}
                            pt={{
                              box: { className: 'border border-black h-full rounded' },
                              root: { className: 'w-4 h-4' },
                              icon: { className: 'w-3 h-3' }
                            }}
                          />
                          <label className='text-xs' htmlFor={`villa-${filter.name}-${item}`}>
                            {item}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </FilterItem>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='lg:hidden'>
        <div
          onClick={() => setShowFilters(true)}
          className='flex relative items-center justify-between cursor-pointer gap-3 border border-black rounded-lg p-2'>
          <div className='flex gap-3 items-center'>
            <FaFilter size={12} />
            <div className='text-xs font-extralight'>فیلتر ها</div>
          </div>
          <BiChevronDown size={20} />
        </div>
        <div
          className={`w-screen max-h-[calc(100vh/2)] overflow-auto fixed bottom-0 left-0 bg-white p-5 pb-14 md:pb-5 rounded-t-xl z-[1001] isolation-isolate transition-all ${
            showFilters ? '' : 'translate-y-full'
          }`}>
          {selectedType === 0 ? (
            <div className='flex flex-col gap-2.5'>
              {villaFilters.map((filter) => {
                return (
                  <div key={`villa-${filter.name}`} className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                      {filter.icon}
                      <div>{filter.name}</div>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-4 gap-4 p-4'>
                      {filter.items.map((item) => {
                        return (
                          <div key={`villa-${filter.name}-${item}`} className='flex items-center gap-2'>
                            <Checkbox
                              inputId={`villa-${filter.name}-${item}`}
                              checked={selectedFilters.includes(item)}
                              value={item}
                              onChange={onFilterChange}
                              pt={{
                                box: { className: 'border border-black h-full rounded' },
                                root: { className: 'w-4 h-4' },
                                icon: { className: 'w-3 h-3' }
                              }}
                            />
                            <label className='text-xs' htmlFor={`villa-${filter.name}-${item}`}>
                              {item}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : selectedType === 1 ? (
            <div className='flex gap-2.5'>
              {otherFilters.map((filter) => {
                return (
                  <FilterItem key={`villa-${filter.name}`} title={filter.name} icon={filter.icon}>
                    <div className='grid grid-cols-2 gap-4 p-4'>
                      {filter.items.map((item) => {
                        return (
                          <div key={`villa-${filter.name}-${item}`} className='flex items-center gap-2'>
                            <Checkbox
                              inputId={`villa-${filter.name}-${item}`}
                              checked={selectedFilters.includes(item)}
                              value={item}
                              onChange={onFilterChange}
                              pt={{
                                box: { className: 'border border-black h-full rounded' },
                                root: { className: 'w-4 h-4' },
                                icon: { className: 'w-3 h-3' }
                              }}
                            />
                            <label className='text-xs' htmlFor={`villa-${filter.name}-${item}`}>
                              {item}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </FilterItem>
                );
              })}
            </div>
          ) : null}
        </div>
        {showFilters && (
          <div
            onClick={() => setShowFilters(false)}
            className='w-screen h-screen top-0 left-0 bg-black/20 fixed z-[1000]'
          />
        )}
      </div>
    </>
  );
};
