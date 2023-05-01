import Head from "next/head";
import Image from "next/image";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { BsKey, BsBasket } from "react-icons/bs";

import { useState } from "react";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Order from "@/components/profile/Order";

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
              src="/images/client1.jpg"
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
              className="flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4"
            >
              <AiOutlineHome size={20} />
              Account
            </button>
            <button
              onClick={() => setTab(1)}
              className="flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4"
            >
              <BsKey size={20} />
              Password
            </button>
            <button
              onClick={() => setTab(2)}
              className="flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4"
            >
              <BsBasket size={20} />
              Orders
            </button>
            <button className="flex items-center duration-500 group justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4">
              <AiOutlineLogout
                size={20}
                className="group-hover:rotate-180 duration-700"
              />
              Logout
            </button>
          </div>
        </div>
        {tab === 0 && <Account />}
        {tab === 1 && <Password />}
        {tab === 2 && <Order />}
      </div>
    </div>
  );
};

export default Profile;
