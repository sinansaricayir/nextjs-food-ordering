import Head from "next/head";
import Home from "./home/index";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Food Ordering | Home</title>
      </Head>
      <Home />
    </div>
  );
}
