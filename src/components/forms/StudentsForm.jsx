import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const MultiStepStudentForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Information
    fullName: "",
    religion: "",
    address: "",
    dateOfBirth: "",
    previousSchool: "",
    previousClass: "",
    stateOfOrigin: "",
    lga: "",
    nationality: "",
    // Guardian's Information
    guardianName: "",
    guardianReligion: "",
    guardianPhone: "",
    guardianAddress: "",
    guardianDateOfBirth: "",
    guardianOccupation: "",
    guardianRelation: "",
    guardianStateOfOrigin: "",
    guardianLga: "",
    guardianNationality: "",
    // School Assignment
    schoolSection: "",
    studentClass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Student Information</h2>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              placeholder="Religion"
              className="w-full p-2 border rounded"
            />
            {/* Add more fields for student information */}
            <button
              onClick={handleNextStep}
              className="w-full bg-purple-600 text-white p-2 rounded"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Guardian's Information</h2>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              placeholder="Guardian's Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="guardianReligion"
              value={formData.guardianReligion}
              onChange={handleChange}
              placeholder="Guardian's Religion"
              className="w-full p-2 border rounded"
            />
            {/* Add more fields for guardian's information */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevStep}
                className="bg-gray-300 text-black p-2 rounded"
              >
                Previous
              </button>
              <button
                onClick={handleNextStep}
                className="bg-purple-600 text-white p-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">School Assignment</h2>
            <input
              type="text"
              name="schoolSection"
              value={formData.schoolSection}
              onChange={handleChange}
              placeholder="School Section"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="studentClass"
              value={formData.studentClass}
              onChange={handleChange}
              placeholder="Assign Student to a Class"
              className="w-full p-2 border rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={handlePrevStep}
                className="bg-gray-300 text-black p-2 rounded"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                className="bg-purple-600 text-white p-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        className="fixed inset-0 bg-black/30"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <DialogTitle
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Create Student
          </DialogTitle>
          <div className="mt-2">{renderStep()}</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MultiStepStudentForm;
