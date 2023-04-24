import MenuWrapper from "../../components/products/MenuWrapper";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import About from "../../components/About";
import Reservation from "@/components/Reservation";

const index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default index;
