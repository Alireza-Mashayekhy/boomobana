'use client';

import React, { useState } from 'react';
import {
  FcAddressBook,
  FcBullish,
  FcCollaboration,
  FcComboChart,
  FcConferenceCall,
  FcCurrencyExchange,
  FcDebt,
  FcDiploma2,
  FcEditImage,
  FcElectroDevices,
  FcFaq,
  FcFlowChart,
  FcGraduationCap,
  FcHome,
  FcMoneyTransfer,
  FcNews,
  FcOrgUnit,
  FcOvertime,
  FcPlus,
  FcReadingEbook,
  FcRules,
  FcSalesPerformance,
  FcSearch,
  FcServices,
  FcStatistics,
  FcVip,
  FcVoicePresentation,
  FcWikipedia
} from 'react-icons/fc';

import Tabs from '@/components/atoms/Tabs';
import Title from '@/components/atoms/Title/indes';

const Items = ({ items }: { items: { name: string; icon: React.ReactElement }[] }) => {
  if (items.length === 7) {
    return (
      <div className='flex justify-center pt-10'>
        <div className='flex flex-col items-center gap-y-5 justify-center py-5 px-10'>
          <div className='grid grid-cols-4 gap-10'>
            {items.slice(0, 4).map((item, index) => {
              return (
                <div
                  key={`item-${index}`}
                  className='text-lg text-secondary-1 flex flex-col items-center gap-2'>
                  <div className='text-3xl'>{item.icon}</div>
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className='grid grid-cols-3 gap-10'>
            {items.slice(4, 8).map((item, index) => {
              return (
                <div
                  key={`item-${index}`}
                  className='text-lg text-secondary-1 flex flex-col items-center gap-2'>
                  <div className='text-3xl'>{item.icon}</div>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (items.length === 6) {
    return (
      <div className='flex justify-center pt-10'>
        <div className='grid grid-cols-3 gap-x-10 gap-y-5'>
          {items.map((item, index) => {
            return (
              <div
                key={`item-${index}`}
                className='text-lg text-secondary-1 flex flex-col items-center gap-2'>
                <div className='text-3xl'>{item.icon}</div>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (items.length === 5) {
    return (
      <div className='flex justify-center pt-10'>
        <div className='flex flex-col items-center gap-y-5 justify-center py-5 px-10'>
          <div className='grid grid-cols-3 gap-10'>
            {items.slice(0, 3).map((item, index) => {
              return (
                <div
                  key={`item-${index}`}
                  className='text-lg text-secondary-1 flex flex-col items-center gap-2'>
                  <div className='text-3xl'>{item.icon}</div>
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className='grid grid-cols-2 gap-10'>
            {items.slice(3, 8).map((item, index) => {
              return (
                <div
                  key={`item-${index}`}
                  className='text-lg text-secondary-1 flex flex-col items-center gap-2'>
                  <div className='text-3xl'>{item.icon}</div>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default function SecondSection() {
  const [value, setValue] = useState(0);

  const tabItems = [
    {
      label: 'دستیار آژانس املاک',
      children: (
        <Items
          items={[
            { icon: <FcFlowChart />, name: 'تعریف شعبه ' },
            { icon: <FcNews />, name: 'مدیریت قراردادها' },
            { icon: <FcBullish />, name: 'افزایش سرعت و کارآمدی' },
            { icon: <FcServices />, name: 'داشبرد حرفه ای ' },
            { icon: <FcReadingEbook />, name: 'مدیریت مشتریان' },
            { icon: <FcDebt />, name: 'مدیریت مشاورین ' },
            { icon: <FcRules />, name: 'دسته بندی فایل ها ' }
          ]}
        />
      )
    },
    {
      label: 'دستیار مشاورین',
      children: (
        <Items
          items={[
            { icon: <FcDiploma2 />, name: 'ساخت رزومه ' },
            { icon: <FcCollaboration />, name: 'درخواست همکاری' },
            { icon: <FcComboChart />, name: 'فروش و بازار سازی' },
            { icon: <FcConferenceCall />, name: 'بسته اشتراکی ' },
            { icon: <FcGraduationCap />, name: 'آموزش' }
          ]}
        />
      )
    },
    {
      label: 'پنل کاربری',
      children: (
        <Items
          items={[
            { icon: <FcVip />, name: 'ایجاد حساب کاری ' },
            { icon: <FcSearch />, name: 'جستجوی حرفه ای' },
            { icon: <FcPlus />, name: 'ثبت رایگان آگهی' },
            { icon: <FcVoicePresentation />, name: 'ارسال نظر و بازخورد ' },
            { icon: <FcElectroDevices />, name: 'رزو سریع' },
            { icon: <FcHome />, name: 'درخواست ملک ' },
            { icon: <FcOrgUnit />, name: 'درخواست کارشناسی ملک ' }
          ]}
        />
      )
    },
    {
      label: 'پنل اقامتگاه',
      children: (
        <Items
          items={[
            { icon: <FcMoneyTransfer />, name: ' پرداخت آنی  ' },
            { icon: <FcOvertime />, name: ' مدیریت رزرو ها' },
            { icon: <FcSalesPerformance />, name: 'کسب درآمد' },
            { icon: <FcEditImage />, name: 'صفحه اختصاصی ' },
            { icon: <FcStatistics />, name: ' گزارش گیری ' },
            { icon: <FcCurrencyExchange />, name: ' قیمت گذاری داینمامیک ' }
          ]}
        />
      )
    },
    {
      label: 'پنل بلاگر',
      children: (
        <Items
          items={[
            { icon: <FcCurrencyExchange />, name: 'کسب درامد ' },
            { icon: <FcAddressBook />, name: 'صفحه اختصاصی' },
            { icon: <FcMoneyTransfer />, name: 'کد تخفیف' },
            { icon: <FcWikipedia />, name: 'مدیریت و انشار محتوا ' },
            { icon: <FcFaq />, name: 'دریافت نظرات و بازخوردها' }
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
