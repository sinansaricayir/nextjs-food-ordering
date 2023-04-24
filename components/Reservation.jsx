import Title from "./ui/Title";
import Input from "./input/Input";
import { useFormik } from "formik";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit,
  });

  console.log(formik.values);

  return (
    <div className="container mx-auto py-20">
      <Title className="sm:text-5xl text-4xl sm:text-start text-center">
        Book A Table
      </Title>
      <div className="flex lg:items-start items-center justify-between lg:flex-row flex-col-reverse gap-10 mt-12">
        <form
          className="flex flex-col gap-4 w-full "
          onSubmit={formik.handleSubmit}
        >
          <Input
            name="fullName"
            type="text"
            placeholder="Your Full Name"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          <Input
            name="phoneNumber"
            type="number"
            placeholder="Your Phone Number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            name="persons"
            type="number"
            placeholder="How Many Persons?"
            onChange={formik.handleChange}
            value={formik.values.persons}
          />
          <Input
            name="date"
            type="datetime-local"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          <div className="flex sm:justify-start justify-center">
            <button className="btn-primary w-[40%]" type="submit">
              Book Now
            </button>
          </div>
        </form>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.217209701029!2d32.62473909999999!3d39.89176890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3398699678df5%3A0x207cba08e8cd91c3!2sORA&#39;STEAK%20%26%20BURGERS!5e0!3m2!1str!2str!4v1682203496980!5m2!1str!2str"
            className="w-[380px] sm:w-[600px] md:w-[650px] lg:h-[340px] h-[280px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
