import Head from "next/head";
import Header from "../components/layout/Header";
import Home from "./home/index";
import Input from "@/components/input/Input";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Food Ordering Application</title>
      </Head>
      <Header />
      <Home />
      <div className="p-20 container mx-auto">
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Name" />
      </div>
    </div>
  );
}
