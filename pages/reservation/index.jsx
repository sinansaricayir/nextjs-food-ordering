import Reservation from "@/components/Reservation";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Food Ordering | Reservation</title>
      </Head>
      <Reservation />
    </div>
  );
};

export default index;
