import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import { DataContext } from "./DataContext";

function App() {
  const [count, setCount] = useState(0);

  const [personalDetails, setPersonalDetails] = useState({
    fullname: "Solomon Razak",
    email: "solomonrazak99@gmail.com",
    telephone: "0591587923",
    address: "Accra, Ghana",
  });

  const sampleSkills = ["JavaScript", "React", "Python"];
  const [skills, setSkills] = useState(
    sampleSkills.map((skill) => ({ name: skill }))
  );

  const [newSkills, setNewSkills] = useState([]);

  const [educationFormData, setEducationFormData] = useState([
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);

  const [filledForms, setFilledForms] = useState([]); // a place to store all saved inputs filled from an education form.

  // experience

  const [experienceFormData, setExperienceFormData] = useState([
    {
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
  ]);

  const [experienceFilledForm, setExperienceFilledForm] = useState([]);

  const [currentColor, setCurrentColor] = useState("#0A0111");

  const [showPersonalDetails, setShowPersonalDetails] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showExample, setShowExample] = useState(true)

  return (
    <DataContext.Provider
      value={{
        personalDetails,
        setPersonalDetails,
        skills,
        setSkills,
        newSkills,
        setNewSkills,
        educationFormData,
        setEducationFormData,
        filledForms,
        setFilledForms,
        experienceFormData,
        setExperienceFilledForm,
        setExperienceFormData,
        experienceFilledForm,
        currentColor,
        setCurrentColor,
        showPersonalDetails,
        setShowPersonalDetails,
        showEducation,
        setShowEducation,
        showExperience,
        setShowExperience,
        showSkills,
        setShowSkills,
        showExample, 
        setShowExample
      }}
    >
      <div className="grid grid-cols-3 bg-gray-100 gap-3">
        <div className="col-span-1 w-full">
          <Input />
        </div>
        <div className="col-span-2 w-full">
          <Output />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
