import Image from 'next/image';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen w-screen bg-secondary-22 p-5 sm:p-16 relative'>
      <div className='relative w-full h-full rounded-2xl shadow-2xl overflow-hidden'>
        <Image
          src='/images/signUp.jpg'
          alt='sign up'
          width={1180}
          height={630}
          className='absolute left-0 top-0 w-full h-full object-cover'
        />
        <div className='relative p-7 sm:p-12 lg:pr-40 flex flex-col items-center lg:items-start lg:flex-row gap-5 h-full'>
          <div>
            <h2 className='text-2xl sm:text-4xl font-bold mb-4'>بوم و بنا</h2>
            <p className='text-xs sm:text-base'>{`"با هوشمندترین پلتفرم مسکن و گردشگری، سریع‌تر فرصت‌های جدید پیدا کن و درآمدت رو بیشتر کن! همین حالا عضو شو 🚀"`}</p>
          </div>
          <div className='w-full sm:w-[400px] sm:min-w-[400px] bg-secondary-22 rounded-2xl p-5 sm:p-8 h-full overflow-auto'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
