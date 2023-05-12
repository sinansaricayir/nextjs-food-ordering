import Head from "next/head";
import Home from "./home/index";
import axios from "axios";

export default function Index({ categoryList }) {
  return (
    <div>
      <Head>
        <title>Food Ordering | Home</title>
      </Head>
      <Home categoryList={categoryList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  };
};
