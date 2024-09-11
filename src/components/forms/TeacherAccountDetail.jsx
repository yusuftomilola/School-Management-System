import React, { useState } from "react";
import { lgaList } from "./lgaList";
import { Upload } from "antd";
import StudentForm from "./StudentForm";
import SchoolCalender from "./SchoolCalender";
import CancelBtn from "./CancelBtn";
import Button from "./Button";

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

function TeacherAccountDetail() {
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
        <div className="flex flex-col mb-3 gap-4   max-[900px]:flex-col min-[900px]:flex-row">
          <h1 className="text-[16px] font-bold text-[#3A3B3F]">
            Account Detail
          </h1>
          <p className="text-[#66788A] text-[14px] font-light">
            The information can be edited, click edit to update the sfatt
            profile
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
                Email
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3 sm:mt-0">
              <label
                htmlFor="PhoneNumber"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] bg-[url('./Assets/flag.svg')] bg-[length:20px_20px] bg-[position:10px_center] bg-no-repeat pl-10 w-full"
                placeholder="+234"
              />
            </div>
          </div>

          <Upload
            onChange={handleFileChange}
            className="w-full flex-1 h-fit flex items-center justify-center object-contain border border-solid border-[#dfe1e6] "
          >
            <div>
              <img
                src="./Assets/teacherimg.svg"
                alt="upload"
                className="h-fit w-full object-contain mt-6 px-5"
              />
            </div>
            <div>
              <p className="text-center text-[#1665d8] font-medium text-[12px] mt-[25PX] pb-[15px]">
                UPLOAD PICTURE
              </p>
            </div>
          </Upload>
        </div>

        {/* <!-- Last div --> */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mt-4 mb-6 ">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Religion"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Religion
              </label>
              <select
                onChange={handleChange}
                className="text-[#656565] text-[14px] bg-white p-2 outline-none border border-solid border-[#dfe1e6] w-full"
              >
                {religions.map((religion) => (
                  <option key={religion} value={religion}>
                    {religion}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Address"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Address
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                placeholder="My house address example"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="HighestQualification"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Highest Qualification
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                placeholder="B.Sc Mathematics"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="level"
                className="text-[12px] font-semibold text-[#333333]"
              >
                Level
              </label>
              <input
                type="text"
                className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                placeholder="Head Teacher"
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
                className="text-[#656565]  bg-white text-[14px] p-[8.5px] outline-none border border-solid border-[#dfe1e6] w-full"
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
                className="text-[#656565]  bg-white text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
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
            <div className="flex gap-1">
              <div>
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer text-[12px] font-bold text-[#333333]"
                >
                  Class
                </label>
                <input className="text-[#656565] text-[14px] p-[6px] outline-none border border-solid border-[#dfe1e6] w-[100px]" />
              </div>
              <input
                type="file"
                id="fileUpload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="text-[#656565] text-[12px] p-2 outline-none w-40"
              />
            </div>
          </div>
        </div>
        <hr />

        {/* <!-- Buttons --> */}
        <div className="flex mt-5 justify-end gap-3">
          <CancelBtn>Delete</CancelBtn>
          <Button className="text-white">Edit Profile</Button>
        </div>
      </form>
    </div>
  );
}

// first form
// className="w-full md:w-auto h-full border border-solid border-amber-50 bg-white md:h-auto fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col justify-center items-center z-[3330] bg-[transparent] overflow-y-auto px-3 "

export default TeacherAccountDetail;
