import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import React Hook Form
import * as yup from "yup"; // Import Yup for validation
import { yupResolver } from "@hookform/resolvers/yup"; // Yup integration with React Hook Form
import Breadcrumbs from "../components/Breadcrumbs";
import CreateNewButton from "../components/CreateNewButton";
import { userss } from "../data/users";
import { lgaList } from "../components/forms/lgaList"; // Assuming lgaList is an object with states as keys
import Button from "../components/forms/Button";
import CancelBtn from "../components/forms/CancelBtn";

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

// Yup schema for form validation
const schema = yup.object().shape({
  name: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNr: yup.string().required("Phone number is required"),
  religion: yup.string().required("Religion is required"),

  stateOfOrigin: yup.string().required("State of Origin is required"),
  lga: yup.string().required("LGA is required"),
  address: yup.string().required("address is required"),
  highestQualification: yup
    .string()
    .required("Highest Qualification is required"),
});

const DashboardUser = () => {
  const [myData, setMyData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [selectedState, setSelectedState] = useState(""); // Track selected state

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userss"));
    console.log(storedUsers, "Lola");
    if (storedUsers) {
      setMyData(storedUsers);
    } else {
      localStorage.setItem("userss", JSON.stringify(userss));
      setMyData(userss);
      console.log(userss);
    }
  }, []);

  const stored = JSON.parse(localStorage.getItem("userss")) || [];
  console.log(stored);
  const userData = stored.find((user) => user.name === params.userName);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Add Yup validation schema
    defaultValues: {
      name: userData?.name || "",
      email: userData?.email || "",
      phoneNr: userData?.phoneNr || "",
      religion: userData?.religion || "",
      address: userData?.address || "",
      highestQualification: userData?.qualification || "",
      stateOfOrigin: "",
      lga: "",
    },
  });

  useEffect(() => {
    console.log(errors, "Error form");
  }, [errors]);

  const cancel = () => {
    navigate("/userss");
  };

  const handleImageClick = () => {
    document.getElementById("image-upload").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Update the selected image for preview
    }
  };

  const onSubmit = (data) => {
    console.log("Running");
    console.log(data, "Validate");
    // Use the `myData` state instead of reading from localStorage again
    const updatedUsers = myData.map((user) =>
      user.name === params.userName
        ? { ...user, ...data, imageUser: selectedImage || user.imageUser }
        : user
    );

    console.log(updatedUsers);

    // Update localStorage with updated users
    localStorage.setItem("userss", JSON.stringify(updatedUsers));

    // Update state with new data
    setMyData(updatedUsers);

    // Ensure that navigation happens after the state is updated
    setTimeout(() => {
      console.log(myData);
      navigate("/userss");
    }, 100);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value); // Update selected state on change
  };

  return (
    <div>
      <section className="flex items-start justify-between mb-8 flex-col sm:flex-row sm:items-center gap-5 sm:gap-0">
        <Breadcrumbs
          title1={"Dashboard"}
          url1={"/dashboard"}
          title2={"Users"}
          url2={"/userss"}
          title3={`${params.userName}`}
        />
        <CreateNewButton backgroundColor={"#403294"} textColor={"#EAE6FF"}>
          Create New User
        </CreateNewButton>
      </section>

      <form
        onSubmit={handleSubmit(onSubmit)}
        method="dialog"
        className="w-full max-w-[600px] p-[10px] h-fit md:h-[100%] bg-white"
      >
        <div className="flex flex-col mb-3 gap-4">
          <h1 className="text-[16px] font-bold text-[#3A3B3F]">
            Account Detail
          </h1>
          <p className="text-[#66788A] text-[14px] font-light">
            The information can be edited. Click edit to update the staff
            profile.
          </p>
        </div>
        <hr />

        <div className="flex flex-col-reverse sm:flex-row gap-8 mt-3">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#333333]">
                Full Name
              </label>
              <input
                {...register("name")}
                className="text-[#656565] text-[14px] p-2 outline-none border w-full"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#333333]">
                Email
              </label>
              <input
                {...register("email")}
                className="text-[#656565] text-[14px] p-2 outline-none border w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#333333]">
                Phone Number
              </label>
              <input
                {...register("phoneNr")}
                className="text-[#656565] text-[14px] p-2 outline-none border w-full"
              />
              {errors.phoneNr && (
                <p className="text-red-500 text-xs">{errors.phoneNr.message}</p>
              )}
            </div>
          </div>

          <div
            onClick={handleImageClick}
            className="border border-solid border-[#dfe1e6] w-fit flex-1 flex flex-col items-center justify-center object-contain rounded-md"
          >
            <div className="cursor-pointer">
              <img
                alt="Upload preview"
                className="w-full h-[150px] object-cover"
                src={selectedImage || userData?.imageUser || ""}
              />
            </div>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <p className="text-center text-[#1665d8] font-medium text-[12px] mt-[25px] cursor-pointer">
              UPLOAD PICTURE
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 mt-4 mb-6">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#333333]">
                Religion
              </label>
              <select
                {...register("religion")}
                className="text-[#656565] text-[14px] p-2 outline-none border w-full"
              >
                {religions.map((religion) => (
                  <option key={religion} value={religion}>
                    {religion}
                  </option>
                ))}
              </select>
              {errors.religion && (
                <p className="text-red-500 text-xs">
                  {errors.religion.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#333333]">
                Highest Qualification
              </label>
              <input
                {...register("highestQualification")}
                className="text-[#656565] text-[14px] p-2 outline-none border w-full"
              />
              {errors.highestQualification && (
                <p className="text-red-500 text-xs">
                  {errors.highestQualification.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#333333]">
                Address
              </label>
              <input
                {...register("address")}
                type="text"
                name="address"
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
                {...register("stateOfOrigin")}
                value={selectedState}
                onChange={handleStateChange}
                className="text-[#656565] text-[14px] p-2 outline-none border w-full"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.stateOfOrigin && (
                <p className="text-red-500 text-xs">
                  {errors.stateOfOrigin.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[12px] font-semibold text-[#333333]">
                LGA
              </label>
              <select
                {...register("lga")}
                className="text-[#656565] text-[14px] p-2 outline-none border w-full"
              >
                {selectedState && lgaList[selectedState] ? (
                  lgaList[selectedState].map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))
                ) : (
                  <option value="">Select a state first</option>
                )}
              </select>
              {errors.lga && (
                <p className="text-red-500 text-xs">{errors.lga.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 mt-[20px]">
          <CancelBtn onClick={cancel}>Cancel</CancelBtn>
          <Button type="submit" className="text-white px-6">
            Edit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DashboardUser;
