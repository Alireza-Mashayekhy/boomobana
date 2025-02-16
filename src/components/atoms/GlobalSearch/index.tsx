'use client';

import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import { MdMyLocation } from 'react-icons/md';

export const GlobalSearch = () => {
  const cities = ['همه', 'تهران', 'اراک'];
  const [selectedCity, setSelectedCity] = useState('همه');
  const [searchInput, setSearchInput] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [focused, setFocus] = useState(false);
  const [opacity, setOpacity] = useState(false);

  const items = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className='flex bg-secondary-22 rounded-md h-10 lg:h-12 py-2 px-5 relative'>
      <div className='flex items-center text-sm lg:text-base'>
        <MdMyLocation />
      </div>
      <Dropdown
        className='!bg-transparent !h-full !shadow-none'
        options={cities}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        pt={{
          root: { className: 'bg-transparent h-full shadow-none' },
          trigger: { className: 'hidden' },
          input: { className: 'h-full py-1 lg:py-1.5 px-2 lg:px-4 font-bold text-xs lg:text-sm' }
        }}
      />
      <Divider
        layout='vertical'
        pt={{
          root: { className: 'border-secondary-10 m-0 p-0 border' }
        }}
      />
      <InputText
        placeholder='جستجو...'
        value={searchInput}
        onFocus={() => {
          setFocus(true);
          setTimeout(() => {
            setOpacity(true);
          }, 50);
        }}
        onBlur={() => {
          setOpacity(false);
          setTimeout(() => {
            setFocus(false);
          }, 400);
        }}
        onChange={(e) => setSearchInput(e.target.value)}
        pt={{
          root: {
            className:
              'bg-transparent h-full px-2 lg:px-5 shadow-none text-xs lg:text-sm w-[300px] w-full lg:w-auto'
          }
        }}
      />
      {focused && (
        <div
          className={`absolute top-10 right-0 w-full h-52 py-2 overflow-auto bg-secondary-22 z-[2] transition-opacity duration-300 rounded-b-lg  ${
            opacity && searchInput ? 'opacity-100' : 'opacity-0'
          }`}>
          {searchInput &&
            items.map((item) => (
              <div
                onClick={() => setSearchInput(`شهر ${item}`)}
                key={item}
                className='p-2 hover:bg-primary-2/10 cursor-pointer'>
                شهر {item}
              </div>
            ))}
        </div>
      )}
    </div>
  ) : null;
};
