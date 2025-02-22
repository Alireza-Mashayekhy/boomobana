import Image from 'next/image';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen w-screen bg-secondary-22 p-16 relative'>
      <div className='relative w-full h-full rounded-2xl shadow-2xl overflow-hidden'>
        <Image
          src='/images/signUp.jpg'
          alt='sign up'
          width={1180}
          height={630}
          className='absolute left-0 top-0 w-full h-full object-cover'
        />
        <div className='relative p-12 pr-40 flex gap-5 h-full'>
          <div>
            <h2 className='text-4xl font-bold mb-4'>بوم و بنا</h2>
            <p>{`"با هوشمندترین پلتفرم مسکن و گردشگری، سریع‌تر فرصت‌های جدید پیدا کن و درآمدت رو بیشتر کن! همین حالا عضو شو 🚀"`}</p>
          </div>
          <div className='min-w-[400px] bg-secondary-22 rounded-2xl p-8 h-full'>{children}</div>
        </div>
      </div>
    </div>
  );
}
