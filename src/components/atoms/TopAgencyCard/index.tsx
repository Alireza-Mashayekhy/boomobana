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
    <div className='p-0.5 rounded-2xl bg-gradient-to-b from-[#FA5B3D] via-[#D0CE62] to-[#28A647]'>
      <div className='rounded-2xl bg-secondary-21 p-4 flex flex-col items-center gap-2.5'>
        <Avatar image={image} />
        <div>{name}</div>
        <p>{description}</p>
        <Rating readOnly value={5} />
      </div>
    </div>
  );
};

export default TopAgencyCard;
