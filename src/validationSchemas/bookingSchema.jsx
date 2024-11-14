import * as yup from "yup";

export const bookingSchema = yup.object().shape({
  customerName: yup.string().required("Customer name is required."),
  customerEmail: yup
    .string()
    .email("Please enter a valid email.")
    .required("Customer email is required."),
  bookingDate: yup.date().required("Booking date is required."),
  bookingType: yup.string().required("Booking type is required."),
  bookingSlot: yup.string().required("Booking slot is required."),
  bookingTime: yup.string().required("Booking time is required."),
  phone: yup.string().required("Phone number is required."),
  address: yup.string().required("Address is required."),
});
