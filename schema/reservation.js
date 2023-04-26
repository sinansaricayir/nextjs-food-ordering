import * as Yup from "yup";

export const reservationSchema = Yup.object({
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
  persons: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Persons is required"),
  date: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Date is required"),
});
