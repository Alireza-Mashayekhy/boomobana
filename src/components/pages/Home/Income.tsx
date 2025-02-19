import Image from 'next/image';

import Button from '@/components/atoms/Button';

const Income = () => {
  return (
    <div className='p-12'>
      <div className='flex gap-20 items-start'>
        <div className='flex flex-col gap-7 items-end w-2/3'>
          <h3 className='w-full text-2xl font-bold'>{`"در بوم و بنا، محتوا تولید کن و درآمد کسب کن!"`}</h3>
          <p>
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
          className='w-1/3'
          width={300}
          height={330}
        />
      </div>
    </div>
  );
};

export default Income;
