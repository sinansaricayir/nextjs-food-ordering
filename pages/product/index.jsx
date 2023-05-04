import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState } from "react";

const extraItems = [
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

const Index = () => {
  const [price, setPrice] = useState(10);
  const [extras, setExtras] = useState(extraItems);

  const handleExtra = (checked, extraPrice) => {
    if (checked == true) {
      setPrice(price + extraPrice);
    } else {
      setPrice(price - extraPrice);
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
          <div className="mb-6">
            <h4 className="font-bold mb-2">Choose The Size</h4>
            <div className="flex items-center gap-x-8">
              <div className="relative h-8 w-8 hover:scale-110 transition-all cursor-pointer">
                <Image src="/images/size.png" alt="" fill />
                <span className="absolute top-0 -right-6 text-xs bg-primary text-black font-bold px-1 rounded-xl">
                  Small
                </span>
              </div>
              <div className="relative h-12 w-12 hover:scale-110 transition-all cursor-pointer">
                <Image src="/images/size.png" alt="" fill />
                <span className="absolute top-1 -right-7 text-xs bg-primary text-black font-bold px-1 rounded-xl">
                  Medium
                </span>
              </div>
              <div className="relative h-16 w-16 hover:scale-110 transition-all cursor-pointer">
                <Image src="/images/size.png" alt="" fill />
                <span className="absolute top-1 -right-1 text-xs bg-primary text-black font-bold px-1 rounded-xl">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h4 className="font-bold mb-2">Choose Additional Ingredients</h4>
            <div className="flex items-center gap-4">
              {extras.map((extra) => (
                <label
                  className="flex items-center gap-1 cursor-pointer"
                  key={extra.id}
                  onChange={(e) => handleExtra(e.target.checked, extra.price)}
                >
                  <input type="checkbox" className="accent-primary peer" />
                  <span className="peer-checked:font-semibold">
                    {extra.name}{" "}
                    <span className="text-xs font-bold text-primary">{`(+${extra.price}$)`}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button className="btn-primary mb-8">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Index;
