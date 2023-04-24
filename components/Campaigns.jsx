import Title from "./ui/Title";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CampaignItem = ({ img, title, discount }) => {
  return (
    <div className="flex lg:flex-row flex-col justify-around items-center bg-secondary w-full sm:py-4 py-8 sm:px-4 px-6 sm:rounded-3xl rounded-full shadow-xl ease-in duration-500">
      <div className="hover:scale-110 transition-all duration-500 lg:mb-0 mb-4">
        <Image
          src={img}
          alt={title}
          width={150}
          height={150}
          className="rounded-full border-4 border-primary"
        />
      </div>
      <div className="font-bold font-dancing text-white text-2xl flex flex-col items-center justify-center gap-y-6 ">
        <h5>
          <Title>{title}</Title>
        </h5>
        <h6>
          <span>{discount}% Off</span>
        </h6>
        <button className="btn-primary flex items-center gap-2 lg:mb-0 mb-2">
          Order Now
          <AiOutlineShoppingCart size={30} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex sm:flex-row flex-col  gap-12 container mx-auto mb-10 mt-24 ">
      <CampaignItem
        img="/images/o1.jpg"
        title="Tasty Thursdays"
        discount={15}
      />
      <CampaignItem img="/images/o2.jpg" title="Pizza Days" discount={25} />
    </div>
  );
};

export default Campaigns;
