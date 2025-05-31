import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleToggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt="bg-image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <Header />
      <div className="container relative w-full h-full max-w-7xl mx-auto flex justify-center items-center">
        <div className="w-full max-w-md">
          <form className="flex flex-col w-full p-8 bg-black/70 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-white mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 mb-4 border bg-[#161616b3] border-[#808080b3] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#b8b8b8] text-white"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border bg-[#161616b3] border-[#808080b3] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#b8b8b8] text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border bg-[#161616b3] border-[#808080b3] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#b8b8b8] text-white"
            />

            <button className="w-full p-3 mb-4 bg-red-700 text-white rounded hover:bg-red-800 transition duration-200">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="text-center text-gray-400 mb-4">
              {isSignInForm ? "New to Netflix?" : "Already registered?"}{" "}
              <span
                role="button"
                className="text-red-700 cursor-pointer hover:underline"
                onClick={() => handleToggleForm()}
              >
                {isSignInForm ? "Sign Up Now!" : "Sign In Now!"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
