import Image from 'next/image';
import { Avatar } from 'primereact/avatar';
import { Divider } from 'primereact/divider';
import { FaStar } from 'react-icons/fa';
import { IoIosChatboxes } from 'react-icons/io';

interface PropsTypes {
  image: string;
  name: string;
  type: string;
  description: string;
  writerImage: string;
  writer: string;
  comments: number;
  star?: number;
}

const BlogCard = (props: PropsTypes) => {
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
        <h5 className='absolute w-full bottom-0 left-0 p-2 bg-secondary-3/70 text-secondary-22 text-xs'>
          {props.name}
        </h5>
        <div className='absolute top-3 right-3 rounded-lg text-white bg-secondary-1/50 text-sm px-5 py-2'>
          {props.type}
        </div>
      </div>
      <div className='flex flex-col gap-4 px-2 text-secondary-1'>
        <p className='text-sm text-secondary-1'>{props.description}</p>
        <Divider
          pt={{
            root: { className: 'border-secondary-10 m-0 p-0 border' }
          }}
        />
        <div className='flex items-start justify-between '>
          <div className='flex items-center gap-1'>
            <Avatar
              image={props.writerImage}
              shape='circle'
              pt={{
                root: { className: 'w-10 h-10 relative' },
                image: { className: 'w-full h-full object-cover' }
              }}
            />
            <div className='text-sm'>{props.writer}</div>
          </div>
          <div className='flex gap-5'>
            <div className='flex flex-col gap-1 items-center'>
              <IoIosChatboxes className='text-xl text-secondary-8 ' />
              {props.comments}
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <FaStar className='text-xl text-primary-1' />
              {props.star}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
