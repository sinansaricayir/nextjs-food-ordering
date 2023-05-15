import { useEffect, useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filter, setfilter] = useState([]);

  useEffect(() => {
    setfilter(
      productList.filter(
        (product) =>
          product.category === categoryList[active].title.toLocaleLowerCase()
      )
    );
  }, [productList, categoryList, active]);

  return (
    <div className="container mx-auto mb-20">
      <Title className="text-4xl text-center mt-20">Our Menu</Title>
      <div className="flex justify-center mt-8 flex-wrap">
        {categoryList &&
          categoryList.map((category, index) => (
            <button
              key={category._id}
              className={`px-6 py-1 cursor-pointer rounded-2xl duration-300 ease-out ${
                index === active ? "bg-secondary text-white scale-105" : " "
              }`}
              onClick={() => setActive(index)}
            >
              {category.title}
            </button>
          ))}
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-12 min-h-[450px]">
        {productList.length > 0 &&
          filter.map((product) => (
            <MenuItem key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default MenuWrapper;
