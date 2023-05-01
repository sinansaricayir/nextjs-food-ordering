import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { BsKey, BsBasket } from "react-icons/bs";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profile";

const Profile = () => {
  const onSubmit = async (values, action) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    action.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: profileSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Biography",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];

  return (
    <div className="min-h-[calc(100vh_-_400px)]">
      <Head>
        <title>Food Ordering | Profile</title>
      </Head>
      <div className="flex mx-12">
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
            <button className="flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4">
              <AiOutlineHome size={20} />
              Account
            </button>
            <button className="flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4">
              <BsKey size={20} />
              Password
            </button>
            <button className="flex items-center duration-500 justify-start border-b border-t hover:bg-primary hover:text-white p-4 gap-x-4">
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
        <form className="p-8 flex-1" onSubmit={handleSubmit}>
          <Title className="text-4xl mb-4">Account Settings</Title>
          <div className="grid grid-cols-2 gap-8">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <button className="btn-primary mt-4 w-40">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
