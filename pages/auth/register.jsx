import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { registerSchema } from "@/schema/register";
import Head from "next/head";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const onSubmit = async (values, action) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
        values
      );
      if (res.status === 200) {
        toast.success("User created successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    // action.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Your Full Name",
      value: values.name,
      errorMessage: errors.name,
      touched: touched.name,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <div className="container mx-auto">
      <Head>
        <title>Food Ordering | Register</title>
      </Head>
      <form
        className="flex flex-col items-center mt-12 sm:mb-44 mb-16"
        onSubmit={handleSubmit}
      >
        <Title className="text-5xl sm:mb-6 mb-8">Register</Title>
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
          <button className="btn-primary relative" type="submit">
            <FiLogIn size={25} className="absolute top-1 left-[35%]" />
            Register
          </button>

          <div>
            <Link
              href="/auth/login"
              className="text-sm underline cursor-pointer text-gray-400"
            >
              Do you have a account?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
