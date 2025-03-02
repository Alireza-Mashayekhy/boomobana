import { Avatar } from 'primereact/avatar';

export const Banner = () => {
  return (
    <div className='flex gap-10'>
      <div className='w-2/3 relative bg-[url("/images/homeBanner.jpg")] bg-no-repeat bg-cover flex flex-col items-center justify-center rounded-2xl'>
        <div className='absolute py-2 px-10 top-0 right-0 text-3xl font-bold bg-white rounded-bl-xl'>
          پست های ویژه
        </div>
        <div className='text-white text-xl font-semibold max-w-96 w-full text-left'>10/شهریور/1404</div>
        <div className='text-white text-3xl font-semibold max-w-96 leading-relaxed'>
          معماری ایران باستان یا معماری معاصر انتخابی سخت برای طراحان نما{' '}
        </div>
        <div className='flex items-center max-w-96 w-full gap-2'>
          <Avatar
            image='/images/Home/agency.png'
            shape='circle'
            pt={{ root: { className: 'w-10 h-10' }, image: { className: 'w-full h-full object-cover' } }}
          />
          <div className='text-white text-xs'>مبینا کاکا سر</div>
          <div className='text-white text-xs'>مطالعه در 5 دقیقه </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 w-1/3 text-white'>
        <div className='relative rounded-2xl overflow-hidden bg-[url("/images/homeBanner.jpg")] bg-no-repeat bg-cover aspect-video w-full'>
          <div className='absolute top-4 right-4 text-sm px-5 py-2 rounded-2xl bg-black/50'>
            معماری و دکوراسیون
          </div>
          <div className='absolute w-full bottom-0 right-0 text-sm bg-black/50 p-2'>
            سیستم هوشمند به سراغ معماری می آید
          </div>
        </div>
        <div className='relative rounded-2xl overflow-hidden bg-[url("/images/homeBanner.jpg")] bg-no-repeat bg-cover aspect-video w-full'>
          <div className='absolute top-4 right-4 text-sm px-5 py-2 rounded-2xl bg-black/50'>
            معماری و دکوراسیون
          </div>
          <div className='absolute w-full bottom-0 right-0 text-sm bg-black/50 p-2'>
            سیستم هوشمند به سراغ معماری می آید
          </div>
        </div>
      </div>
    </div>
  );
};
