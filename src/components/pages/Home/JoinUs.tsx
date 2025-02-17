import Image from 'next/image';

import Button from '@/components/atoms/Button';

const JoinUs = () => {
  return (
    <div className='p-12 pt-20  '>
      <div className='flex gap-5 rounded-tl-[150px] rounded-br-[150px] rounded-tr-[20px] rounded-bl-[20px] bg-gradient-to-r from-[#128D7E] to-secondary-1'>
        <Image
          src='/images/Home/joinUs.png'
          alt='join us'
          width={300}
          height={300}
          className='relative bottom-20'
        />
        <div className='p-12 pr-0 flex flex-col gap-5 items-end justify-between'>
          <h3 className='text-3xl text-secondary-22 font-bold w-full'>
            شما هم می‌توانید به جمع آژانس‌های املاک بوم و بنا بپیوندید!
          </h3>
          <p className='text-secondary-22'>
            دیگر نیازی به روش‌های سنتی بازاریابی نیست! با ثبت نام در سیستم هوشمند بوم و بنا، املاک خود را به
            هزاران خریدار واقعی معرفی کنید و سریع‌تر از همیشه معامله کنید. فرصت را از دست ندهید، همین امروز
            شروع کنید! 🏡💼
          </p>
          <Button label='توضحیات بیشت ر  ' customClasses='px-5' />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
