import React, {useContext} from "react";
import { MdDelete } from "react-icons/md";
import { DataContext } from "../DataContext";



function Example() {

  const {personalDetails, setPersonalDetails, skills, setSkills, newSkills, setNewSkills} = useContext(DataContext);
  const sampleSkills = ["JavaScript", "React", "Python"];


  function clearAll() {
    setPersonalDetails({
      fullname: "",
      email: "",
      telephone: "",
      address: "",
    });
    setSkills([]); 
    setNewSkills([]);
  }

  function loadExample(){
    setPersonalDetails({
      fullname: "Solomon Razak",
    email: "solomonrazak99@gmail.com",
    telephone: "0591587923",
    address: "Accra, Ghana"
    })
    setSkills((sampleSkills.map((skills) => (
      {
        name: skills,
      }
    ))));
   
  }
  return (
    <div className="bg-white flex justify-around gap-4 p-2 w-96 h-12 md:p-2 mx-auto rounded-md md:flex md:flex-row cursor-pointer">
      <div className="flex justify-around items-center gap-2 group hover:scale-110 duration-200 transition-all ease-in-out" onClick={clearAll}>
      <MdDelete className="text-red-600"/>
      <p className="text-red-600">Clear Resume</p>
      </div>
      <div className="bg-slate-100 flex items-center justify-center p-4 rounded-md hover:bg-slate-600 hover:text-white" onClick={loadExample}>
         <p>Load Example</p>
      </div>
    </div>
  );
}

export default Example;
