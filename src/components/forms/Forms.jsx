import React, { useState, useContext, useEffect } from "react";
import { lgaList } from "./lgaList";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./Button";
import CancelBtn from "./CancelBtn";
import FormContext from "./context";
import { v4 as uuidv4 } from "uuid";
import teachersData from "../../data/teachers";

// Array of religions and states
const religions = ["Christian", "Muslim"];
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

// Yup validation schema
const schema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, "Number must be digits")
    .required("Phone number is required"),
  religion: yup.string().required("Religion is required"),
  address: yup.string().required("Address is required"),
  highestQualification: yup
    .string()
    .required("Highest Qualification is required"),
  state: yup.string().required("State of Origin is required"),
  lga: yup.string().required("LGA is required"),
});

function Forms() {
  const { toggleFormVisibility } = useContext(FormContext);
  const [selectedState, setSelectedState] = useState("");
  const [lgas, setLgas] = useState([]);
  const [imagePreview, setImagePreview] = useState("./Assets/upload.svg");
  const [file, setFile] = useState(null);
  const [myData, setMyData] = useState([]);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema), // Set yup validation resolver
  });

  // Load teachers data from localStorage or initialize it with teachersData (only once)
  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem("teachersData"));

    if (storedTeachers) {
      setMyData(storedTeachers); // If localStorage has data, use it
    } else {
      // If no localStorage data, initialize with teachersData
      localStorage.setItem("teachersData", JSON.stringify(teachersData));
      setMyData(teachersData);
    }
  }, []);

  // Handle image file selection and validation
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedImageTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (selectedFile && allowedImageTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile)); // Image preview
    } else {
      alert("Please upload a valid image file (JPEG, JPG, PNG)");
      e.target.value = ""; // Reset file input
    }
  };

  // Handle file change for CV
  const handleCvChange = (e) => {
    const [selectedFile] = e.target.files;
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile?.type)) {
      alert("Please upload a valid PDF or Word document.");
      e.target.value = ""; // Reset file input
    } else {
      setFile(selectedFile); // Set CV file
    }
  };

  // Handle state change and LGA population
  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
    setLgas(lgaList[selectedState] || []);
  };

  // Handle form submission
  const onSubmit = (data) => {
    // Validate image presence
    if (!file) {
      alert("Please upload an image");
      return;
    }

    // Convert image to Base64
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64Image = e.target.result; // This includes the proper data URL format like data:image/jpeg;base64,...

      // Create a new teacher object
      const newTeacher = {
        id: uuidv4(),
        ...data,
        image: base64Image, // Correctly formatted base64 image with data URL
        cvFileName: file.name,
      };

      // Get existing teachers from localStorage
      const existingTeachers =
        JSON.parse(localStorage.getItem("teachersData")) || [];

      // Add the new teacher to the list
      const updatedTeachers = [...existingTeachers, newTeacher];

      // Save updated list to localStorage and update state
      localStorage.setItem("teachersData", JSON.stringify(updatedTeachers));
      setMyData(updatedTeachers); // Update state so UI renders immediately

      // Reset form
      reset();
      toggleFormVisibility();
    };

    reader.readAsDataURL(file); // Convert image file to Base64
  };

  return (
    <div className="w-full md:w-auto h-full border border-solid border-amber-50 bg-white md:h-auto fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center items-center z-[3330] bg-[transparent] overflow-y-auto px-3 ">
      <form
        className="w-full max-w-[600px] p-[10px] max-h-[100vh]  overflow-y-auto "
        onSubmit={handleSubmit(onSubmit)} // Attach handleSubmit from react-hook-form
      >
        <div className="flex flex-col mb-3 gap-4   max-[900px]:flex-col min-[900px]:flex-row">
          <h1 className="text-[16px] font-bold text-[#3A3B3F]">Create Staff</h1>
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

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#333333]">
                Email
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                placeholder="example@gmail.com"
                {...register("email")}
              />
              <p className="form-error text-[12px] font-semibold text-red-600">
                {errors.email?.message}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          {/* IMAGE UPLOAD */}
          <div className="w-fit flex-1 flex items-center justify-center object-contain  rounded-md">
            <label htmlFor="image-upload">
              <img
                src={imagePreview} // Display the selected image or fallback to the initial image
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
              onChange={handleFileChange} // Trigger file change
            />
          </div>
        </div>

        {/*  BOTTOM INPUTS */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mt-1 mb-6 ">
          {/* LEFT */}
          <div className="flex flex-col gap-2 flex-1">
            {/* Phone Number */}
            <div className="flex flex-col gap-1 mt-1 sm:mt-0">
              <label className="text-[12px] font-semibold text-[#333333]">
                Phone Number
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full  bg-[url('./Assets/flag.svg')] bg-[length:20px_20px] bg-[position:10px_center] bg-no-repeat pl-10"
                placeholder="+234"
                {...register("phoneNumber")}
              />
              <p className="form-error text-[12px] font-semibold text-red-600">
                {errors.phoneNumber?.message}
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

            {/* Highest Qualification */}
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#333333]">
                Highest Qualification
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] hover:border hover:border-solid hover:border-[#5243aa] rounded-md w-full"
                placeholder="B.Sc Mathematics"
                {...register("highestQualification")}
              />
              <p className="form-error text-[12px] font-semibold text-red-600">
                {errors.highestQualification?.message}
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

            {/* CV */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="fileUpload"
                className="cursor-pointer text-[12px] font-bold text-[#333333]"
              >
                Upload CV
              </label>
              <input
                type="file"
                id="fileUpload"
                accept=".pdf,.doc,.docx"
                onChange={handleCvChange}
                className="text-[#656565] text-[12px] p-2 outline-none w-40 "
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end sm:flex-row gap-3 md:gap-8">
          <CancelBtn onClick={toggleFormVisibility}>Cancel</CancelBtn>

          <Button className="text-white" type="submit">
            Add New Staff
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
