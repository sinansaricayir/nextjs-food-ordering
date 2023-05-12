import React from "react";
import MenuWrapper from "../../components/products/MenuWrapper";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import About from "../../components/About";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";

const index = ({ categoryList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default index;
