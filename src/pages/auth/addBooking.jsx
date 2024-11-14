import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { bookingSchema } from "../../validationSchemas/bookingSchema";
import { addBooking } from "../../api/bookingRequest";
import { persistor } from "../../Redux/Store";

const BookingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await addBooking(data); // API call to create a booking

      console.log(response);
      if (response?.data?.success) {
        toast.success("Booking created successfully!");
        navigate("/booking"); // Redirect to the bookings page
      } else {
        console.log(response, "kk");
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear all data from local storage
    persistor.purge(); // if using redux-persist
    navigate("/signin"); // Redirect to login page (adjust the route as needed)
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Create Booking
      </h2>

      <button
        type="button"
        onClick={handleLogout}
        className="mt-4 p-3 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Customer Name
          </label>
          <input
            type="text"
            {...register("customerName")}
            className="mt-1 p-3 border w-full rounded-md"
            placeholder="Enter customer name"
          />
          {errors.customerName && (
            <p className="text-red-500 text-sm">
              {errors.customerName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Customer Email
          </label>
          <input
            type="email"
            {...register("customerEmail")}
            className="mt-1 p-3 border w-full rounded-md"
            placeholder="Enter customer email"
          />
          {errors.customerEmail && (
            <p className="text-red-500 text-sm">
              {errors.customerEmail.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Booking Date
          </label>
          <input
            type="date"
            {...register("bookingDate")}
            className="mt-1 p-3 border w-full rounded-md"
          />
          {errors.bookingDate && (
            <p className="text-red-500 text-sm">{errors.bookingDate.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Booking Type
          </label>
          <select
            {...register("bookingType")}
            className="mt-1 p-3 border w-full rounded-md"
          >
            <option value="">Select booking type</option>
            <option value="Full Day">Full Day</option>
            <option value="Half Day">Half Day</option>
          </select>
          {errors.bookingType && (
            <p className="text-red-500 text-sm">{errors.bookingType.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Booking Slot
          </label>
          <select
            {...register("bookingSlot")}
            className="mt-1 p-3 border w-full rounded-md"
          >
            <option value="">Select booking slot</option>
            <option value="First Half">First Half</option>
            <option value="Second Half">Second Half</option>
          </select>
          {errors.bookingSlot && (
            <p className="text-red-500 text-sm">{errors.bookingSlot.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Booking Time
          </label>
          <input
            type="time"
            {...register("bookingTime")}
            className="mt-1 p-3 border w-full rounded-md"
          />
          {errors.bookingTime && (
            <p className="text-red-500 text-sm">{errors.bookingTime.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Phone Number
          </label>
          <input
            type="number"
            {...register("phone")}
            className="mt-1 p-3 border w-full rounded-md"
            placeholder="Enter phone number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Address</label>
          <textarea
            {...register("address")}
            className="mt-1 p-3 border w-full rounded-md"
            placeholder="Enter customer address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        <div className="mb-4 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Create Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
