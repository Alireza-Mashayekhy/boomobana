import { Ads } from '@/components/pages/Blogs/Ads';
import { Banner } from '@/components/pages/Blogs/Banner';
import { Categories } from '@/components/pages/Blogs/Categories';

export default function Blogs() {
  return (
    <div className='flex flex-col gap-10 py-10'>
      <Categories />
      <Banner />
      <Ads />
    </div>
  );
}
