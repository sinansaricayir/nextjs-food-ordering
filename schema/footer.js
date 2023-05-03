import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string().required("Full name is required"),
  phoneNumber: Yup.string()
    .min(10, "Phone Number Must be 10 characters")
    .required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  desc: Yup.string().required("Description is required"),
  day: Yup.string().required("Day is required"),
  time: Yup.string().required("Time is required"),
});
