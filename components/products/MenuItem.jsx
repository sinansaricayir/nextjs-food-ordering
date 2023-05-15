import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MenuItem = ({ product }) => {
  return (
    <div className=" bg-secondary text-white shadow-2xl shadow-black rounded-2xl">
      <Link href="/product">
        <div className="bg-[#f1f2f3] w-full h-[210px] grid place-content-center rounded-bl-[30px] rounded-t-xl">
          <Image
            className="hover:scale-110 transition-all duration-500"
            src={product.img}
            width={150}
            height={150}
            alt=""
            priority
          />
        </div>
      </Link>
      <div className="h-40 flex flex-col items-center min-h-[230px]">
        <h4 className="mx-2 mb-4 mt-6 text-xl font-bold">{product.title}</h4>
        <p className="text-sm mx-2 font-thin">{product.desc}</p>
        <div className="flex items-center justify-around w-full mx-6 mt-6">
          <span className="font-bold border rounded-full p-2 border-[#f1f2f3]">
            ${product.prices[0]}
          </span>
          <button className="bg-primary p-3 rounded-full cursor:pointer hover:opacity-70 transition-all">
            <AiOutlineShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
