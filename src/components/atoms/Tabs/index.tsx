import { TabPanel, TabPanelPassThroughMethodOptions, TabView } from 'primereact/tabview';
import { classNames } from 'primereact/utils';
import { JSX } from 'react';

interface AccordionTypes {
  tabs: { label: string; children: JSX.Element }[];
  activeIndex?: number;
  onChange?: (index: number) => void;
  navClass?: string;
}

const Tabs = ({ tabs, onChange, activeIndex, navClass }: AccordionTypes) => {
  return (
    <TabView
      onTabChange={(e) => onChange?.(e.index)}
      activeIndex={activeIndex}
      pt={{
        nav: {
          className: `!bg-transparent justify-center ${navClass}`
        },
        panelContainer: {
          className: '!bg-transparent !p-0'
        }
      }}>
      {tabs.map((tab) => (
        <TabPanel
          pt={{
            headerAction: (options: TabPanelPassThroughMethodOptions) => ({
              className: classNames(
                'transition-colors bg-transparent p-2 md:p-5 duration-300 justify-center ',
                {
                  'text-black': activeIndex !== options.context?.index,
                  'text-primary-1': activeIndex === options.context?.index
                }
              )
            }),
            header: (options: TabPanelPassThroughMethodOptions) => ({
              className: classNames(' border-primary-1 text-[10px]  md:text-base transition-all', {
                'border-b-0': activeIndex !== options.context?.index,
                'border-b-2': activeIndex === options.context?.index
              })
            })
          }}
          key={tab.label}
          header={tab.label}>
          {tab?.children}
        </TabPanel>
      ))}
    </TabView>
  );
};

export default Tabs;
