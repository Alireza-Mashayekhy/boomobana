export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col items-center justify-center pt-[68px]'>
      <div className='w-full max-w-[1296px] relative px-5 md:px-12'>{children}</div>
    </div>
  );
}
