import React from "react";
import { Link } from "react-router-dom";
import createSchoolImg from "../assets/images/createSchool-img.svg";
import arrowBack from "../assets/images/arrowBack-img.svg"

function CreateAccount() {
  return (
    <>
      <div className="flex h-[100vh] flex-1">
        
        <div className="   hidden sm:w-0 flex-1  lg:block relative ">
          <img
            alt="boy-img"
            src= {createSchoolImg}
            className="absolute inset-0 h-full w-full object-cover"
          />

         
            <Link to={'/home'} className="flex gap-2 absolute top-10 left-10">
            <img src= {arrowBack} alt="back-arrow" />
            <p className="text-white">Back</p></Link>
          
        </div>

        <div className="flex flex-1 flex-col relative justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">

              <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create your School
              </h2>

            <div className="mt-8">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Name of Schools 
                    </label>
                    <div className="mt-1">
                      <input
                        id="nameOfSchool"
                        name="name of school"
                        type="text"
                        required
                        autoComplete="current name-of-school"
                        placeholder="Kings Pride School Intl"
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
                        placeholder="Enter School name"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                     School Type
                    </label>
                    <div className="mt-1">
                      <input
                        id="schoolType"
                        name="school type"
                        type="text"
                        required
                        autoComplete="current-school-type"
                        placeholder="Primary School"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                     School Address
                    </label>
                    <div className="mt-1">
                      <input
                        id="schoolAddress"
                        name="school address"
                        type="text"
                        required
                        autoComplete="current-school-address"
                        placeholder="Sabuwar Kasuwa Birnin Gwari"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1  sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>


                  <div className="flex justify-end gap-5">
                    <Link to={'/home'}>
                      <button
                        type="submit"
                        className="btn bg-white p-2 px-5 text-[12px] font-semibold ring-1 ring-[#5243AA] text-[#5243AA] rounded "
                      >
                      Cancel
                      </button>
                    </Link>
                    
                    <Link to={'/'} className="btn bg-[#5243AA] p-2 px-5 text-[12px] rounded text-white font-semibold"> Create School </Link>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
