const LovelyCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div
      className='aspect-[1.3] cursor-pointer w-full rounded-2xl flex items-center justify-center overflow-hidden bg-no-repeat group'
      style={{
        background: `url(${image}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className='w-full h-full bg-secondary-1/40 text-secondary-22 backdrop-blur-sm opacity-0 p-5 group-hover:opacity-100 transition flex items-center justify-center font-bold text-2xl'>
        {name}
      </div>
    </div>
  );
};

export default LovelyCard;
