import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";
import Head from "next/head";
import axios from "axios";
import { toast } from "react-toastify";

const Index = ({ food }) => {
  const [prices, setPrices] = useState(food.prices);
  const [price, setPrice] = useState(food.prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(food.extraOptions);
  const [extras, setExtras] = useState([]);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...food, extras, price, quantity: 1 }));
    toast.success("İt added to cart successfully", { autoClose: 1000 });
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  // const handleSize = (sizeIndex) => {
  //   setPrice(prices[sizeIndex])
  // };

  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(item.prices);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.prices);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  return (
    <>
      <Head>
        <title>Food Ordering | {food.title}</title>
      </Head>
      <div className="h-screen flex items-center justify-center gap-20 md:flex-row flex-col">
        <div className="relative md:h-[45%] md:w-[35%] h-[50%] w-[50%] lg:mt-0 mt-4">
          {/* <img src="/images/f1.png" alt="" className="h-full w-full" /> */}
          <Image src={food.img} alt={food.title} fill priority />
        </div>
        <div className="flex flex-col lg:items-start items-center">
          <Title className="text-6xl mb-8">{food.title}</Title>
          <span className="text-primary underline text-2xl font-bold inline-block mb-8 hover:scale-110 transition-all">
            ${price}
          </span>
          <p className="sm:max-w-2xl max-w-xs mb-8">{food.desc}</p>
          {food.category === "pizza" && (
            <div className="mb-10">
              <h4 className="font-bold mb-4">Choose The Size</h4>
              <div className="flex items-center gap-x-8">
                <div
                  className="relative h-8 w-8 hover:scale-110 transition-all cursor-pointer"
                  onClick={() => handleSize(0)}
                >
                  <Image src="/images/size.png" alt="" fill />
                  <span className="absolute top-0 -right-6 text-xs bg-primary text-black font-bold px-1 rounded-xl">
                    Small
                  </span>
                </div>
                <div
                  className="relative h-12 w-12 hover:scale-110 transition-all cursor-pointer"
                  onClick={() => handleSize(1)}
                >
                  <Image src="/images/size.png" alt="" fill />
                  <span className="absolute top-1 -right-7 text-xs bg-primary text-black font-bold px-1 rounded-xl">
                    Medium
                  </span>
                </div>
                <div
                  className="relative h-16 w-16 hover:scale-110 transition-all cursor-pointer"
                  onClick={() => handleSize(2)}
                >
                  <Image src="/images/size.png" alt="" fill />
                  <span className="absolute top-1 -right-1 text-xs bg-primary text-black font-bold px-1 rounded-xl">
                    Large
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="mb-8 flex flex-col">
            <h4 className="font-bold mb-2">Choose Additional Ingredients</h4>
            <div className="flex sm:flex-row flex-col gap-4 lg:items-start items-center mt-2">
              {extraItems.map((item) => (
                <label
                  className="flex items-center gap-1 cursor-pointer"
                  key={item._id}
                >
                  <input
                    type="checkbox"
                    className="accent-primary peer"
                    onChange={(e) => handleChange(e, item)}
                  />
                  <span className="peer-checked:font-semibold">
                    {item.text}
                    <span className="text-xs font-bold text-primary">{` (+$${item.prices})`}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button className="btn-primary mb-8" onClick={handleClick}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`
  );

  return {
    props: {
      food: res.data ? res.data : null,
    },
  };
};

export default Index;
