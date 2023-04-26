import MenuWrapper from "@/components/products/MenuWrapper";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Food Ordering | Menu</title>
      </Head>
      <MenuWrapper />
    </div>
  );
};

export default index;
