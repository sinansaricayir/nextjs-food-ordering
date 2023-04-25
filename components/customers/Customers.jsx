import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-primary text-white rounded-full flex items-center justify-center p-1 absolute -bottom-12 left-1/2 ml-2"
      >
        <IoIosArrowForward size={30} />
      </button>
    );
  }

  function PrevBtn({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-primary text-white rounded-full flex items-center justify-center p-1 absolute -bottom-12 right-1/2 mr-2"
      >
        <IoIosArrowBack size={30} />
      </button>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-20 ease-in duration-300">
      <Title className="text-4xl text-center">What Says Our Customers</Title>
      <Slider {...settings}>
        <CustomerItem image="/images/client1.jpg" />
        <CustomerItem image="/images/client2.jpg" />
        <CustomerItem image="/images/client1.jpg" />
        <CustomerItem image="/images/client2.jpg" />
      </Slider>
    </div>
  );
};

export default Customers;
