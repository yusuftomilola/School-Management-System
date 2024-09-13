import React from "react";
import { Link } from "react-router-dom";
import createAccountImg from "../assets/images/Create-account-img.svg";

function CreateAccount() {
  return (
    <>
      <div className="flex h-[100vh] flex-1">
        <div className=" relative hidden w-0 flex-1  lg:block ">
          <img
            alt="boy-img"
            src={createAccountImg}
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
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="fullName"
                        name="full name"
                        type="text"
                        required
                        autoComplete="full name"
                        placeholder="Ahmad Abdulkareem"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

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
                        placeholder="example@email.com"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="school name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      School Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="schoolName"
                        name="school name"
                        type="text"
                        required
                        autoComplete="current-school-name"
                        placeholder="King's Pride School Intl"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-5">
                    <button
                      type="submit"
                      className="btn bg-white p-2 px-5 text-[12px] font-semibold "
                    >
                      Cancel
                    </button>

                    <Link
                      to={"/home"}
                      className="btn bg-[#5243AA] p-2 px-5 text-[12px] rounded-sm text-white font-semibold"
                    >
                      {" "}
                      Register{" "}
                    </Link>
                  </div>
                </form>
              </div>

              <div className="mt- flex gap-1 absolute bottom-3">
                <p>Already have an account?</p>
                <Link to={"/sign-in"} className="text-blue-300">
                  Login here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
