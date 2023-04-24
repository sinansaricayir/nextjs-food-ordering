import Head from "next/head";
import Header from "../components/layout/Header";
import Home from "./home/index";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Food Ordering Application</title>
      </Head>
      <Header />
      <Home />
    </div>
  );
}
