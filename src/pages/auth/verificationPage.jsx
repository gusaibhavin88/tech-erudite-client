import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyUser } from "../../api/authRequest";
import { verifyUserAction } from "../../Redux/Auth/AuthAction";
import { useDispatch } from "react-redux";

const UserVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Function to get query parameters from the URL
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    const email = params.get("email");
    const token = params.get("token");
    return { email, token };
  };

  const onComplete = () => {};
  const onError = () => {};
  // Function to handle verification
  const verify = async (email, token) => {
    try {
      const data = {
        email,
        verificationToken: token,
      };

      dispatch(
        verifyUserAction({
          functions: {
            onComplete: onComplete,
            formData: data,
            onError,
          },
        })
      );

      console.log(response, "jjjj");
      // if (response?.data?.success) {
      //   toast.success("User verified successfully!");
      //   navigate("/home"); // Redirect to home after successful verification
      // } else {
      //   // toast.error(response?.data?.message || "Verification failed.");
      //   // navigate("/signin"); // Optionally redirect to sign-in on failure
      // }
    } catch (error) {
      // toast.error("An error occurred during verification.");
    }
  };

  useEffect(() => {
    const { email, token } = getQueryParams();
    if (email && token) {
      verify(email, token);
    } else {
      toast.error("Missing verification parameters.");
    }
  }, []); // Trigger effect when location.search changes

  return <div>Verifying your account...</div>; // Return some JSX to indicate process
};

export default UserVerification;
