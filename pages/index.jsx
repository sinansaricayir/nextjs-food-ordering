import Head from "next/head";
import Header from "../components/layout/Header";

export default function Index() {
  return (
    <div className="">
      <Head>
        <title>Food Ordering Application</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Header />
    </div>
  );
}
