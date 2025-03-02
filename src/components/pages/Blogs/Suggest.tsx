import BlogCard from '@/components/atoms/BlogCard';
import Button from '@/components/atoms/Button';

export const Suggest = () => {
  return (
    <div className='flex gap-10'>
      <div className='flex flex-col justify-between gap-4 w-1/3'>
        <h2 className='text-3xl font-bold'>پیشنهاد سردبیر </h2>
        <div className='flex flex-col items-center gap-2 text-xl'>
          منتخبی از مقالات برتر و خواندنی، انتخاب‌شده توسط سردبیر، برای کشف ایده‌ها و دیدگاه‌های جدید. 
        </div>
        <div className='flex justify-end'>
          <Button label='نمایش همه پست ها ' />
        </div>
      </div>
      <div className='w-2/3'>
        <BlogCard
          listMode
          image='/images/homeBanner.jpg'
          writerImage='/images/homeBanner.jpg'
          name='خانه تکانی عید را از کی و از کجا شروع کنیم؟'
          type='املاک'
          description='در این نوشتار می‌خواهیم برایتان شرح دهیم که خانه تکانی را چگونه شروع کنیم؟ اگر خانه ای بزرگ دارید و یا اگر می‌خواهید از خانه تکانی خسته نشوید و سال جدید را با خستگی و کوفتگی ناشی از خانه تکانی آغاز نکنید، پیشنهاد می‌کنیم با یک برنامه ریزی زمانی درست و حساب شده کارهای خانه را از نیمه زمستان یا روزهای پایانی بهمن ماه شروع کنید '
          writer='رویا کوهستانی '
          comments={580}
          star={4.5}
        />
      </div>
    </div>
  );
};
