import Head from "next/head";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaMotorcycle } from "react-icons/fa";
import { CiForkAndKnife } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { useState } from "react";
import Products from "@/components/admin/Products";
import Orders from "@/components/admin/Orders";
import Category from "@/components/admin/Category";
import Footer from "@/components/admin/Footer";

const Profile = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="min-h-[calc(100vh_-_400px)]">
      <Head>
        <title>Food Ordering | Profile</title>
      </Head>
      <div className="md:flex mx-12">
        <div className="border min-w-[300px]">
          <div className="relative flex flex-col items-center gap-2 p-6">
            <Image
              src="/images/admin.png"
              alt=""
              width={100}
              height={100}
              className="rounded-full shadow-xl"
            />
            <b className="mb-2">Jennifer Klane</b>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => setTab(0)}
              className={`flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4 ${
                tab === 0 && "bg-primary"
              }`}
            >
              <CiForkAndKnife size={20} />
              Products
            </button>
            <button
              onClick={() => setTab(1)}
              className={`flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4 ${
                tab === 1 && "bg-primary"
              }`}
            >
              <FaMotorcycle size={20} />
              Orders
            </button>
            <button
              onClick={() => setTab(2)}
              className={`flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4 ${
                tab === 2 && "bg-primary"
              }`}
            >
              <BiCategoryAlt size={20} />
              Categories
            </button>
            <button
              onClick={() => setTab(3)}
              className="flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4"
            >
              <FiSettings size={20} />
              Footer
            </button>
            <button className="flex items-center duration-500 group justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4">
              <AiOutlineLogout
                size={20}
                className="group-hover:rotate-180 duration-700"
              />
              Exit
            </button>
          </div>
        </div>
        {tab === 0 && <Products />}
        {tab === 1 && <Orders />}
        {tab === 2 && <Category />}
        {tab === 3 && <Footer />}
      </div>
    </div>
  );
};

export default Profile;
