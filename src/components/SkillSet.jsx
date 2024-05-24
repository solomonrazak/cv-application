import React, { useState, useContext } from "react";
import { FaTools } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlus, FaTimes } from "react-icons/fa";
import { DataContext } from "../DataContext";

function SkillSet() {

  const {skills, setSkills, newSkills, setNewSkills} = useContext(DataContext);
  // const sampleSkills = ["JavaScript", "React", "Python"];
  // const [skills, setSkills] = useState(
  //   sampleSkills.map((skill) => ({ name: skill }))
  // );
  // const [newSkills, setNewSkills] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [toggled, setToggled] = useState(true);

  function changeToggled() {
    setToggled(!toggled);
  }

  const handleInputChanged = (index, value) => {
    const newSkillsList = [...skills];
    newSkillsList[index].name = value;
    setSkills(newSkillsList);
  };

  const addNewSkill = () => {
    setButtonClicked(true);
    setNewSkills([...newSkills, ""]);
  };

  const handleNewSkillChange = (index, value) => {
    const updatedNewSkills = [...newSkills];
    updatedNewSkills[index] = value;
    setNewSkills(updatedNewSkills);
  };

  // function to delete a particular at an index
function handleDeleteSkill(index){
    const updatedSkill = [...skills]
    updatedSkill.splice(index, 1)
    setSkills(updatedSkill);
  
  }
  
  // function to handle the deletion of a new skill added
  function handleDeleteNewSkill(index){
    const updateSKill = [...newSkills];
    updateSKill.splice(index, 1);
    setNewSkills(updateSKill);
  }

  return (
    <div>
      <div className="bg-white flex justify-between h-[70px] items-center w-96 mx-auto p-4 rounded-md">
        <div className="flex items-center gap-3">
          <FaTools style={{ width: "20px", height: "20px" }} />
          <button className="font-medium text-2xl">Skills</button>
        </div>
        <button>
          <RiArrowDropDownLine
            className="font-medium"
            style={{
              width: "50px",
              height: "50px",
              transform: toggled ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s ease-in-out"
            }}
            onClick={changeToggled}
          />
        </button>
      </div>
      {toggled && (
        <div className="w-full mx-auto flex flex-col justify-center items-center">
          
          {skills.map((skill, index) => (
            <div key={index} className="relative">
            <input
              
              type="text"
              className="w-96 mx-auto p-4 rounded-md h-[50px] bg-white mt-1 font-medium border-2 focus:border-blue-600 focus:outline-none"
              placeholder="Add skill"
              value={skill.name}
              onChange={(e) => handleInputChanged(index, e.target.value)}
            />
            <button
            className="absolute right-9 top-1/2 transform -translate-y-1/2  text-red-500 p-2 rounded-full w-[20px]"
            onClick={() => handleDeleteSkill(index)}
          >
            <FaTimes />
          </button>
          </div>
            
          ))}
          {buttonClicked &&
            newSkills.map((newSkill, index) => (
              <div key={`new_${index}`} className="relative">
              <input
                
                //   It's important for keys to be unique within the array of elements
                //   being rendered. The reason for adding a prefix like "new_" is to
                //   ensure that the keys are unique and not accidentally clash with keys
                //   from other parts of your application.
                type="text"
                className="w-96 mx-auto p-4 rounded-md h-[50px] bg-white mt-1 font-medium border-2 focus:border-blue-600 focus:outline-none"
                placeholder="Add skill"
                value={newSkill}
                onChange={(e) => handleNewSkillChange(index, e.target.value)}
              />
              <button
            className="absolute right-9 top-1/2 transform -translate-y-1/2  text-red-500 p-2 rounded-full w-[20px]"
            onClick={() => handleDeleteNewSkill(index)}
          >
            <FaTimes />
          </button>
              </div>
            ))}
          <div className="flex w-96 h-[50px] bg-white p-4 justify-between items-center mx-auto mt-1 rounded-md">
            <button
              className="text-black bg-white border-4 flex items-center justify-center py-1 px-1 gap-2 rounded-full mx-auto font-medium w-[110px]"
              onClick={addNewSkill}
            >
              <FaPlus />
              Skills
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillSet;
