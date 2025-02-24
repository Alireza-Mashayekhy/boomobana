export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full relative flex items-center justify-center pt-[68px] '>
      <div className='w-full max-w-[1280px] relative px-10'>{children}</div>
    </div>
  );
}
