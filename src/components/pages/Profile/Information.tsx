import { BiChevronDown } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';
import { LuNetwork } from 'react-icons/lu';
import { MdPermPhoneMsg } from 'react-icons/md';
import { PiUsersBold } from 'react-icons/pi';
import { TbHomeDollar, TbHomePlus, TbHomeSignal, TbMessagePlus } from 'react-icons/tb';

export const Information = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-start mb-8'>
      <div className='md:w-1/3 flex flex-col gap-4'>
        <h1 className='flex items-center gap-3 font-bold text-xl sm:text-3xl'>
          مازیار رحیم زاده <BiChevronDown />
        </h1>
        <div className='flex items-center gap-2 sm:text-xl'>
          <IoLocationSharp />
          کرج
        </div>
        <h2 className='text-lg sm:text-2xl'>خرید، فروش و سرمایه‌گذاری املاک</h2>
        <p className='text-sm sm:text-base'>
          من با ارائه استراتیژی های نو آورانه و تحلیل های دقیق به شما کمک می کنم تا به اهداف تجای خود دست
          یابید و فروش خود را در سطح بالاتری ارتقا دهید{' '}
        </p>
        <div className='flex justify-end gap-4'>
          <button className='flex items-center gap-3 p-2 px-4 text-sm sm:text-base rounded-lg bg-[#FF8C42]/50'>
            چت <TbMessagePlus size={20} />
          </button>
          <button className='flex items-center gap-3 p-2 px-4 text-sm sm:text-base rounded-lg bg-[#128D7E] text-white'>
            تماس <MdPermPhoneMsg size={20} />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 gap-y-5 text-sm sm:text-base'>
        <div className='flex items-center gap-2'>
          <TbHomePlus size={22} />
          532 فایل ثبت شده
        </div>
        <div className='flex items-center gap-2'>
          <LuNetwork size={22} />4 شعبه
        </div>
        <div className='flex items-center gap-2'>
          <TbHomeSignal size={22} />
          400 فایل فروشی
        </div>
        <div className='flex items-center gap-2'>
          <PiUsersBold size={22} />3 مشاور
        </div>
        <div className='flex items-center gap-2'>
          <TbHomeDollar size={22} />
          132فایل اجاره
        </div>
      </div>
    </div>
  );
};
