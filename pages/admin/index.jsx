import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { adminSchema } from "@/schema/admin";
import Head from "next/head";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";

const Admin = () => {
  const onSubmit = async (values, action) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    action.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto">
      <Head>
        <title>Food Ordering | Admin</title>
      </Head>
      <form
        className="flex flex-col items-center mt-12 sm:mb-44 mb-16"
        onSubmit={handleSubmit}
      >
        <Title className="text-5xl sm:mb-6 mb-8">Admin</Title>
        <div className="sm:w-1/2 w-full">
          {inputs.map((input) => {
            return (
              <div key={input.id} className="mb-2">
                <Input {...input} onChange={handleChange} onBlur={handleBlur} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:w-1/2 w-full gap-2 mt-4">
          <button className="btn-primary relative">
            <FiLogIn size={25} className="absolute top-1 left-[35%]" />
            Login
          </button>
          <div>
            <Link
              href="/"
              className="text-sm underline cursor-pointer text-gray-400"
            >
              Homepage
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admin;
