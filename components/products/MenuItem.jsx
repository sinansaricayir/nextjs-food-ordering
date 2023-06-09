import { addProduct } from "@/redux/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const MenuItem = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispacth = useDispatch();

  const findCart = cart.products.find((item) => item._id === product._id);

  const handleDisabled = () => {
    dispacth(
      addProduct({
        ...product,
        extras: [{ text: "empty" }],
        price: product.prices[0],
        quantity: 1,
      })
    );
  };

  return (
    <div className=" bg-secondary text-white shadow-2xl shadow-black rounded-2xl relative">
      <Link href={`/product/${product._id}`}>
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
      <div className="flex flex-col items-center justify-center mt-2 mx-2 min-h-[190px]">
        <h4 className="mx-2 mb-4 mt-6 text-xl font-bold">{product.title}</h4>
        <p className="text-sm mx-2 font-thin">{product.desc}</p>
      </div>
      <div className="flex items-center justify-between mx-4">
        <span className="absolute top-36 left-3 font-bold rounded-full p-2 text-black text-xl border shadow-xl hover:scale-105 duration-300">
          ${product.prices[0]}
        </span>
        <button
          disabled={findCart}
          onClick={handleDisabled}
          className={`absolute top-36 right-3 bg-primary p-3 rounded-full cursor:pointer  
          ${
            findCart && "cursor-not-allowed opacity-50"
          }  hover:scale-105 duration-300 hover:opacity-70 transition-all shadow-xl`}
        >
          <AiOutlineShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
