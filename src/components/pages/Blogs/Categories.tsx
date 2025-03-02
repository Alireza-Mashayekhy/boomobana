import { BiChevronDown } from 'react-icons/bi';

const items = [
  'معماری و دکوراسیون',
  'بازار مسکن ',
  'دنیای اقتصاد',
  'تاریخ و تمدن',
  'طبیعت گردی ',
  'خبرنامه ',
  'آموزش'
];

export const Categories = () => {
  return (
    <div className='flex justify-between gap-2'>
      {items.map((item, index) => {
        return (
          <div key={`${item}-${index}`} className='flex items-center gap-1'>
            <h4>{item}</h4>
            <BiChevronDown size={20} />
          </div>
        );
      })}
    </div>
  );
};
