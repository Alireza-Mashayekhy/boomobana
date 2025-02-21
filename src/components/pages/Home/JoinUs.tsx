import Image from 'next/image';

import Button from '@/components/atoms/Button';

const JoinUs = () => {
  return (
    <div className='px-5 py-8 pt-16 md:p-12 md:pt-20'>
      <div className='flex flex-col md:flex-row md:gap-5 rounded-tl-[100px] sm:rounded-tl-[150px] rounded-br-[100px] sm:rounded-br-[150px] rounded-tr-[20px] rounded-bl-[20px] bg-gradient-to-r from-[#128D7E] to-secondary-1'>
        <div className='flex justify-center'>
          <Image
            src='/images/Home/joinUs.png'
            alt='join us'
            width={300}
            height={300}
            className='relative bottom-20 w-[200px] min-w-[200px] sm:w-[300px] sm:min-w-[300px]'
          />
        </div>
        <div className='p-8 pt-0 md:p-12 md:pr-0 flex flex-col gap-5 items-end justify-between'>
          <h3 className='text-xl md:text-3xl text-secondary-22 font-bold w-full'>
            شما هم می‌توانید به جمع آژانس‌های املاک بوم و بنا بپیوندید!
          </h3>
          <p className='text-secondary-22 text-xs md:text-base'>
            دیگر نیازی به روش‌های سنتی بازاریابی نیست! با ثبت نام در سیستم هوشمند بوم و بنا، املاک خود را به
            هزاران خریدار واقعی معرفی کنید و سریع‌تر از همیشه معامله کنید. فرصت را از دست ندهید، همین امروز
            شروع کنید! 🏡💼
          </p>
          <Button
            label='توضحیات بیشتر '
            customClasses='!py-3 !px-4 sm:!py-4 sm:!px-5 !bg-primary-3'
            labelClasses='!text-sm'
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
