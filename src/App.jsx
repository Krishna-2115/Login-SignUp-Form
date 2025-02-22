import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const LoginRegisterForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-200 to-blue-200 p-4">
      <div className="relative w-[850px] h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Left Panel (shows if Login form is active) */}
        <div
          className={`z-10 absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-center text-white transition-all duration-800 ease-in-out ${
            isRegister ? 'translate-x-[-100%]' : 'translate-x-0'
          }`}
          style={{
            backgroundColor: '#7494ec',
            borderTopRightRadius: '50% 100%',
            borderBottomRightRadius: '50% 100%',
          }}
        >
          <h1 className="text-4xl mb-2 font-bold">Hello, Welcome!</h1>
          <p className="mb-4">Don't have an account?</p>
          <button
            onClick={() => setIsRegister(true)}
            className="w-40 h-12 border-2 border-white rounded-lg bg-transparent font-semibold hover:bg-white hover:text-[#7494ec]  transition"
          >
            Register
          </button>
        </div>

        {/* Right Panel (shows if Register form is active) */}
        <div
          className={`absolute z-10  top-0 right-0 w-1/2 h-full flex flex-col justify-center items-center text-white transition-all duration-700 ease-in-out ${
            isRegister ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            backgroundColor: '#7494ec',
            borderTopLeftRadius: '50% 100%',
            borderBottomLeftRadius: '50% 100%',
          }}
        >
          <h1 className="text-4xl mb-2 font-bold">Welcome Back!</h1>
          <p className="mb-4">Already have an account?</p>
          <button
            onClick={() => setIsRegister(false)}
            className="w-40 h-12 border-2 border-white rounded-lg bg-transparent font-semibold hover:bg-white hover:text-[#7494ec]  transition"
          >
            Login
          </button>
        </div>

        {/* Main Content Area (the right half of the container) */}
        <div className=" top-0 right-0 w-1/2 h-full p-10 text-gray-800">
          {isRegister ? (
            /* Register Form */
            <form className="w-full text-center mt-8">
              <h1 className="text-3xl mb-4 font-bold">Registration</h1>
              <div className="relative my-8">
                <input
                  type="text"
                  placeholder="Username"
                  required
                  className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-lg outline-none font-medium placeholder-gray-500"
                />
                <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600"></i>
              </div>
              <div className="relative my-8">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-lg outline-none font-medium placeholder-gray-500"
                />
                <i className="bx bxs-envelope absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600"></i>
              </div>
              <div className="relative my-8">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-lg outline-none font-medium placeholder-gray-500"
                />
                <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600"></i>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-[#7494ec]  rounded-lg shadow-md text-white font-semibold transition hover:drop-shadow-xl"
              >
                Register
              </button>
              <p className="mt-4 text-gray-700">or register with social platforms</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  className="p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 hover:bg-gray-100"
                >
                  <i className="bx bxl-google"></i>
                </a>
                <a
                  href="#"
                  className="p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 hover:bg-gray-100"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="#"
                  className="p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 hover:bg-gray-100"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  href="#"
                  className="p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 hover:bg-gray-100"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </form>
          ) : (
            /* Login Form */
            <form className="ml-105 w-full text-center mt-8">
              <h1 className="text-3xl mb-4 font-bold">Login</h1>
              <div className="relative my-8">
                <input
                  type="text"
                  placeholder="Username"
                  required
                  className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-lg outline-none font-medium placeholder-gray-500"
                />
                <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600"></i>
              </div>
              <div className="relative my-8">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full py-3 pl-5 pr-12 bg-gray-200 rounded-lg outline-none font-medium placeholder-gray-500"
                />
                <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600"></i>
              </div>
              <div className="mb-4 text-center w-full">
                <a href="#" className="text-sm text-gray-700 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-[#7494ec]  rounded-lg shadow-md text-white font-semibold transition hover:drop-shadow-xl "
              >
                Login
              </button>
              <p className="mt-4 text-gray-700">or login with social platforms</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="#"
                  className="p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 hover:bg-gray-100"
                >
                  <i className="bx bxl-google"></i>
                </a>
                <a
                  href="#"
                  className="p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 hover:bg-gray-100"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="#"
                  className="p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 hover:bg-gray-100"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  href="#"
                  className="p-2 border-2 border-gray-300 rounded-lg text-2xl text-gray-700 hover:bg-gray-100"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
