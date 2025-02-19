import Approach from '@/components/pages/Home/Approach';
import Banner from '@/components/pages/Home/Banner';
import Blogs from '@/components/pages/Home/blogs';
import Categories from '@/components/pages/Home/Categories';
import FreeAdv from '@/components/pages/Home/FreeAdv';
import Income from '@/components/pages/Home/Income';
import JoinUs from '@/components/pages/Home/JoinUs';
import LovelyCities from '@/components/pages/Home/LovelyCities';
import NewestPosts from '@/components/pages/Home/NewestPosts';
import SecondSection from '@/components/pages/Home/SecondSection';
import TopAgencies from '@/components/pages/Home/TopAgencies';

export default function Home() {
  return (
    <div>
      <Banner />
      <SecondSection />
      <LovelyCities />
      <TopAgencies />
      <JoinUs />
      <NewestPosts />
      <Income />
      <Blogs />
      <FreeAdv />
      <Categories />
      <Approach />
    </div>
  );
}
