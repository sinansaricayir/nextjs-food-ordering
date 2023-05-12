import MenuWrapper from "@/components/products/MenuWrapper";
import axios from "axios";
import Head from "next/head";

const index = ({ categoryList }) => {
  return (
    <div>
      <Head>
        <title>Food Ordering | Menu</title>
      </Head>
      <MenuWrapper categoryList={categoryList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  };
};

export default index;
