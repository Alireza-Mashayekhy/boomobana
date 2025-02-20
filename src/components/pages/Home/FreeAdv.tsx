import Image from 'next/image';

import Button from '@/components/atoms/Button';

const FreeAdv = () => {
  return (
    <div className='p-12 pt-40'>
      <div className='p-12 py-24 relative items-end flex gap-10 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[150px] rounded-bl-[150px] bg-gradient-to-r to-[#128D7E] from-secondary-1'>
        <Image
          src='/images/Home/FreeAdv.png'
          alt='join us'
          width={300}
          height={300}
          className='absolute -top-36 w-1/3 left-4'
        />
        <div className='flex flex-col gap-5 items-end justify-between'>
          <h3 className='text-3xl text-secondary-22 font-bold w-full'>
            ویلا و اقامتگاه خود را رایگان در بوم و بنا ثبت کنید ...{' '}
          </h3>
          <p className='text-secondary-22'>
            فرقی نمی‌کند چه نوع اقامتگاهی دارید (ویلا، سوئیت، آپارتمان، کلبه یا خانه روستایی)، کافیست آن را با
            چند کلیک ساده ثبت کنید. بوم و بنا این امکان را به شما می‌دهد که اقامتگاه خود را به مسافران معرفی
            کرده و به‌صورت روزانه اجاره دهید. واز میزبانی بی‌دغدغه لذت خواهید برد.
          </p>
        </div>
        <Button label='توضحیات بیشتر  ' customClasses='!px-10 whitespace-nowrap' />
      </div>
    </div>
  );
};

export default FreeAdv;
