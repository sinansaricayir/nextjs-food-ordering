import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { loginSchema } from "@/schema/login";
import Head from "next/head";
import { AiFillGithub } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { toast } from "react-toastify";

const Login = () => {
  const { data: session } = useSession();

  const onSubmit = async (values, action) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    if (res.status === 200) {
      toast.success("Login successful");
    } else {
      toast.error(res.error);
    }
    // action.resetForm();
  };

  console.log(session);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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
        <title>Food Ordering | Login</title>
      </Head>
      <form
        className="flex flex-col items-center mt-12 sm:mb-44 mb-16"
        onSubmit={handleSubmit}
      >
        <Title className="text-5xl sm:mb-6 mb-8">Login</Title>
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
            Login
          </button>
          <button
            className="btn-primary !bg-secondary relative"
            type="button"
            onClick={() => signIn("github")}
          >
            <AiFillGithub size={25} className="absolute top-1 left-[35%]" />
            Github
          </button>
          <div>
            <Link
              href="/auth/register"
              className="text-sm underline cursor-pointer text-gray-400"
            >
              Do you no have a account?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
