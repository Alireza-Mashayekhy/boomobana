import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src='/images/homeBanner.jpg' alt='home banner' className='w-full' width={1440} height={820} />
    </div>
  );
}
