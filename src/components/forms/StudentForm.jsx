import React, { useState } from "react";
import { lgaList } from "./lgaList";

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

function StudentForm() {
  // State management for file upload
  const [file, setFile] = useState(null);

  const handleFileChange = ({ target: { files } }) => {
    const [selectedFile] = files;
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    allowedTypes.includes(selectedFile?.type)
      ? setFile(selectedFile)
      : (alert("Please upload a valid PDF or Word document."),
        (event.target.value = ""));
  };

  const [selectedState, setSelectedState] = useState("");
  const [lgas, setLgas] = useState([]);

  // Handle change for religion
  const handleChange = (event) => {
    console.log(`Selected religion: ${event.target.value}`);
  };

  // Handle state change
  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
    setLgas(lgaList[selectedState] || []);
  };

  // Handle change for LGA select
  const handleLgaChange = (event) => {
    console.log(`Selected LGA: ${event.target.value}`);
  };

  return (
    <div>
      <form className="w-full max-w-[600px] p-[10px] max-h-[100vh] md:h-[100%] overflow-y-auto bg-white">
        {/* <!-- Top div section (title) --> */}
        <div className="flex flex-col mb-3 gap-2 md:flex-row md:items-center">
          <h1 className="text-[16px] font-bold text-[#3A3B3F]">Create Staff</h1>
          <p className="text-[#66788A] text-[14px] font-light">
            The information can be edited from the profile page
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
              />
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
              />
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="./Assets/upload.svg"
              alt="upload"
              className="h-[150px] max-w-full object-contain"
            />
          </div>
        </div>

        {/* <!-- Last div --> */}
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
              />
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
              />
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
              />
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
              />
            </div>
          </div>

          {/* <!-- Side flex --> */}
          <div className="flex flex-1 flex-col gap-[17px]">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="State of Origin"
                className="text-[12px] font-semibold text-[#333333]"
              >
                State of Origin
              </label>
              <select
                onChange={handleStateChange}
                className="text-[#656565] text-[14px] p-[8.5px] outline-none border border-solid border-[#dfe1e6] w-full"
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Lga"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Local Government Area (LGA)
              </label>
              <select
                onChange={handleLgaChange}
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
