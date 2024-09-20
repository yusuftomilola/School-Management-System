import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import CreateNewButton from "../components/CreateNewButton";
import CancelBtn from "../components/forms/CancelBtn";
import Button from "../components/forms/Button";
import { lgaList } from "../components/forms/lgaList";
import TeachersContext from "../contexts/teachersContext";

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

const Teacher = () => {
  const { fetchTeachers } = useContext(TeachersContext);
  const params = useParams();
  const navigate = useNavigate();

  // Get teacher data from localStorage
  const storedTeachers = JSON.parse(localStorage.getItem("teachersData")) || [];
  const teacherData = storedTeachers.find(
    (teacher) => teacher.fullName === params.userName
  );

  const [formData, setFormData] = useState(teacherData || {});
  const [lgas, setLgas] = useState(lgaList[teacherData?.stateOfOrigin] || []);
  const [imagePreview, setImagePreview] = useState(teacherData?.image || "");
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setFormData((prev) => ({ ...prev, stateOfOrigin: selectedState }));
    setLgas(lgaList[selectedState] || []);
  };

  const handleEditProfile = (event) => {
    event.preventDefault();
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phoneNr) {
      alert("Please fill in all required fields.");
      return;
    }

    // Update the teacher's data in localStorage
    const updatedTeachers = storedTeachers.map((teacher) =>
      teacher.fullName === params.userName ? formData : teacher
    );
    console.log(updatedTeachers);
    localStorage.setItem("teachersData", JSON.stringify(updatedTeachers));

    setShowForm(false);

    navigate("/teachers");
  };

  const handleDelete = () => {
    setShowForm(false); // Hide the form on delete
    navigate("/teachers");
  };

  if (!showForm) return null;

  return (
    <div>
      <section className="flex items-start justify-between mb-8 flex-col sm:flex-row sm:items-center gap-5 sm:gap-0">
        <Breadcrumbs
          title1={"Dashboard"}
          url1={"/dashboard"}
          title2={"Teachers"}
          url2={"/teachers"}
          title3={`${params.userName}`}
        />

        <div>
          <CreateNewButton backgroundColor={"#EAE6FF"} textColor={"#403294"}>
            Create New Teacher
          </CreateNewButton>
        </div>
      </section>

      {storedTeachers
        .filter((teacher) => teacher.fullName === params.userName)
        .map((teacher) => (
          <section
            className="flex flex-col lg:flex-row gap-4  justify-between"
            key={teacher.id}
          >
            <form
              className="w-full max-w-[600px] p-[10px] h-fit md:h-[100%] bg-white"
              onSubmit={handleEditProfile}
            >
              {/* Form Header */}
              <div className="flex flex-col mb-3 gap-4 max-[900px]:flex-col min-[900px]:flex-row">
                <h1 className="text-[16px] font-bold text-[#3A3B3F]">
                  Account Detail
                </h1>
                <p className="text-[#66788A] text-[14px] font-light">
                  The information can be edited. Click edit to update the staff
                  profile.
                </p>
              </div>
              <hr />

              {/* Form Content */}
              <div className="flex flex-col-reverse sm:flex-row gap-8 mt-3">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-[#333333]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-[#333333]">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-[#333333]">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNr"
                      value={formData.phoneNr}
                      onChange={handleInputChange}
                      className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                    />
                  </div>
                </div>

                <div
                  onClick={() =>
                    document.getElementById("image-upload").click()
                  }
                  className="border border-solid border-[#dfe1e6] w-fit flex-1  flex flex-col items-center justify-center object-contain rounded-md"
                >
                  <img
                    src={imagePreview} // Display the selected image
                    alt="Upload preview"
                    className="w-full h-[150px] object-cover cursor-pointer"
                  />
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <p className="text-center text-[#1665d8] font-medium text-[12px] mt-[25px]">
                    UPLOAD PICTURE
                  </p>
                </div>
              </div>

              {/* Form Bottom */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 mt-4 mb-6">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-[#333333]">
                      Religion
                    </label>
                    <select
                      name="religion"
                      value={formData.religion}
                      onChange={handleInputChange}
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
                    <label className="text-[12px] font-semibold text-[#333333]">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-[#333333]">
                      Highest Qualification
                    </label>
                    <input
                      type="text"
                      name="highestQualification"
                      value={formData.highestQualification}
                      onChange={handleInputChange}
                      className="text-[#656565] text-[14px] p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-[#333333]">
                      State of Origin
                    </label>
                    <select
                      name="stateOfOrigin"
                      value={formData.stateOfOrigin}
                      onChange={handleStateChange}
                      className="text-[#656565] text-[14px] bg-white p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                    >
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-semibold text-[#333333]">
                      LGA
                    </label>
                    <select
                      name="lga"
                      value={formData.lga}
                      onChange={handleInputChange}
                      className="text-[#656565] text-[14px] bg-white p-2 outline-none border border-solid border-[#dfe1e6] w-full"
                    >
                      {lgas.map((lga) => (
                        <option key={lga} value={lga}>
                          {lga}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex items-center gap-4 mt-[20px] float-end">
                <CancelBtn onClick={handleDelete}>Cancel</CancelBtn>
                <Button type="submit" className="text-white px-6">
                  Edit
                </Button>
              </div>
            </form>
          </section>
        ))}
    </div>
  );
};

export default Teacher;
