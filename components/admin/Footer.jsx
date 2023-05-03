import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footer";
import { useState } from "react";

const Footer = () => {
  const [icons, setIcons] = useState([
    "fab fa-facebook",
    "fab fa-twitter",
    "fab fa-instagram",
  ]);
  const [link, setLink] = useState("");
  const [iconName, setIconName] = useState("");

  const onSubmit = async (values, action) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    action.resetForm();
  };

  console.log(iconName, link);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        location: "",
        email: "",
        phoneNumber: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Footer Descripion",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Update Day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Update Time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];

  return (
    <form className="flex-1 md:p-8 p-0" onSubmit={handleSubmit}>
      <Title className="text-4xl mb-4 md:mt-0 mt-8">Footer Settings</Title>
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

      <div className="border p-4 mt-4 border-primary">
        <Title className="text-lg mb-4 !font-sans">Add İcons | Links</Title>
        <div className="">
          <div className="grid grid-cols-2 gap-8 mb-4">
            <Input
              type="text"
              defaultValue="https://"
              placeholder="Link Address"
              onChange={(e) => setLink(e.target.value)}
            />
            <Input
              type="text"
              defaultValue="fab fa-"
              placeholder="Icon Name"
              onChange={(e) => setIconName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <button
              className="btn-primary"
              type="button"
              onClick={() => setIcons([...icons, iconName])}
            >
              Add
            </button>
            <ul className="flex gap-4 sm:mt-o mt-4">
              {icons.map((icon, index) => (
                <li key={index} className="flex items-center gap-2">
                  <i className={`${icon} text-2xl`}></i>
                  <button
                    onClick={() =>
                      setIcons(icons.filter((prev, i) => i !== index))
                    }
                    type="button"
                  >
                    <i className="fa fa-trash !text-danger text-xl"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button className="btn-primary mt-4 w-40 md:mb-0 mb-4">Update</button>
    </form>
  );
};

export default Footer;
