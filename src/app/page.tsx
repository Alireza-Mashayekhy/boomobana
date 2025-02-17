import Banner from '@/components/pages/Home/Banner';
import JoinUs from '@/components/pages/Home/JoinUs';
import LovelyCities from '@/components/pages/Home/LovelyCities';
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
    </div>
  );
}
