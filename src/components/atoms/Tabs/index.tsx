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
                'transition-colors bg-transparent duration-300 min-w-[100px] justify-center ',
                {
                  'text-black': activeIndex !== options.context?.index,
                  'text-primary-1': activeIndex === options.context?.index
                }
              )
            }),
            header: (options: TabPanelPassThroughMethodOptions) => ({
              className: classNames(' border-primary-1 transition-all', {
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
