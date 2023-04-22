import Head from "next/head";
import Header from "../components/layout/Header";
import Home from "./home/index";
import Input from "@/components/input/Input";
import Reservation from "@/components/Reservation";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Food Ordering Application</title>
      </Head>
      <Header />
      <Home />
      <Reservation />
    </div>
  );
}
