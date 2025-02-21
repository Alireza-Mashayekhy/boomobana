const Title = ({ title, description }: { title: string; description?: string }) => {
  return (
    <div className='flex gap-5 mb-5 md:mb-10'>
      <span className='w-1 bg-gradient-to-b from-primary-1 from-50% to-primary-2 rounded-full' />
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl md:text-3xl font-bold'>{title}</h2>
        {description && <h3 className='text-xs md:text-base'>{description}</h3>}
      </div>
    </div>
  );
};

export default Title;
