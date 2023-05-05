import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

const itemsExtra = [
  {
    id: 1,
    name: "ketçap",
    price: 1,
  },
  {
    id: 2,
    name: "acı sos",
    price: 2,
  },
  {
    id: 3,
    name: "mayonez",
    price: 1,
  },
  {
    id: 4,
    name: "hardal",
    price: 2,
  },
];

const foodItems = [
  {
    id: 1,
    name: "Good Pizza",
    image: "/images/size.png",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ullam neque vero, pariatur velit tempore rem autem adipisci minima ea numquam nemo nihil nesciunt? Nesciunt.",
  },
];

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra);
  const [extras, setExtras] = useState([]);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...foodItems[0], extras, price, quantity: 1 }));
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
      changePrice(item.price);
      setExtras([...extras, item]);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center gap-20 md:flex-row flex-col">
        <div className="relative md:h-[45%] md:w-[35%] h-[50%] w-[50%] lg:mt-0 mt-4">
          {/* <img src="/images/f1.png" alt="" className="h-full w-full" /> */}
          <Image src="/images/f1.png" alt="" fill />
        </div>
        <div className="flex flex-col lg:items-start items-center">
          <Title className="text-6xl mb-8">Good Pizza</Title>
          <span className="text-primary underline text-2xl font-bold inline-block mb-8 hover:scale-110 transition-all">
            ${price}
          </span>
          <p className="sm:max-w-2xl max-w-xs mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            ullam neque vero, pariatur velit tempore rem autem adipisci minima
            ea numquam nemo nihil nesciunt? Nesciunt.
          </p>
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
          <div className="mb-8 flex flex-col">
            <h4 className="font-bold mb-2">Choose Additional Ingredients</h4>
            <div className="flex sm:flex-row flex-col gap-4 lg:items-start items-center mt-2">
              {extraItems.map((item) => (
                <label
                  className="flex items-center gap-1 cursor-pointer"
                  key={item.id}
                >
                  <input
                    type="checkbox"
                    className="accent-primary peer"
                    onChange={(e) => handleChange(e, item)}
                  />
                  <span className="peer-checked:font-semibold">
                    {item.name}
                    <span className="text-xs font-bold text-primary">{`(+${item.price}$)`}</span>
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

export default Index;
