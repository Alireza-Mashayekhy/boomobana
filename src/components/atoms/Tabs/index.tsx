import { TabPanel, TabPanelPassThroughMethodOptions, TabView } from 'primereact/tabview';
import { classNames } from 'primereact/utils';
import { JSX } from 'react';

interface AccordionTypes {
  tabs: { label: string; children: JSX.Element }[];
  activeIndex?: number;
  onChange?: (index: number) => void;
}

const Tabs = ({ tabs, onChange, activeIndex }: AccordionTypes) => {
  return (
    <TabView
      onTabChange={(e) => onChange?.(e.index)}
      activeIndex={activeIndex}
      pt={{
        nav: {
          className: '!bg-transparent justify-center'
        },
        panelContainer: {
          className: '!bg-transparent !p-0'
        }
      }}>
      {tabs.map((tab) => (
        <TabPanel
          pt={{
            headerAction: (options: TabPanelPassThroughMethodOptions) => ({
              className: classNames('transition-colors  duration-300 min-w-[100px] justify-center', {
                'bg-transparent text-black': activeIndex !== options.context?.index,
                'bg-primary-2/70 text-white': activeIndex === options.context?.index
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
