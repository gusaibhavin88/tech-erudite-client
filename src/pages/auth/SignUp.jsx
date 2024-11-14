import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { signUpSchema } from "../../validationSchemas/SignUpSchema"; // Ensure you have a validation schema for sign-up
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signupUserAction } from "../../Redux/Auth/AuthAction"; // Ensure this action exists
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const user = useSelector((state) => state?.auth?.userData);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema), // Use the sign-up schema
  });

  const onComplete = (response) => {
    toast.success(response?.data?.message);
    navigate("/booking");
  };
  const onError = (response) => {
    toast.error(response?.message);
  };

  const onSubmit = (data) => {
    dispatch(
      signupUserAction({
        functions: {
          onComplete: onComplete,
          formData: data,
          onError,
        },
      })
    );
  };

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      navigate("");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your first name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <div className="text-red-700">{errors.firstName.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your last name"
              {...register("lastName")}
            />
            {errors.lastName && (
              <div className="text-red-700">{errors.lastName.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <div className="text-red-700">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <div className="text-red-700">{errors.password.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {!loading ? "Sign Up" : "Loading"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
