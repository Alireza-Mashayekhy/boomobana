import Button from '@/components/atoms/Button';

export const Weekly = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 sm:gap-10'>
      <div className='flex w-full lg:w-1/3 flex-col justify-between gap-2 sm:gap-4'>
        <h2 className='text-xl sm:text-3xl font-bold'>خبرنامه هفتگی </h2>
        <div className='flex flex-col items-center text-center gap-2 sm:text-xl'>
          <h3>پربازدیدترین‌های هفته:</h3>
          <h3>مطالب پرطرفدار و موردعلاقه کاربران!</h3>
        </div>
        <div className='flex justify-end'>
          <Button label='نمایش همه پست ها ' />
        </div>
      </div>
      <div className='w-full lg:w-2/3 flex flex-col sm:flex-row gap-5 sm:gap-10'>
        <div className='relative text-white rounded-2xl overflow-hidden bg-[url("/images/homeBanner.jpg")] bg-no-repeat bg-cover aspect-video w-full'>
          <div className='absolute top-4 right-4 text-sm px-5 py-2 rounded-2xl bg-black/50'>املاک </div>
          <div className='absolute w-full bottom-0 right-0 text-sm bg-black/50 p-2'>
            بهترین زمان خانه‌تکانی نوروز،{' '}
          </div>
        </div>
        <div className='relative text-white rounded-2xl overflow-hidden bg-[url("/images/homeBanner.jpg")] bg-no-repeat bg-cover aspect-video w-full'>
          <div className='absolute top-4 right-4 text-sm px-5 py-2 rounded-2xl bg-black/50'>
            تاریخ و تمدن{' '}
          </div>
          <div className='absolute w-full bottom-0 right-0 text-sm bg-black/50 p-2'>
            بهترین زمان خانه‌تکانی نوروز،{' '}
          </div>
        </div>
      </div>
    </div>
  );
};
