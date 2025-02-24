import '@/styles/globals.css';
import '@/styles/fonts.css';

import type { Metadata } from 'next';

import PrimeReactProvider from '@/providers/PrimeReactProvider';

export const metadata: Metadata = {
  title: 'بوم و بنا',
  description:
    'پیدا کردن اقامتگاه و ملک رویایی شما | خرید، فروش و اجاره ویلا، آپارتمان و املاک در بهترین مناطق | با ما به سادگی خانه‌ی خود را پیدا کنید.',
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='canonical' href='https://boomobana.com/' />
      <body className='overflow-x-hidden'>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
