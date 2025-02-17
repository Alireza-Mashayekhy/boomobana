'use client';

import { TabPanel, TabPanelPassThroughMethodOptions, TabView } from 'primereact/tabview';
import { classNames } from 'primereact/utils';
import { useState } from 'react';

const Cards = () => {
  return (
    <div className='grid grid-cols-3'>
      <div>t</div>
      <div>t</div>
      <div>t</div>
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
      <h2 className='text-3xl font-bold mb-10 text-center'>جدید ترین آگهی ها </h2>
      <p className='text-xl mb-10 text-center'>
        بهترین گزینه متناسب با نیاز و سلیقه شما ، تنها با چند کلیک در دسترس شماست
      </p>
      <TabView
        onTabChange={(e) => setValue?.(e.index)}
        activeIndex={value}
        pt={{
          nav: {
            className: '!bg-transparent justify-center'
          },
          panelContainer: {
            className: '!bg-transparent !p-0'
          }
        }}>
        {tabItems.map((tab) => (
          <TabPanel
            pt={{
              headerAction: (options: TabPanelPassThroughMethodOptions) => ({
                className: classNames(
                  'transition-colors bg-transparent duration-300 min-w-[100px] justify-center',
                  {
                    'text-black': value !== options.context?.index,
                    'text-primary-1': value === options.context?.index
                  }
                )
              })
            }}
            key={tab.label}
            header={tab.label}>
            {tab?.children}
          </TabPanel>
        ))}
      </TabView>{' '}
    </div>
  );
};

export default NewestPosts;
