import Banner from '@/components/pages/Home/Banner';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Banner />
      <div className='w-full max-w-[1200px] relative'>{children}</div>
    </div>
  );
}
