import MenuWrapper from "../../components/products/MenuWrapper";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import About from "../../components/About";
import Reservation from "@/components/Reservation";

const index = () => {
  var a = [];
  console.log(a);
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
