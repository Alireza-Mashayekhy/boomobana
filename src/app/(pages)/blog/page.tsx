import { Ads } from '@/components/pages/Blogs/Ads';
import { Banner } from '@/components/pages/Blogs/Banner';
import { Categories } from '@/components/pages/Blogs/Categories';
import Newest from '@/components/pages/Blogs/Newest';
import { Suggest } from '@/components/pages/Blogs/Suggest';
import Trending from '@/components/pages/Blogs/Trending';
import { Weekly } from '@/components/pages/Blogs/Weekly';

export default function Blogs() {
  return (
    <div className='flex flex-col gap-10 sm:gap-20 py-10'>
      <Categories />
      <Banner />
      <Ads />
      <Weekly />
      <Trending />
      <Ads />
      <Newest />
      <Suggest />
    </div>
  );
}
