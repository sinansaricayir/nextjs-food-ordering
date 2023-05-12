import Head from "next/head";
import Image from "next/image";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { BsKey, BsBasket } from "react-icons/bs";
import { useState } from "react";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Order from "@/components/profile/Order";
import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

const Profile = ({ user }) => {
  const [tab, setTab] = useState(0);
  const { push } = useRouter();

  const handleSignOut = () => {
    if (confirm("Are you sure want to sign out?")) {
      signOut({ redirect: false });
      push("/auth/login");
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_400px)]">
      <Head>
        <title>Food Ordering | Profile</title>
      </Head>
      <div className="md:flex mx-12">
        <div className="border min-w-[300px]">
          <div className="relative flex flex-col items-center gap-2 p-6">
            <Image
              src={user?.image ? user.image : "/images/admin.png"}
              alt=""
              width={100}
              height={100}
              className="rounded-full shadow-xl"
            />
            <b className="mb-2">{user?.name}</b>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => setTab(0)}
              className={`flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4 ${
                tab === 0 && "bg-primary"
              }`}
            >
              <AiOutlineHome size={20} />
              Account
            </button>
            <button
              onClick={() => setTab(1)}
              className={`flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4 ${
                tab === 1 && "bg-primary"
              }`}
            >
              <BsKey size={20} />
              Password
            </button>
            <button
              onClick={() => setTab(2)}
              className={`flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4 ${
                tab === 2 && "bg-primary"
              }`}
            >
              <BsBasket size={20} />
              Orders
            </button>
            <button
              onClick={handleSignOut}
              className="flex items-center duration-500 group justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4"
            >
              <AiOutlineLogout
                size={20}
                className="group-hover:rotate-180 duration-700"
              />
              Logout
            </button>
          </div>
        </div>
        {tab === 0 && <Account user={user} />}
        {tab === 1 && <Password user={user} />}
        {tab === 2 && <Order />}
      </div>
    </div>
  );
};

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });

  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
  );

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: { user: user ? user.data : null },
  };
}

export default Profile;
