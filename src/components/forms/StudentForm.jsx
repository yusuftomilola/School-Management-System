import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { lgaList } from "./lgaList";
import FormContext from "./context";
import Button from "./Button";
import CancelBtn from "./CancelBtn";

const states = [
  "Abia",
  "Adamawa",
  "AkwaIbom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
];

const religions = ["Christian", "Muslim"];

function StudentForm({ isOpen, onClose }) {
  const [selectedState, setSelectedState] = useState("");
  const [lgas, setLgas] = useState([]);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("./Assets/upload.svg");

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    religion: Yup.string().required("Religion is required"),
    address: Yup.string().required("Address is required"),
    dob: Yup.string().required("Date of Birth is required"),
    previousSchool: Yup.string().required("Previous School is required"),
    previousClass: Yup.string().required("Previous Class is required"),
    state: Yup.string().required("State is required"),
    lga: Yup.string().required("LGA is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    reset();
    onClose();
  };

  // Handle state change
  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
    setLgas(lgaList[selectedState] || []);
  };

  // Handle image file selection and validation
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedImageTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (selectedFile && allowedImageTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    } else {
      alert("Please upload a valid image file (JPEG, JPG, PNG)");
      e.target.value = "";
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[3320]"
        onClick={onClose}
      ></div>

      <div className="hide-scrollbar w-full md:w-auto h-full border border-solid border-amber-50 bg-white md:h-auto fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center items-center z-[3330] overflow-y-auto px-3  rounded-lg shadow-lg">
        <form
          className="w-full max-w-[600px] p-[10px] max-h-[90vh] bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col mb-3 gap-4 max-[900px]:flex-col min-[900px]:flex-row">
            <h1 className="text-[16px] font-bold text-[#3A3B3F]">
              Create Student
            </h1>
            <p className="text-[#66788A] text-[14px] font-light whitespace-nowrap">
              The information can be edited from the profile page
            </p>
          </div>
          <hr />

          {/* TOP INPUTS */}
          <div className="flex flex-col-reverse sm:flex-row gap-8 mt-2">
            {/* LEFT */}
            <div className="flex flex-col gap-[6px] flex-1">
              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#333333]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                  placeholder="Moses Itodo Ane"
                  {...register("fullName")}
                />
                <p className="form-error text-[12px] font-semibold text-red-600">
                  {errors.fullName?.message}
                </p>
              </div>

              {/* Religion */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#333333]">
                  Religion
                </label>
                <select
                  className="text-[#656565] text-[14px] bg-white p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                  {...register("religion")}
                >
                  {religions.map((religion) => (
                    <option key={religion} value={religion}>
                      {religion}
                    </option>
                  ))}
                </select>
                <p className="form-error text-[12px] font-semibold text-red-600">
                  {errors.religion?.message}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            {/* IMAGE UPLOAD */}
            <div className="w-fit flex-1 flex items-center justify-center object-contain rounded-md">
              <label htmlFor="image-upload">
                <img
                  src={imagePreview}
                  alt="Upload preview"
                  className="h-[120px] object-cover cursor-pointer"
                  style={{ padding: "0px" }}
                />
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/*  BOTTOM INPUTS */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mt-1 mb-6 ">
            {/* LEFT */}
            <div className="flex flex-col gap-2 flex-1">
              {/* Address */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#333333]">
                  Address
                </label>
                <input
                  type="text"
                  className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                  placeholder="My house address example"
                  {...register("address")}
                />
                <p className="form-error text-[12px] font-semibold text-red-600">
                  {errors.address?.message}
                </p>
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#333333]">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                  {...register("dob")}
                />
                <p className="form-error text-[12px] font-semibold text-red-600">
                  {errors.dob?.message}
                </p>
              </div>

              {/* Previous School */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#333333]">
                  Previous School
                </label>
                <input
                  type="text"
                  className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                  placeholder="Enter your Previous School"
                  {...register("previousSchool")}
                />
                <p className="form-error text-[12px] font-semibold text-red-600">
                  {errors.previousSchool?.message}
                </p>
              </div>

              {/* Previous Class */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#333333]">
                  Previous Class
                </label>
                <input
                  type="text"
                  className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                  placeholder="Enter your Previous Class"
                  {...register("previousClass")}
                />
                <p className="form-error text-[12px] font-semibold text-red-600">
                  {errors.previousClass?.message}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-1 flex-col gap-2">
              {/* State of Origin */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#333333]">
                  State of Origin
                </label>
                <select
                  className="text-[#656565] text-[14px] bg-white p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                  value={selectedState}
                  {...register("state")}
                  onChange={handleStateChange}
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <p className="form-error text-[12px] font-semibold text-red-600">
                  {errors.state?.message}
                </p>
              </div>

              {/* LGA */}
              <div className="flex flex-col gap-1">
                <label className="text-[12px] font-semibold text-[#333333]">
                  LGA
                </label>
                <select
                  className="text-[#656565] text-[14px] bg-white p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                  {...register("lga")}
                >
                  {lgas.map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))}
                </select>
                <p className="form-error text-[12px] font-semibold text-red-600">
                  {errors.lga?.message}
                </p>
              </div>

              {/* Nationality */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="Nationality"
                  className="text-[12px] font-semibold text-[#333333]"
                >
                  Nationality
                </label>
                <select
                  value="Nigeria"
                  className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                >
                  <option value="Nigeria">Nigeria</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end sm:flex-row gap-3 md:gap-3">
            <CancelBtn onClick={onClose} className="p-1">
              Cancel
            </CancelBtn>

            <Button className="text-white p-1" type="submit">
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentForm;
