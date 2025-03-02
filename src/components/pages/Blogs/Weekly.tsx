import Button from '@/components/atoms/Button';

export const Weekly = () => {
  return (
    <div className='grid grid-cols-3 gap-10'>
      <div className='flex flex-col justify-between gap-4'>
        <h2 className='text-3xl font-bold'>خبرنامه هفتگی </h2>
        <div className='flex flex-col items-center gap-2 text-xl'>
          <h3>پربازدیدترین‌های هفته:</h3>
          <h3>مطالب پرطرفدار و موردعلاقه کاربران!</h3>
        </div>
        <div className='flex justify-end'>
          <Button label='نمایش همه پست ها ' />
        </div>
      </div>
      <div className='relative text-white rounded-2xl overflow-hidden bg-[url("/images/homeBanner.jpg")] bg-no-repeat bg-cover aspect-video w-full'>
        <div className='absolute top-4 right-4 text-sm px-5 py-2 rounded-2xl bg-black/50'>املاک </div>
        <div className='absolute w-full bottom-0 right-0 text-sm bg-black/50 p-2'>
          بهترین زمان خانه‌تکانی نوروز،{' '}
        </div>
      </div>
      <div className='relative text-white rounded-2xl overflow-hidden bg-[url("/images/homeBanner.jpg")] bg-no-repeat bg-cover aspect-video w-full'>
        <div className='absolute top-4 right-4 text-sm px-5 py-2 rounded-2xl bg-black/50'>تاریخ و تمدن </div>
        <div className='absolute w-full bottom-0 right-0 text-sm bg-black/50 p-2'>
          بهترین زمان خانه‌تکانی نوروز،{' '}
        </div>
      </div>
    </div>
  );
};
