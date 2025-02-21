import Image from 'next/image';

import Button from '@/components/atoms/Button';

const FreeAdv = () => {
  return (
    <div className='px-5 py-8 md:p-12 md:pt-40'>
      <div className='p-8 pb-14 md:p-12 md:py-24 relative items-end flex flex-col md:flex-row md:gap-10 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[100px] rounded-bl-[100px] md:rounded-tr-[150px] md:rounded-bl-[150px] bg-gradient-to-r to-[#128D7E] from-secondary-1'>
        <Image
          src='/images/Home/FreeAdv.png'
          alt='join us'
          width={300}
          height={300}
          className='relative -top-16 md:absolute md:-top-36 w-full sm:w-1/3 md:left-4'
        />
        <div className='flex flex-col gap-5 items-end justify-between mb-5 md:mb-0'>
          <h3 className='text-xl md:text-3xl text-secondary-22 font-bold w-full'>
            ویلا و اقامتگاه خود را رایگان در بوم و بنا ثبت کنید ...{' '}
          </h3>
          <p className='text-secondary-22 text-xs md:text-base'>
            فرقی نمی‌کند چه نوع اقامتگاهی دارید (ویلا، سوئیت، آپارتمان، کلبه یا خانه روستایی)، کافیست آن را با
            چند کلیک ساده ثبت کنید. بوم و بنا این امکان را به شما می‌دهد که اقامتگاه خود را به مسافران معرفی
            کرده و به‌صورت روزانه اجاره دهید. واز میزبانی بی‌دغدغه لذت خواهید برد.
          </p>
        </div>
        <Button label='توضحیات بیشتر  ' customClasses='!px-5 md:!px-10 whitespace-nowrap' />
      </div>
    </div>
  );
};

export default FreeAdv;
