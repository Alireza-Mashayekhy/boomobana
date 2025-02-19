import Image from 'next/image';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import { useState } from 'react';
import { FaBed, FaHome, FaRegBookmark } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { IoMdBookmark } from 'react-icons/io';
import { MdPhoneForwarded } from 'react-icons/md';
import { RiCustomSize } from 'react-icons/ri';
import { TbHomeDollar } from 'react-icons/tb';

interface PropsTypes {
  image: string;
  name: string;
  type: string;
  size: number;
  rooms: number;
  address: string;
  price?: string;
  mortgage?: number;
  rent?: number;
  agency: {
    image: string;
    adviserImage: string;
    name: string;
    adviserName: string;
  };
}

const AdvCard = (props: PropsTypes) => {
  const [saved, setSaved] = useState(false);
  return (
    <div className='bg-secondary-22 shadow-md rounded-2xl p-2 flex flex-col gap-4'>
      <div className='relative overflow-hidden rounded-xl aspect-[1.5]'>
        <Image
          src={props.image}
          alt={props.name}
          loading='lazy'
          className='w-full h-full object-cover'
          width={300}
          height={200}
        />
        <div className='absolute w-full bottom-0 left-0 p-2 bg-secondary-3/70 text-secondary-22 text-xs'>
          {props.name}
        </div>
        <div
          onClick={() => setSaved((prev) => !prev)}
          className='absolute cursor-pointer top-3 right-3 rounded-lg text-white bg-secondary-1/50 w-8 h-8 flex items-center justify-center '>
          {saved ? <IoMdBookmark className='text-xl' /> : <FaRegBookmark />}
        </div>
      </div>
      <div className='flex flex-col gap-4 px-2 text-secondary-1'>
        <div className='flex flex-wrap gap-2.5 justify-between'>
          <div className='flex items-center gap-2'>
            <FaHome className='text-xl' />
            {props.type}
          </div>
          <div className='flex items-center gap-2'>
            <RiCustomSize className='text-xl' />
            {props.size.toLocaleString()} متر
          </div>
          <div className='flex items-center gap-2'>
            <FaBed className='text-xl' />
            {props.rooms} خواب
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <ImLocation2 className='text-xl' />
          {props.address}
        </div>
        <div className='flex items-center gap-2'>
          <TbHomeDollar className='text-2xl' />
          <div>
            {props.mortgage && (
              <div className='flex items-center gap-1'>
                رهن:{' '}
                <span className='text-primary-1 font-bold'>
                  {(props.mortgage / 1000000).toLocaleString()} میلیون تومان
                </span>
              </div>
            )}
            {props.rent && (
              <div className='flex items-center gap-1'>
                اجاره:{' '}
                <span className='text-primary-1 font-bold'>
                  {(props.rent / 1000000).toLocaleString()} میلیون تومان
                </span>
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-center px-5'>
          <Divider
            pt={{
              root: { className: 'border-secondary-10 m-0 p-0 border' }
            }}
          />
        </div>
        <div className='flex items-start justify-between'>
          <div>
            <div className='flex items-center gap-4'>
              <Avatar
                image={props.agency.image}
                shape='circle'
                pt={{
                  root: { className: 'w-14 h-14 relative' },
                  image: { className: 'w-full h-full object-cover' }
                }}
              />
              <div className='text-sm'>{props.agency.name}</div>
            </div>
            <div className='flex items-center gap-4 -translate-y-5 -translate-x-7'>
              <Avatar
                image={props.agency.adviserImage}
                shape='circle'
                pt={{
                  root: { className: 'w-10 h-10 border-2 border-secondary-22' },
                  image: { className: 'w-full h-full object-cover' }
                }}
              />
              <div className='text-sm'>{props.agency.adviserName}</div>
            </div>
          </div>
          <div className='mt-2'>
            <button className='flex items-center gap-3 py-2 px-3 bg-primary-2 rounded-lg text-white'>
              <div>مشاوره</div>
              <MdPhoneForwarded />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvCard;
