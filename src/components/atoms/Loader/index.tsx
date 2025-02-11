const Loader = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
      <div className='w-2 h-2 bg-gray-500 rounded-full animate-bounce' />
      <div className='w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.3s]' />
      <div className='w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.6s]' />
    </div>
  );
};

export default Loader;
