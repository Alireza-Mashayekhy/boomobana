interface PropsTypes {
  image: string;
  name: string;
  type: string;
  size: string;
  rooms: string;
  address: string;
  price?: string;
  mortgage?: string;
  rent?: string;
  agency: {
    image: string;
    adviserImage: string;
    name: string;
    adviserName: string;
  };
}

const AdvCard = () => {
  return <div />;
};

export default AdvCard;
