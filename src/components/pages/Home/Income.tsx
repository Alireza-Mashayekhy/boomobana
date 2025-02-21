import Image from 'next/image';

import Button from '@/components/atoms/Button';
import Title from '@/components/atoms/Title/indes';

const Income = () => {
  return (
    <div className='px-5 py-8 md:p-12'>
      <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center md:items-start'>
        <div className='flex flex-col gap-4 md:gap-7 items-end md:w-2/3'>
          <div className='w-full'>
            <Title title={`"در بوم و بنا، محتوا تولید کن و درآمد کسب کن!"`} />
          </div>{' '}
          <p className='text-sm md:text-base'>
            کافیست محتوا بسازید و در پلتفرم بوم و بنا منتشر کنید. به ازای هر محتوایی که منتشر می‌کنید، هزینه
            دریافت می‌کنید. علاوه بر این، می‌توانید از کدهای تخفیف ویژه برای اقامتگاه‌ها و پنل‌های بوم و بنا
            بهره‌مند شوید. پس همین الان از این فرصت استفاده کنید و محتوا رو به درآمد تبدیل کنید!
          </p>
          <Button label='ثبت رایگان آگهی' customClasses='!px-5  ' />
        </div>
        <Image
          src='/images/Home/income.png'
          alt='income banner'
          loading='lazy'
          className='w-full sm:w-1/2 md:w-1/3'
          width={300}
          height={330}
        />
      </div>
    </div>
  );
};

export default Income;
