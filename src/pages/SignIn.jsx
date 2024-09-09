import React from "react";
import signInImg from "../assets/images/signIn-img.svg"
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="flex h-[100vh] flex-1">

        <div className=" relative hidden w-0 flex-1  lg:block ">
          <img
            alt="boy-img"
            src={signInImg}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col relative justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">

              <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create Account
              </h2>

            <div className="mt-8">
              <div>
                <form action="#" method="POST" className="space-y-6">

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                     Email 
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="current-email"
                        placeholder="example@gmail.co"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        placeholder="Enter Password"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  
                  <span className="flex justify-end">
                    <Link> Forgot password? </Link>
                  </span>

                  <div className="flex justify-end gap-5">
                    <button
                      type="button"
                      className="btn bg-white p-2 px-5  font-semibold ring-1 ring-[#5243AA] rounded text-[#5243AA]"
                    >
                     Cancel
                    </button>
                    
                    <Link to={'/'} className="btn bg-[#5243AA] p-2 px-5 rounded text-white font-semibold"> Login </Link>
                  </div>

                </form>
              </div>

              <div className="mt- flex gap-1 absolute bottom-3 ml-10" >
                <p>Already have an account?</p>
                <Link to={''} className="text-[#5243AA]">Register here</Link>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
