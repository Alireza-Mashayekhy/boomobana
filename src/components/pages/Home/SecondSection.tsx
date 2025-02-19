'use client';

import React, { useState } from 'react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuUserPen } from 'react-icons/lu';
import { MdOutlineEditNote } from 'react-icons/md';
import { PiBooksLight, PiChartLineUp } from 'react-icons/pi';
import { SlOrganization } from 'react-icons/sl';

import Tabs from '@/components/atoms/Tabs';
import Title from '@/components/atoms/Title/indes';

const Items = ({ items }: { items: { name: string; icon: React.ReactElement }[] }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex items-center gap-x-20 gap-y-5 justify-center flex-wrap max-w-[900px]  rounded-md py-5 px-10 backdrop-blur-sm'>
        {items.map((item, index) => {
          return (
            <div
              className='text-lg text-secondary-1 flex flex-col items-center gap-2'
              key={`item-${item}-${index}`}>
              <div className='text-3xl'>{item.icon}</div>
              {item.name}
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
            { icon: <MdOutlineEditNote />, name: 'تعریف شعبه ' },
            { icon: <PiChartLineUp />, name: 'مدیریت قراردادها' },
            { icon: <IoSettingsOutline />, name: 'افزرایش سرعت و کارآمدی' },
            { icon: <SlOrganization />, name: 'داشبرد حرفه ای ' },
            { icon: <HiOutlineUserGroup />, name: 'مدیریت مشتریان' },
            { icon: <LuUserPen />, name: 'مدیریت مشاورین ' },
            { icon: <PiBooksLight />, name: 'دسته بندی فایل ها ' }
          ]}
        />
      )
    },
    {
      label: 'دستیار مشاورین',
      children: (
        <Items
          items={[
            { icon: <MdOutlineEditNote />, name: 'تعریف شعبه ' },
            { icon: <PiChartLineUp />, name: 'مدیریت قراردادها' },
            { icon: <IoSettingsOutline />, name: 'افزرایش سرعت و کارآمدی' },
            { icon: <SlOrganization />, name: 'داشبرد حرفه ای ' },
            { icon: <HiOutlineUserGroup />, name: 'مدیریت مشتریان' },
            { icon: <LuUserPen />, name: 'مدیریت مشاورین ' },
            { icon: <PiBooksLight />, name: 'دسته بندی فایل ها ' }
          ]}
        />
      )
    },
    {
      label: 'پنل کاربری',
      children: (
        <Items
          items={[
            { icon: <MdOutlineEditNote />, name: 'تعریف شعبه ' },
            { icon: <PiChartLineUp />, name: 'مدیریت قراردادها' },
            { icon: <IoSettingsOutline />, name: 'افزرایش سرعت و کارآمدی' },
            { icon: <SlOrganization />, name: 'داشبرد حرفه ای ' },
            { icon: <HiOutlineUserGroup />, name: 'مدیریت مشتریان' },
            { icon: <LuUserPen />, name: 'مدیریت مشاورین ' },
            { icon: <PiBooksLight />, name: 'دسته بندی فایل ها ' }
          ]}
        />
      )
    },
    {
      label: 'پنل اقامتگاه',
      children: (
        <Items
          items={[
            { icon: <MdOutlineEditNote />, name: 'تعریف شعبه ' },
            { icon: <PiChartLineUp />, name: 'مدیریت قراردادها' },
            { icon: <IoSettingsOutline />, name: 'افزرایش سرعت و کارآمدی' },
            { icon: <SlOrganization />, name: 'داشبرد حرفه ای ' },
            { icon: <HiOutlineUserGroup />, name: 'مدیریت مشتریان' },
            { icon: <LuUserPen />, name: 'مدیریت مشاورین ' },
            { icon: <PiBooksLight />, name: 'دسته بندی فایل ها ' }
          ]}
        />
      )
    },
    {
      label: 'پنل بلاگر',
      children: (
        <Items
          items={[
            { icon: <MdOutlineEditNote />, name: 'تعریف شعبه ' },
            { icon: <PiChartLineUp />, name: 'مدیریت قراردادها' },
            { icon: <IoSettingsOutline />, name: 'افزرایش سرعت و کارآمدی' },
            { icon: <SlOrganization />, name: 'داشبرد حرفه ای ' },
            { icon: <HiOutlineUserGroup />, name: 'مدیریت مشتریان' },
            { icon: <LuUserPen />, name: 'مدیریت مشاورین ' },
            { icon: <PiBooksLight />, name: 'دسته بندی فایل ها ' }
          ]}
        />
      )
    }
  ];

  return (
    <div className='p-12'>
      <Title title='سرویس های بوم و بنا' />
      <Tabs navClass='gap-20' tabs={tabItems} activeIndex={value} onChange={(index) => setValue(index)} />
    </div>
  );
}
