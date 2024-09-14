import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { lgaList } from "./lgaList";

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

function StudentForm() {
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
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
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
      // Create an image preview URL and set it
      setImagePreview(URL.createObjectURL(selectedFile));
    } else {
      alert("Please upload a valid image file (JPEG, JPG, PNG)");
      e.target.value = ""; // Reset file input
    }
  };

  return (
    <div>
      <form
        className="w-full max-w-[600px] p-[10px] max-h-[100vh] md:h-[100%] overflow-y-auto bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <!-- Top div section (title) --> */}
        <div className="flex flex-col mb-3 gap-2 md:flex-row md:items-center">
          <h1 className="text-[16px] font-bold text-[#3A3B3F]">
            Create Student
          </h1>
          <p className="text-[#66788A] text-[14px] font-light">
            Student Information
          </p>
        </div>
        <hr />

        {/* <!-- Second div section --> */}
        <div className="flex flex-col-reverse sm:flex-row gap-8 mt-3">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="fullname"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Full Name
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                placeholder="Moses Itodo Ane"
                {...register("fullName")}
              />
              <p className="text-red-500">{errors.fullName?.message}</p>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Email"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Religion
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                placeholder="e.g Muslim"
                {...register("religion")}
              />
              <p className="text-red-500">{errors.religion?.message}</p>
            </div>
          </div>

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

        {/* <!-- Rest of form --> */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mt-1 mb-6">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1 mt-3 sm:mt-0">
              <label
                htmlFor="Address"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Address
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] bg-[url('./Assets/flag.svg')] bg-[length:20px_20px] bg-[position:10px_center] bg-no-repeat pl-10 w-full"
                placeholder="+234"
                {...register("address")}
              />
              <p className="text-red-500">{errors.address?.message}</p>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Date of Birth"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Date of Birth
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                placeholder="e.g Date of Birth"
                {...register("dob")}
              />
              <p className="text-red-500">{errors.dob?.message}</p>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Previous School"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Previous School
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                placeholder="Enter your Previous School"
                {...register("previousSchool")}
              />
              <p className="text-red-500">{errors.previousSchool?.message}</p>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Previous Class"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Previous Class
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                placeholder=" Enter your Previous Class"
                {...register("previousClass")}
              />
              <p className="text-red-500">{errors.previousClass?.message}</p>
            </div>
          </div>

          {/* <!-- Side flex --> */}
          <div className="flex flex-1 flex-col gap-[10px]">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="State of Origin"
                className="text-[12px] font-semibold text-[#333333]"
              >
                State of Origin
              </label>
              <select
                onChange={handleStateChange}
                {...register("state")}
                className="text-[#656565] text-[14px] p-[8.5px] outline-none border border-solid border-[#dfe1e6] w-full"
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-red-500">{errors.state?.message}</p>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Lga"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Local Government Area (LGA)
              </label>
              <select
                {...register("state")}
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                disabled={!selectedState}
              >
                {lgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-red-500">{errors.lga?.message}</p>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Nationality"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Nationality
              </label>
              <select
                value="Nigeria"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
              >
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
          </div>
        </div>

        {/* <!-- Buttons --> */}
        <hr />
        <div className="flex mt-5 justify-end gap-3">
          <button className="text-[14px] font-normal border border-solid border-[#dfe1e6] p-2 rounded-lg">
            Cancel
          </button>
          <button className="text-[14px] text-white bg-[#5243aa] font-normal border border-solid border-[#dfe1e6] px-4 rounded-lg">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
