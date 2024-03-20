import React, { useState, useContext } from "react";
import { FaToolbox, FaPlus } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { DataContext } from "../DataContext";

function Experience() {
  // const sampleExperience = ["AmaliTech Ghana", "MTN Ghana"];
  const [displayNewwForm, setDisplayNewwForm] = useState(false);
  const [newFormInput, setNewFormInput] = useState("");
  const [displayedFormIndex, setDisplayedFormIndex] = useState(-1);
  //   const [newExperienceDetails, setNewExperienceDetails] = useState("")
  // const [experienceInput, setExperinceInput] = useState(
  //   sampleExperience.map((experience) => ({ name: experience }))
  // );
  const [tog, setTog] = useState(true); // Set initial value to true if you want it to be visible by default
  const {
    experienceFormData,
    setExperienceFormData,
    experienceFilledForm,
    setExperienceFilledForm,
  } = useContext(DataContext);

  function displayFormm() {
    if (displayedFormIndex === -1) {
      // No form is displayed, display the first one
      setDisplayedFormIndex(0);
    } else {
      // A form is displayed, increment the index to display the next form
      setDisplayedFormIndex(displayedFormIndex + 1);
      // Reset education form data
      setExperienceFormData({
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      });
    }
    setTog(false);
  }

  // change the toggle to display or hide initailized examples
  function changeTog() {
    setTog(!tog); // Change toggle to tog
    setDisplayedFormIndex(-1); // Reset displayed form index
  }

  // handle input changes in the initialized experience inputs
  // function handleExperienceInputChange(e, field) {
  //   const { value } = e.target;
  //   setExperienceFormData((prevData) => ({
  //     ...prevData,
  //     [field]: value,
  //   }));
  // }

  // handle the display of new form
  // function displayFormm() {
  //   if (!displayNewwForm) setDisplayNewwForm(true);
  //   setTog(false);
  // }

  // handle new form displayed input changes
  //   function handleNewFormInput(e){
  //    const {name, value} = e.target;
  //    setNewFormInput((prevInput) => ({
  //     ...prevInput,
  //     [name]: value
  //    }))
  // //    console.log(value)
  //   }

  // handle cancel button
  function handleCancel() {
    setDisplayedFormIndex(-1); // Hide the displayed form
  }
  // hanlde delete button
  function handleDelete(e) {
    e.preventDefault();
    setExperienceFormData({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  }

  //function to handle experience input form

  ////

  function handleExperienceFormInputChange(e, field) {
    const { value } = e.target;
    setExperienceFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }

  // save experince input form
  function saveExperienceForm(e) {
    e.preventDefault();
    const newExperience = {
      companyName: experienceFormData.companyName,
      positionTitle: experienceFormData.positionTitle,
      startDate: experienceFormData.startDate,
      endDate: experienceFormData.endDate,
      location: experienceFormData.location,
      description: experienceFormData.description,
    };
    console.log(newExperience);

    setExperienceFilledForm([...experienceFilledForm, newExperience]);
    setDisplayedFormIndex(-1); // Hide the displayed form after saving

    setExperienceFormData({
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setTog(true);
    
  }

  const educationSectionStyles = {
    transition: "max-height 0.3s ease-in-out",
    maxHeight: 0,
    overflow: "hidden",
  };

  const visibleStyles = {
    maxHeight: "300px", // Set an appropriate maximum height
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-white flex justify-between h-[70px] items-center w-96 mx-auto p-4 rounded-t-md">
          <div className="flex items-center gap-3">
            <FaToolbox style={{ width: "20px", height: "20px" }} />
            <button className="font-medium text-2xl">Experience</button>
          </div>
          <button onClick={changeTog}>
            <RiArrowDropDownLine
              className="font-medium"
              style={{
                width: "50px",
                height: "50px",
                transform: tog ? "rotate(0deg)" : "rotate(180deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </button>
        </div>
        {displayedFormIndex !== -1 && (
          <div
            id="show-experience"
            className="w-96 mx-auto bg-white p-3 block rounded-b-md"
          >
            <form>
              <label className="font-medium" htmlFor="company-name">
                Company Name
              </label>
              <input
                id="company-name"
                placeholder="Enter Company Name"
                type="text"
                className="block w-full bg-gray-100 border-solid border-[2px] h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-0"
                name="companyName"
                value={experienceFormData.companyName}
                onChange={(e) =>
                  handleExperienceFormInputChange(e, "companyName")
                }
              />
              <label className="font-medium" htmlFor="position-title">
                Position Title
              </label>
              <input
                id="position-title"
                placeholder="Enter Position Title"
                type="text"
                className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none"
                name="positionTitle"
                value={experienceFormData.positionTitle}
                onChange={(e) =>
                  handleExperienceFormInputChange(e, "positionTitle")
                }
              />
              <label className="font-medium" htmlFor="date-started">
                Start Date
              </label>
              <input
                id="date-started"
                placeholder="Enter Company Name"
                className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none"
                type="date"
                name="startDate"
                value={experienceFormData.startDate}
                onChange={(e) =>
                  handleExperienceFormInputChange(e, "startDate")
                }
              />
              <label className="font-medium" htmlFor="date-ended">
                End Date
              </label>
              <input
                id="date-ended"
                placeholder="Enter Company Name"
                className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none"
                type="date"
                name="endDate"
                value={experienceFormData.endDate}
                onChange={(e) => handleExperienceFormInputChange(e, "endDate")}
              />
              <label className="font-medium" htmlFor="location">
                Location
              </label>
              <input
                id="location"
                placeholder="Enter Location"
                className="block w-full bg-gray-100 border-2 h-[40px] text-[14px] my-2 px-4 rounded-xl focus:border-blue-600 focus:outline-none"
                type="text"
                name="location"
                value={experienceFormData.location}
                onChange={(e) => handleExperienceFormInputChange(e, "location")}
              />
              <label className="font-medium my-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="block bg-gray-200 w-full px-4 py-1 focus:border-blue-600 mt-2 focus:outline-none border-2 rounded-lg"
                rows="4"
                name="description"
                id="description"
                value={experienceFormData.description}
                onChange={(e) =>
                  handleExperienceFormInputChange(e, "description")
                }
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
                    onClick={saveExperienceForm}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
      {/* {tog && (
      <div className="w-96 mx-auto flex flex-col justify-center"
        
      >
        <div >
          {experienceInput.map((expInput, index) => (
            <input
              key={index}
              value={expInput.name}
              type="text"
              onChange={(e) =>
                handleExperienceInputChange(index, e.target.value)
              }
              className="w-96 mx-auto p-4 rounded-md h-[50px] bg-white mt-1 font-medium"
            />
          ))}
        </div>
        <div className="flex w-96 h-[50px] bg-white p-5 justify-between items-center mx-auto mt-1 rounded-md">
          <button
            className="text-black bg-white border-4 flex items-center justify-center py-1 px-1 gap-2 rounded-full mx-auto font-medium w-[140px]"
            onClick={displayFormm}
          ><FaPlus />Experience
          </button>
        </div>
      </div>
    )} */}
      {tog && (
        <div className="w-full mx-auto flex flex-col justify-center">
          <div className="flex w-96 h-[50px] bg-white p-5 justify-between items-center mx-auto mt-1 rounded-md">
            <button
              className="text-black bg-white border-4 flex items-center justify-center py-1 px-1 gap-2 rounded-full mx-auto font-medium w-[140px]"
              onClick={displayFormm}
            >
              <FaPlus />
              Experience
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
