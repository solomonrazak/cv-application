import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import { DataContext } from "./DataContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const [count, setCount] = useState(0);

  // const [personalDetails, setPersonalDetails] = useState({
  //   fullname: "Solomon Razak",
  //   email: "solomonrazak99@gmail.com",
  //   telephone: "0591587923",
  //   address: "Accra, Ghana",
  // });

  // const sampleSkills = ["JavaScript", "React", "Python"];
  // const [skills, setSkills] = useState(
  //   sampleSkills.map((skill) => ({ name: skill }))
  // );

  // const [newSkills, setNewSkills] = useState([]);

  // const [educationFormData, setEducationFormData] = useState([
  //   {
  //     school: "",
  //     degree: "",
  //     startDate: "",
  //     endDate: "",
  //     location: "",
  //   },
  // ]);

  // const [filledForms, setFilledForms] = useState([]); // a place to store all saved inputs filled from an education form.

  // // experience

  // const [experienceFormData, setExperienceFormData] = useState([
  //   {
  //     companyName: "",
  //     positionTitle: "",
  //     startDate: "",
  //     endDate: "",
  //     location: "",
  //     description: "",
  //   },
  // ]);

  // const [experienceFilledForm, setExperienceFilledForm] = useState([]);

  // const [currentColor, setCurrentColor] = useState("#0A0111");

  // const [showPersonalDetails, setShowPersonalDetails] = useState(true);
  // const [showEducation, setShowEducation] = useState(true);
  // const [showExperience, setShowExperience] = useState(true);
  // const [showSkills, setShowSkills] = useState(true);
  // const [showExample, setShowExample] = useState(true);

  // const [font, setFont] = useState("sans");

  return (
    
    
      <UserAuthContextProvider>
        <div>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </UserAuthContextProvider>
    
  );
}

export default App;
