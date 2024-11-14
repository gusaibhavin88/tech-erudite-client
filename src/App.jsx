import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/home/home";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/home";
import PageNotFound from "./components/pageNotFound";
import { PrivateRoute } from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import RedirectPage from "./pages/auth/redirectPage";
import SignUp from "./pages/auth/SignUp";
import UserVerification from "./pages/auth/verificationPage";
import BookingForm from "./pages/auth/addBooking";

function App() {
  return (
    <>
      <Router>
        <div style={{ height: "100vh" }}>
          <Routes>
            <Route exact path="/signin" element={<Auth />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/verify" element={<UserVerification />} />
            <Route element={<PrivateRoute />}>
              <Route exact path="/booking" element={<BookingForm />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route exact path="/" element={<RedirectPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
