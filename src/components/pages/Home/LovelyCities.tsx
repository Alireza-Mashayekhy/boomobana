import LovelyCard from '@/components/atoms/LovelyCard';
import Title from '@/components/atoms/Title/indes';

const LovelyCities = () => {
  const cities = [
    {
      name: 'کردستان',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'تهران',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'البرز',
      image: '/images/Home/Kordestan.png'
    },
    {
      name: 'مشهد',
      image: '/images/Home/Kordestan.png'
    }
  ];

  return (
    <div className='p-12'>
      <Title title='شهرهای محبوب و پربازدید' />
      <div className='flex justify-center'>
        <div className='grid grid-cols-4 gap-6 w-full max-w-[1400px]'>
          {cities.map((city) => {
            return <LovelyCard key={city.name} name={city.name} image={city.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LovelyCities;
