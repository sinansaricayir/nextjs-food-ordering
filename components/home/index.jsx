import React from "react";
import MenuWrapper from "../products/MenuWrapper";
import Campaigns from "../Campaigns";
import Carousel from "../Carousel";
import About from "../About";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";

const Index = ({ categoryList, productList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} productList={productList} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
