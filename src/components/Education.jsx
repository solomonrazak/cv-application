
import React, { useState, useContext } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlus, FaUserGraduate } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { DataContext } from "../DataContext";

function Education() {
  const [displayedFormIndex, setDisplayedFormIndex] = useState(-1);
  const [toggle, setToggle] = useState(true);


  const {
   
    setEducationInput,
    educationFormData,
    setEducationFormData,
    filledForms,
    setFilledForms
  } = useContext(DataContext);



  function displayForm() {
    if (displayedFormIndex === -1) {
      // No form is displayed, display the first one
      setDisplayedFormIndex(0);
    } else {
      // A form is displayed, increment the index to display the next form
      setDisplayedFormIndex(displayedFormIndex + 1);
      // Reset education form data
      setEducationFormData({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      });
    }
    setToggle(false);
  }

  function handleEducationInputChange(value) {
    setEducationInput(value);
  }

  function changeToggle() {
    setToggle(!toggle);
    setDisplayedFormIndex(-1); // Reset displayed form index
  }

  function handleEducationFormInputChange(e, field) {
    const { value } = e.target;
    setEducationFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  function handleCancel() {
    setDisplayedFormIndex(-1); // Hide the displayed form
  }

  function handleDelete(e) {
    e.preventDefault();
    setEducationFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  }

  function saveEducationForm(e) {
    e.preventDefault();
    const newEducation = {
      school: educationFormData.school,
      degree: educationFormData.degree,
      startDate: educationFormData.startDate,
      endDate: educationFormData.endDate,
      location: educationFormData.location,
    };
    console.log(newEducation);

    setFilledForms([...filledForms, newEducation])
    setDisplayedFormIndex(-1); // Hide the displayed form after saving

    setEducationFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      
  });
  setToggle(true);
  }

  return (
    <div>
      <div className="flex flex-col">
        <div
          className="bg-white flex justify-between h-[70px] items-center w-96 mx-auto p-4 rounded-t-md"
          style={{ borderBottomRadius: toggle ? "5px" : "0px" }}
        >
          <div className="flex items-center gap-3">
            <FaUserGraduate
              className="w-[50px]"
              style={{ width: "20px", height: "20px" }}
            />
            <button className="font-medium text-2xl">Education</button>
          </div>
          <button>
            <RiArrowDropDownLine
              className="font-medium"
              style={{
                width: "50px",
                height: "50px",
                transform: toggle ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={changeToggle}
            />
          </button>
        </div>
        {displayedFormIndex !== -1 && (
          <div
            id="show-experience"
            className="w-96 mx-auto bg-white p-3 block rounded-b-md"
          >
            <form>
              <label className="font-medium" htmlFor="school">
                School
              </label>
              <input
                id="school"
                placeholder="Enter school / university"
                type="text"
                className="block w-full bg-gray-100 border-solid border-[2px] h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-0"
                name="school"
                value={educationFormData.school}
                onChange={(e) => handleEducationFormInputChange(e, "school")}
              />
              <label className="font-medium" htmlFor="degree">
                Degree
              </label>
              <input
                id="degree"
                placeholder="Enter Degree / Field of Study"
                type="text"
                className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none"
                name="degree"
                value={educationFormData.degree}
                onChange={(e) => handleEducationFormInputChange(e, "degree")}
              />
              <label className="font-medium" htmlFor="start-date">
                Start Date
              </label>
              <input
                id="start-date"
                placeholder="Select start date"
                className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none"
                type="date"
                name="startDate"
                value={educationFormData.startDate}
                onChange={(e) => handleEducationFormInputChange(e, "startDate")}
              />
              <label className="font-medium" htmlFor="end-date">
                End Date
              </label>
              <input
                id="end-date"
                placeholder="Select end date"
                className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none"
                type="date"
                name="endDate"
                value={educationFormData.endDate}
                onChange={(e) => handleEducationFormInputChange(e, "endDate")}
              />
              <label className="font-medium" htmlFor="location-edu">
                Location
              </label>
              <input
                id="location-edu"
                placeholder="Enter Location"
                className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none"
                type="text"
                name="location"
                value={educationFormData.location}
                onChange={(e) => handleEducationFormInputChange(e, "location")}
              />

              <div className="flex justify-between mt-3">
                <div>
                  <button
                    className="flex bg-white border-2 border-slate-400 gap-1 rounded items-center p-1 text-gray-800"
                    onClick={handleDelete}
                  >
                    <MdDelete />
                    Delete
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-white border-2 border-slate-400 rounded px-2 text-gray-800"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-600 text-white p-1 px-2 rounded"
                    onClick={saveEducationForm}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      {toggle && (
        <div className="w-full mx-auto flex flex-col justify-center">
          <div className="flex w-96 h-[50px] bg-white p-5 justify-between items-center mx-auto mt-1 rounded-md">
            <button
              className="text-black bg-white border-4 flex items-center justify-center py-1 px-1 gap-2 rounded-full mx-auto font-medium w-[140px]"
              onClick={displayForm}
            >
              <FaPlus />
              Education
            </button> 
          </div>
        </div>
      )}
    </div>
  );
}

export default Education;
