import { Avatar } from 'primereact/avatar';
import { Rating } from 'primereact/rating';

const TopAgencyCard = ({
  name,
  image,
  description
}: {
  name: string;
  image: string;
  description: string;
}) => {
  return (
    <div className='relative p-0.5 group overflow-hidden rounded-2xl cursor-pointer'>
      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[200%] h-[200%]  bg-gradient-to-b from-[#FA5B3D] via-[#D0CE62] to-[#28A647] group-hover:rotate-180 transition-all duration-500' />
      <div className='rounded-2xl bg-secondary-21 p-4 px-2 flex flex-col items-center gap-3 relative'>
        <Avatar
          shape='circle'
          image={image}
          pt={{ root: { className: 'w-16 h-16' }, image: { className: 'w-full h-full object-cover' } }}
        />
        <h4 className='text-sm text-center'>{name}</h4>
        <p className='text-xs text-center line-clamp-1 text-secondary-9'>{description}</p>
        <Rating
          readOnly
          value={4}
          cancel={false}
          pt={{
            item: { className: 'w-4 h-4' },
            onIcon: { className: '!text-primary-1' },
            root: { className: 'gap-0.5' }
          }}
        />
      </div>
    </div>
  );
};

export default TopAgencyCard;
