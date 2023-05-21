import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Footer = () => {
  const [iconName, setIconName] = useState("fab fa-");
  const [linkAddress, setLinkAddress] = useState("htpps://");
  const [footerData, setFooterData] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  useEffect(() => {
    const getFooterdata = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooterData(res.data[0]);
        setSocialMediaLinks(res.data[0].socialMedia);
      } catch (error) {
        console.log(error);
      }
    };

    getFooterdata();
  }, []);

  const onSubmit = async (values, action) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/footer/${footerData._id}`,
        {
          location: values.location,
          email: values.email,
          phoneNumber: values.phoneNumber,
          desc: values.desc,
          openingHours: {
            day: values.day,
            hour: values.time,
          },
          socialMedia: socialMediaLinks,
        }
      );
      if (res.status === 200) {
        toast.success("Updated Successfully", { autoClose: 1000 });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        location: footerData?.location,
        email: footerData?.email,
        phoneNumber: footerData?.phoneNumber,
        desc: footerData?.desc,
        day: footerData?.openingHours?.day,
        time: footerData?.openingHours?.hour,
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
      type: "text",
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

  const handleCreate = (e) => {
    setSocialMediaLinks([
      ...socialMediaLinks,
      {
        icon: iconName,
        link: linkAddress,
      },
    ]);

    setLinkAddress("https://");
    setIconName("fab fa-");
  };

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
              value={linkAddress}
              placeholder="Link Address"
              onChange={(e) => setLinkAddress(e.target.value)}
            />
            <Input
              type="text"
              value={iconName}
              placeholder="Icon Name"
              onChange={(e) => setIconName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <button
              className="btn-primary"
              type="button"
              onClick={handleCreate}
            >
              Add
            </button>
            <ul className="flex gap-4 sm:mt-o mt-4">
              {socialMediaLinks?.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <i className={`${item.icon} text-2xl`}></i>
                  <button
                    onClick={() =>
                      setSocialMediaLinks((prev) =>
                        prev.filter((item, i) => i !== index)
                      )
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
      <button className="btn-primary mt-4 w-40 md:mb-0 mb-4" type="submit">
        Update
      </button>
    </form>
  );
};

export default Footer;
