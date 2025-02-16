'use client';

import { useState } from 'react';

import Tabs from '@/components/atoms/Tabs';

const Items = ({ items }: { items: string[] }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex items-center gap-x-20 gap-y-5 justify-center flex-wrap max-w-[900px] bg-primary-2/70 rounded-md py-5 px-10 backdrop-blur-sm'>
        {items.map((item, index) => {
          return (
            <div className='text-lg text-secondary-22' key={`item-${item}-${index}`}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function SecondSection() {
  const [value, setValue] = useState(0);

  const tabItems = [
    {
      label: 'دستیار آژانس املاک',
      children: (
        <Items
          items={[
            'تعریف شعبه ',
            'مدیریت قراردادها',
            'افزرایش سرعت و کارآمدی',
            'داشبرد حرفه ای ',
            'مدیریت مشتریان',
            'مدیریت مشاورین ',
            'دسته بندی فایل ها '
          ]}
        />
      )
    },
    {
      label: 'دستیار مشاورین',
      children: (
        <Items
          items={[
            'تعریف شعبه ',
            'مدیریت قراردادها',
            'افزرایش سرعت و کارآمدی',
            'داشبرد حرفه ای ',
            'مدیریت مشتریان',
            'مدیریت مشاورین ',
            'دسته بندی فایل ها '
          ]}
        />
      )
    },
    {
      label: 'پنل کاربری',
      children: (
        <Items
          items={[
            'تعریف شعبه ',
            'مدیریت قراردادها',
            'افزرایش سرعت و کارآمدی',
            'داشبرد حرفه ای ',
            'مدیریت مشتریان',
            'مدیریت مشاورین ',
            'دسته بندی فایل ها '
          ]}
        />
      )
    },
    {
      label: 'پنل اقامتگاه',
      children: (
        <Items
          items={[
            'تعریف شعبه ',
            'مدیریت قراردادها',
            'افزرایش سرعت و کارآمدی',
            'داشبرد حرفه ای ',
            'مدیریت مشتریان',
            'مدیریت مشاورین ',
            'دسته بندی فایل ها '
          ]}
        />
      )
    },
    {
      label: 'پنل بلاگر',
      children: (
        <Items
          items={[
            'تعریف شعبه ',
            'مدیریت قراردادها',
            'افزرایش سرعت و کارآمدی',
            'داشبرد حرفه ای ',
            'مدیریت مشتریان',
            'مدیریت مشاورین ',
            'دسته بندی فایل ها '
          ]}
        />
      )
    }
  ];

  return (
    <div className="bg-[url('/images/Home/secondSectionBack.png')] bg-no-repeat bg-cover bg-center p-12">
      <h2 className='text-3xl font-bold mb-10'>سرویس های بوم و بنا</h2>
      <Tabs tabs={tabItems} activeIndex={value} onChange={(index) => setValue(index)} />
    </div>
  );
}
