import React, { useState, useContext } from "react";
import Customize from "./Customize";
import Example from "./Example";
import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import SkillSet from "./SkillSet";
import { DataContext } from "../DataContext";



function displayOutput(){
  setShowEducation(true);
}

const Input = () => {
  const {
    showPersonalDetails,
    setShowPersonalDetails,
    showEducation,
    setShowEducation,
    showExperience,
    setShowExperience,
    showSkills,
    setShowSkills,
    showExample,
    setShowExample,
  } = useContext(DataContext);
  return (
    <div className="bg-transparent w-full py-2 px-1 md:p-4 space-y-4 md:space-y-8 flex flex-col min-h-full md:m-4 rounded-md">
      <Customize />
      {showExample && <Example /> }
      {showPersonalDetails && <PersonalDetails />}
      {showEducation && <Education />}
      {showExperience && <Experience />}
      {showSkills && <SkillSet />}
      
    </div>
  );
};

export default Input;
