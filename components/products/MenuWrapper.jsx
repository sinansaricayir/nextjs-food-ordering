import { useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList }) => {
  const [active, setActive] = useState(0);
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
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-12">
        <MenuItem
          image="/images/f1.png"
          title="Delicious Pizza"
          text="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque"
          price={22}
        />
        <MenuItem
          image="/images/f2.png"
          title="Delicious Burger"
          text="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque"
          price={20}
        />
        <MenuItem
          image="/images/f3.png"
          title="Delicious Pizzarotti"
          text="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque"
          price={25}
        />
        <MenuItem
          image="/images/f1.png"
          title="Delicious Pizza"
          text="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque"
          price={22}
        />
        <MenuItem
          image="/images/f2.png"
          title="Delicious Burger"
          text="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque"
          price={20}
        />
        <MenuItem
          image="/images/f3.png"
          title="Delicious Pizzarotti"
          text="Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque"
          price={25}
        />
      </div>
    </div>
  );
};

export default MenuWrapper;
