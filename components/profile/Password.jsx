import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { newPasswordSchema } from "@/schema/newPassword";
import axios from "axios";
import { toast } from "react-toastify";

const Password = ({ user }) => {
  const onSubmit = async (values, action) => {
    try {
      const res = axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        values
      );
      toast.success("Updated Successfully", { autoClose: 1000 });
      action.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: newPasswordSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "Your Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <form className="flex-1 md:p-8 p-0" onSubmit={handleSubmit}>
      <Title className="text-4xl mb-4 md:mt-0 mt-8">Password</Title>
      <div className="grid lg:grid-cols-2 gap-8">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </div>
      <button className="btn-primary mt-4 w-40 md:mb-0 mb-4" type="submit">
        Update
      </button>
    </form>
  );
};

export default Password;
