import { BottomNav } from '@/components/atoms/BottomNav';
import Footer from '@/components/atoms/Footer';
import { Nav } from '@/components/atoms/Nav';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full relative'>
      <Nav />
      <div>{children}</div>
      <Footer />
      <BottomNav />
    </div>
  );
}
