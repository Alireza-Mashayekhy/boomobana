import Image from 'next/image';

import Title from '@/components/atoms/Title/indes';

const Approach = () => {
  return (
    <div className='px-5 py-8 md:p-12'>
      <div className='flex flex-col md:flex-row gap-5 md:gap-20 items-start'>
        <div className='flex flex-col gap-3 md:gap-5 w-full md:w-3/5'>
          <Title title='رویکرد بوم و بنا' />
          <p className='text-sm md:text-base'>
            بوم و بنا بر پایش بازار مسکن و ارائه تحلیل‌های کارشناسی است تا کاربران را در سرمایه‌گذاری
            هوشمندانه راهنمایی کند. همچنین، با توجه به ظرفیت‌های بی‌نظیر ایران در گردشگری، بر نقش این صنعت
            به‌عنوان جایگزینی پایدار برای درآمدهای نفتی تأکید دارد. با حمایت از بلاگرها و تولید محتوای هدفمند،
            بوم و بنا به معرفی جاذبه‌های گردشگری ایران پرداخته و گامی مؤثر در توسعه این صنعت برمی‌دارد.
          </p>
          <p className='text-sm md:text-base'>
            این پلتفرم امیدوار است با ارائه ابزارها و اطلاعات دقیق، خدمتی ارزشمند به کاربران ارائه دهد و نقش
            مؤثری در رشد اقتصادی ایفا کند.
          </p>
        </div>
        <Image
          src='/images/Home/approach.png'
          alt='approach banner'
          loading='lazy'
          className='w-full md:w-2/5'
          width={500}
          height={330}
        />
      </div>
    </div>
  );
};

export default Approach;
