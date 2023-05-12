import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profile";
import axios from "axios";
import { toast } from "react-toastify";

const Account = ({ user }) => {
  const onSubmit = async (values, action) => {
    try {
      const res = axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        values
      );
      toast.success("Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        name: user?.name,
        phoneNumber: user?.phoneNumber,
        email: user?.email,
        address: user?.address,
        job: user?.job,
        bio: user?.bio,
      },
      onSubmit,
      validationSchema: profileSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Your Name",
      value: values.name,
      errorMessage: errors.name,
      touched: touched.name,
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
    <form className="flex-1 md:p-8 p-0" onSubmit={handleSubmit}>
      <Title className="text-4xl mb-4 md:mt-0 mt-8">Account Settings</Title>
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

export default Account;
