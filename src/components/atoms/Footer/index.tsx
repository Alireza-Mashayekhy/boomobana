import Image from 'next/image';
import Link from 'next/link';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
  BsWhatsapp,
  BsYoutube
} from 'react-icons/bs';

import Button from '../Button';

const Footer = () => {
  return (
    <div className='bg-[url("/images/footer.png")] bg-no-repeat bg-cover bg-center hidden lg:flex flex-col items-center justify-center'>
      <div className='px-12 py-10  flex justify-between gap-5 w-full max-w-[1200px]'>
        <div className='w-2/6'>
          <div className='flex gap-7'>
            <Image src='/logo.svg' alt='Boomobana' width={100} height={130} className='w-24 ' />
            <div className='flex flex-col w-full justify-between'>
              <div className='flex gap-6'>
                <Link
                  href='/'
                  className='w-full flex py-2 text-white items-center justify-center gap-2 bg-[#576ACC] rounded-lg'>
                  <div>Follow</div>
                  <BsTelegram className='text-xl' />
                </Link>
                <Link
                  href='/'
                  className='w-full flex py-2 text-white items-center justify-center gap-2 bg-[#E1306C] rounded-lg'>
                  <div>Follow</div>
                  <BsInstagram className='text-xl' />
                </Link>
              </div>
              <div className='flex justify-between gap-5 mt-5 text-2xl text-white'>
                <Link href='/'>
                  <BsLinkedin />
                </Link>
                <Link href='/'>
                  <BsYoutube />
                </Link>
                <Link href='/'>
                  <BsTwitter />
                </Link>
                <Link href='/'>
                  <BsWhatsapp />
                </Link>
                <Link href='/'>
                  <BsFacebook />
                </Link>
              </div>
            </div>
          </div>
          <p className='text-white font-extralight mt-7'>
            بوم و بنا، با استفاده از فناوری‌های پیشرفته و ایجاد یک پایگاه داده‌های ملکی جامع، پشتیبانی
            هوشمندانه‌ای را برای تمامی فعالان حوزه‌های مسکن و گردشگری فراهم می‌کند. این پلتفرم با ارائه
            ابزارهای نوآورانه و امکان دریافت درخواست‌های متنوع، فرصت‌های جدیدی برای درآمدزایی و تجربه‌ای
            منحصربه‌فرد در این حوزه‌ها ایجاد کرده است.
          </p>
        </div>
        <div className='flex text-white flex-col gap-5'>
          <div>سامانه های بوم و بنا</div>
          <Link href='/' className='font-extralight'>
            پنل کاربری{' '}
          </Link>
          <Link href='/' className='font-extralight'>
            دستیار بلاگر{' '}
          </Link>
          <Link href='/' className='font-extralight'>
            پنل اقامتگاه{' '}
          </Link>
          <Link href='/' className='font-extralight'>
            دستیار مشاور{' '}
          </Link>
          <Link href='/' className='font-extralight'>
            دستیار آژانس املاک{' '}
          </Link>
        </div>
        <div className='flex text-white flex-col gap-5'>
          <div>در بوم و بنا </div>
          <Link href='/' className='font-extralight'>
            درباره ما{' '}
          </Link>
          <Link href='/' className='font-extralight'>
            تماس با ما{' '}
          </Link>
          <Link href='/' className='font-extralight'>
            استخدام{' '}
          </Link>
          <Link href='/' className='font-extralight'>
            سوالات متداول
          </Link>
          <Link href='/' className='font-extralight'>
            قوانین و مقرارات{' '}
          </Link>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-start'>
            <Image
              src='/images/samandehi.png'
              alt='samandehi'
              width={100}
              height={130}
              className='w-28 min-w-28 '
            />
            <Image
              src='/images/enamad.png'
              alt='enamad'
              width={100}
              height={130}
              className='w-20 min-w-20 '
            />
            <Image
              src='/images/majazi.png'
              alt='majazi'
              width={100}
              height={130}
              className='w-24 min-w-24 '
            />
          </div>
          <h5 className='text-white text-center mb-10'>عضویت در خبر نامه بوم و بنا</h5>
          <div className='flex items-center p-2 bg-white rounded-md'>
            <input placeholder='ایمیل خود را وارد کنید ' className='outline-none text-sm px-3' />
            <Button label='ارسال ایمیل' customClasses='!p-3' labelClasses='text-sm' />
          </div>
        </div>
      </div>
      <h6 className='text-xs text-white mb-8'>
        کلیه حقوق مادی و معنوی این سایت متعلق است به شرکت پدیده سازان بوم و بنا نو اندیش
      </h6>
    </div>
  );
};

export default Footer;
