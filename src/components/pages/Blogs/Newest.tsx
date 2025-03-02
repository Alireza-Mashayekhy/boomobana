import Image from 'next/image';
import { Divider } from 'primereact/divider';

import BlogCard from '@/components/atoms/BlogCard';
import Title from '@/components/atoms/Title/indes';

const Newest = () => {
  return (
    <div>
      <Title
        title='تازه های بوم و بنا '
        description='"اقامت، معماری و سفر و: مثلثی از زیبایی ، پول و تفریح."'
      />
      <div className='relative flex items-start gap-10'>
        <div className='flex flex-col gap-10 w-2/3'>
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
          />{' '}
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
          />{' '}
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
          <div className='bg-primary-3 text-3xl rounded-xl text-center text-white p-5 aspect-[3]'>
            تبلیغات
          </div>
        </div>
        <div className='w-1/3 rounded-xl border border-secondary-15 sticky top-10 flex flex-col gap-5 p-6'>
          <h4 className='text-3xl font-bold'>تاریخ و تمدن ایران</h4>
          <Divider
            pt={{
              root: { className: 'border-secondary-15 !m-0 !p-0 border' }
            }}
          />
          <div className='flex gap-5 items-center'>
            <div className='aspect-square rounded-xl w-1/3 overflow-hidden'>
              <Image
                src='/images/homeBanner.jpg'
                alt='tarikh'
                loading='lazy'
                className='w-full h-full object-cover'
                width={300}
                height={200}
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h5 className='font-bold'>پل خشتی لنگرود</h5>
              <div className='text-sm text-secondary-10'>10/شهریور/1404</div>
            </div>
          </div>
          <Divider
            pt={{
              root: { className: 'border-secondary-15 !m-0 !p-0 border' }
            }}
          />
          <div className='flex gap-5 items-center'>
            <div className='aspect-square rounded-xl w-1/3 overflow-hidden'>
              <Image
                src='/images/homeBanner.jpg'
                alt='tarikh'
                loading='lazy'
                className='w-full h-full object-cover'
                width={300}
                height={200}
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h5 className='font-bold'>پل خشتی لنگرود</h5>
              <div className='text-sm text-secondary-10'>10/شهریور/1404</div>
            </div>
          </div>
          <Divider
            pt={{
              root: { className: 'border-secondary-15 !m-0 !p-0 border' }
            }}
          />
          <div className='flex gap-5 items-center'>
            <div className='aspect-square rounded-xl w-1/3 overflow-hidden'>
              <Image
                src='/images/homeBanner.jpg'
                alt='tarikh'
                loading='lazy'
                className='w-full h-full object-cover'
                width={300}
                height={200}
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h5 className='font-bold'>پل خشتی لنگرود</h5>
              <div className='text-sm text-secondary-10'>10/شهریور/1404</div>
            </div>
          </div>
          <Divider
            pt={{
              root: { className: 'border-secondary-15 !m-0 !p-0 border' }
            }}
          />
          <div className='flex gap-5 items-center'>
            <div className='aspect-square rounded-xl w-1/3 overflow-hidden'>
              <Image
                src='/images/homeBanner.jpg'
                alt='tarikh'
                loading='lazy'
                className='w-full h-full object-cover'
                width={300}
                height={200}
              />
            </div>
            <div className='flex flex-col gap-5'>
              <h5 className='font-bold'>پل خشتی لنگرود</h5>
              <div className='text-sm text-secondary-10'>10/شهریور/1404</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newest;
