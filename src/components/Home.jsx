import React, {useState} from 'react';
import { DataContext } from '../DataContext';
import Input from './Input';
import Output from './Output';
import { useLocation } from 'react-router-dom';


const Home = () => {

  const {state} = useLocation();
  const fullname = state?.fullname || 'New user'

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
      const [showExample, setShowExample] = useState(true);
    
      const [font, setFont] = useState("sans");
      const [preview, setPreview] = useState(false);
      
      const showPreview = () => {
        setPreview(true)
      }
     

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
        setShowExample,
        font, 
        setFont
      }}>
        <div>
          <p>Hi {fullname} you are welcome</p>
    <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100 gap-3">
      
      
        <div className={`col-span-1 w-full ${!preview ? "block" : "hidden"}`}>
          <Input />
        </div>

        
        <div className={`md:col-span-2 w-full md:block ${preview ? "block": "hidden"}`}>
          <Output />
        </div>

        <div className="flex justify-center md:hidden">
        <button onClick={showPreview}>Preview</button>
      </div>
      </div>
      </div>
      </DataContext.Provider>
  )
}

export default Home