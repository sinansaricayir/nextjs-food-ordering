import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto mb-20">
      <Title className="text-4xl text-center mt-20">Our Menu</Title>
      <div className="flex justify-center mt-8 flex-wrap">
        <button className="bg-secondary px-6 py-1 cursor-pointer rounded-full text-white">
          All
        </button>
        <button className=" px-6 py-1 cursor-pointer rounded-2xl">
          Burger
        </button>
        <button className=" px-6 py-1 cursor-pointer rounded-2xl">Pizza</button>
        <button className=" px-6 py-1 cursor-pointer rounded-2xl">Pasta</button>
        <button className=" px-6 py-1 cursor-pointer rounded-2xl">Fries</button>
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
