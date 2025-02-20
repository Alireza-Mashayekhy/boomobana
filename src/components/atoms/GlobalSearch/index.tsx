'use client';

import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';

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
            className: 'bg-transparent h-full px-0 shadow-none text-xs lg:text-sm w-full'
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
