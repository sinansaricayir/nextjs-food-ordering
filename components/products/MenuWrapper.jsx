import { useEffect, useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filter, setfilter] = useState([]);

  const prod = productList.map((prod) => prod.category);
  const cat = categoryList.map((cat) => cat.title.toLocaleLowerCase());
  const diff = cat.filter((element) => prod.includes(element));

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
          diff.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-1 cursor-pointer uppercase rounded-2xl duration-300 ease-out ${
                index === active ? "bg-secondary text-white scale-105" : " "
              }`}
              onClick={() => setActive(index)}
            >
              {category}
            </button>
          ))}
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-12 min-h-[400px]">
        {productList.length > 0 &&
          filter.map((product) => (
            <MenuItem key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default MenuWrapper;
