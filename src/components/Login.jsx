import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import bg_image from "../assets/bg-image2.jpg"; // Assuming you have a background image

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const handleButtonClicked = () => {
    // Here you can handle the form submission logic
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(
      undefined,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message !== null) {
      return;
    }
    // sign in or sign up logic

    if (!isSignInForm) {
      // Sign Up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log("User signed up:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
          console.log("Error signing up:", errorMessage, errorCode);
          // ..
        });
      console.log("Signing Up with:", {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      });
      // Here you can call your sign up API or function
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " " + errorMessage);
        });
      // Here you can call your sign in API or function
    }

    // console.log(message);
  };
  const handleToggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      <div className="">
        <img
          src={bg_image}
          alt="bg-image"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <Header />
      <div className="container relative w-full h-full max-w-7xl mx-auto flex justify-center items-center">
        <div className="w-full max-w-md">
          <form
            className="flex flex-col w-full p-8 bg-black/70 rounded-lg shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1 className="text-3xl font-bold text-white mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                ref={name}
                className="w-full p-3 mb-4 border bg-[#161616b3] border-[#808080b3] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#b8b8b8] text-white"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              ref={email}
              className="w-full p-3 mb-4 border bg-[#161616b3] border-[#808080b3] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#b8b8b8] text-white"
            />
            <input
              type="password"
              placeholder="Password"
              ref={password}
              className="w-full p-3 mb-4 border bg-[#161616b3] border-[#808080b3] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#b8b8b8] text-white"
            />
            {errorMessage && (
              <p className="text-red-700 font-semibold mb-2">{errorMessage}</p>
            )}

            <button
              className="w-full p-3 mb-4 bg-red-700 text-white rounded hover:bg-red-800 transition duration-200"
              onClick={() => {
                handleButtonClicked();
              }}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <div className="text-center text-gray-400 mb-4">
              {isSignInForm ? "New to VideoGPT-Dev?" : "Already registered?"}{" "}
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
