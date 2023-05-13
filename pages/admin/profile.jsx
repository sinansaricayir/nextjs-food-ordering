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
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AddProduct from "@/components/admin/AddProduct";

const Profile = () => {
  const [tab, setTab] = useState(0);
  const { push } = useRouter();
  const [addProductModal, setAddProductModal] = useState(false);

  const closeAdminAccount = async () => {
    try {
      if (confirm("Are you sure want to close your Admin account?")) {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
        if (res.status === 200) {
          push("/admin");
          toast.success("Admin Account Closed!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_400px)]">
      <Head>
        <title>Food Ordering | Profile</title>
      </Head>
      <div className="md:flex mx-12 relative">
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
            <button
              onClick={closeAdminAccount}
              className="flex items-center duration-500 group justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4"
            >
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
        {tab === 0 && (
          <button
            onClick={() => setAddProductModal(true)}
            className="absolute text-white py-2 px-4 top-4 right-0 bg-primary rounded-full hover:opacity-70"
          >
            Add Product
          </button>
        )}
      </div>
      {addProductModal && (
        <AddProduct
          addProductModal={addProductModal}
          setAddProductModal={setAddProductModal}
        />
      )}
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Profile;
