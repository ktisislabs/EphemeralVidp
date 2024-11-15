import { IoIosMail } from "react-icons/io";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from '../src/Assets/logo-zici.png';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is imported
import { useState, useEffect } from 'react';

function App() {
  const [state, handleSubmit] = useForm("mqakaewg");
  const [hasToastShown, setHasToastShown] = useState(false); // New state to track toast

  // Show toast only if the form is submitted successfully and toast hasn't been shown yet
  useEffect(() => {
    if (state.succeeded && !hasToastShown) {
      toast.success("Thank you for registering! See you soon!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setHasToastShown(true); // Set state to true to prevent showing the toast again
    }
  }, [state.succeeded, hasToastShown]); // Dependencies to trigger effect when form is successfully submitted

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className="Home-Container relative w-screen h-screen flex flex-col justify-between"
        style={{ backgroundColor: "#DFDCD6" }}
      >
        {/* Main content container */}
        <div className="Content-Div flex-grow w-full flex flex-col items-center justify-center px-4">
          {/* Logo Section */}
          <div className="Content-Div flex-grow w-full flex flex-col items-center justify-center px-4">
            {/* Logo Section */}
            <div className="Logo-Div flex flex-col items-center w-full md:w-[50vw] lg:w-[30vw] text-center">
              <img src={Logo} alt="logo" className="w-[60vw] max-w-[410px] h-auto my-10" />
              <p className="font-urbanist font-medium italic text-[14px] sm:text-[16px] md:text-base mt-4">
                In a world that thrives on the permanent, we’re here to embrace the fleeting. <br /><br />
                We’re here to capture lightning in a bottle—moments that demand attention, <br /> here and now, before they’re gone.
              </p>
              <p className="my-8 font-urbanist font-semibold text-[14px] sm:text-[16px] md:text-base">
                Register now to join the Community
              </p>
            </div>

            {/* Input Section */}
            <form onSubmit={handleSubmit} className="Input-div flex flex-col items-start w-full max-w-sm">
              <label className="font-urbanist text-lg font-semibold">Email:</label>
              <div className="flex items-center w-full mt-2 mb-4">
                <IoIosMail className="text-xl mr-2" />
                <input
                  type="email"
                  name="email"
                  className="w-full border-b-2 font-urbanist border-black bg-[#DFDCD6] outline-none"
                  placeholder="Enter your email: example@gmail.com"
                  required
                />
              </div>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="font-urbanist font-bold bg-[#DFDCD6] py-1 px-6 w-full sm:w-36 rounded-full border border-black italic self-center mt-2 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Register
              </button>
            </form>

            {/* Join the Community Section */}
            <div className="Community-div flex flex-col items-center mt-24">
              <h1 className="text-base md:text-lg font-urbanist font-medium">Join the Community</h1>
              <div className="flex items-center space-x-8 sm:space-x-12 lg:space-x-16 mt-2">
              <a href="https://www.instagram.com/ephemeralvidp/" target="_blank">  <span className="flex items-center space-x-2">
                <FaInstagram className="text-xl" />
                  <p className="text-sm font-urbanist font-medium md:text-base">Instagram</p>
                </span> </a> 
           <a href="https://www.facebook.com/profile.php?id=61568454513601" target="_blank">   <span className="flex items-center space-x-2">
                  <FaFacebook className="text-xl sm:text-lg" /> 
                  <p className="text-sm font-urbanist font-medium md:text-base">Facebook</p>
                </span>  </a>
                <a href="https://www.linkedin.com/company/ephemeralvidp/" target="_blank"> <span className="flex items-center space-x-2">
                <FaLinkedin className="text-xl" /> 
                  <p className="text-sm font-urbanist font-medium md:text-base">LinkedIn</p>
                </span></a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="Footer-div w-full text-left mt-4 mb-4 px-4 sm:px-6 md:px-8">
          <hr className="border-black mb-4" />
          <p className="font-urbanist text-xs sm:text-sm md:text-base">
            &copy; 2024 Ephemeral Vidp. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
