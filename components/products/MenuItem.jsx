import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MenuItem = ({ image, title, text, price }) => {
  return (
    <div className=" bg-secondary text-white shadow-2xl shadow-black rounded-2xl">
      <div className="bg-[#f1f2f3] w-full h-[210px] grid place-content-center rounded-bl-[30px] rounded-t-xl">
        <Image
          className="hover:scale-110 transition-all"
          src={image}
          width={150}
          height={150}
          alt=""
          objectFit="cover"
        />
      </div>
      <div className="h-40">
        <h4 className="mx-2 mb-2 mt-6 text-xl">{title}</h4>
        <p className="text-sm mx-2 font-thin">{text}</p>
        <div className="flex items-center justify-between mx-6">
          <span>${price}</span>
          <button className="bg-primary p-3 rounded-full">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
