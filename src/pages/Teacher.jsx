import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import CreateNewButton from "../components/CreateNewButton";
// import teachersData from "../data/teachers";
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
  const { fetchTeachers, teachersData } = useContext(TeachersContext);
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const teacherData = teachersData.find(
    (teacher) => teacher.fullName === params.userName
  );
  console.log(teacherData);
  const [formData, setFormData] = useState(teacherData || {});
  console.log(formData);
  const [lgas, setLgas] = useState(lgaList[teacherData.stateOfOrigin] || []);
  const [imagePreview, setImagePreview] = useState(teacherData.image);
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

  const handleEditProfile = () => {
    // Validate form fields (e.g., make sure required fields are filled)
    if (!formData.fullName || !formData.email || !formData.phoneNr) {
      alert("Please fill in all required fields.");
      return;
    }

    // Ideally, here you would send the updated data to a server or update your state
    setFormData(teacherData);
    console.log(teacherData);

    // Navigate back or show success message after saving the changes
    alert("Profile updated successfully!");
    navigate("/Teachers");
  };

  const handleDelete = () => {
    setShowForm(false); // Hide the form on delete
    navigate("/Teachers");
  };

  if (!showForm) return null; // Return nothing if the form is deleted

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

        <CreateNewButton backgroundColor={"#EAE6FF"} textColor={"#403294"}>
          Create New Teacher
        </CreateNewButton>
      </section>

      {teachersData
        .filter((teacher) => teacher.fullName === params.userName)
        .map((teacher) => {
          return (
            <section
              className="flex flex-col lg:flex-row gap-4  justify-between"
              key={teacher.id}
            >
              <form className="w-full max-w-[600px] p-[10px] h-fit md:h-[100%] bg-white">
                {/* Form Header */}
                <div className="flex flex-col mb-3 gap-4 max-[900px]:flex-col min-[900px]:flex-row">
                  <h1 className="text-[16px] font-bold text-[#3A3B3F]">
                    Account Detail
                  </h1>
                  <p className="text-[#66788A] text-[14px] font-light">
                    The information can be edited. Click edit to update the
                    staff profile.
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
                        placeholder={teacher.fullName}
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
                    <div className="flex flex-col gap-1">
                      <label className="text-[12px] font-semibold text-[#333333]">
                        Level
                      </label>
                      <input
                        type="text"
                        name="level"
                        value={formData.level}
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

                <hr />

                {/* Form Buttons */}
                <div className="flex gap-3 sm:gap-5 justify-end mt-5">
                  <CancelBtn onClick={handleDelete}>Cancel</CancelBtn>
                  <Button
                    onClick={handleEditProfile}
                    type="submit"
                    className="text-white"
                  >
                    Edit Profile
                  </Button>
                </div>
              </form>
            </section>
          );
        })}
    </div>
  );
};

export default Teacher;
