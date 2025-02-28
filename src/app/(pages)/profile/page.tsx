import { Banner } from '@/components/pages/Profile/Banner';
import { Information } from '@/components/pages/Profile/Information';
import { Posts } from '@/components/pages/Profile/Posts';

export default function Profile() {
  return (
    <div>
      <Banner />
      <Information />
      <Posts />
    </div>
  );
}
