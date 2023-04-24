import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .max(20, "Must be 20 characters or less").min(3,"Must be 3 characters")
    .required("Required"),
  phoneNumber: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  persons: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  date: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
});
