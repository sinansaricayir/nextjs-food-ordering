import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(3, "Must be 3 characters")
    .required("Full name is required"),
  phoneNumber: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  job: Yup.string().required("Job is required"),
  bio: Yup.string().required("Biography is required"),
});
