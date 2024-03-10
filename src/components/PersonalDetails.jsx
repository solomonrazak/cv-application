import React,{useState, useContext} from "react";
import { DataContext } from "../DataContext";


function PersonalDetails() {

  const {personalDetails, setPersonalDetails} = useContext(DataContext);


 
    // const [personaldetails, setPersonalDetails] = useState({
    //     fullname: "Solomon Razak",
    //     email: "solomonrazak99@gmail.com",
    //     telephone: "0591587923",
    //     address: "Accra, Ghana"

    // })

    function handleInputChange(field, value){
      setPersonalDetails((prevDetails) => ({
        ...prevDetails,
        [field]: value
      //   The [field]: value part is a way to dynamically set a property name in an 
      //   object literal. The value of the field variable is used as the property name,
      //   and its corresponding value is value. This is particularly useful when you 
      //   want to update a specific property in the object based on a variable.
      // So, the square brackets are used for creating an object with a dynamic property 
      // name based on the value of the field variable.
      }))

    }


  return (
    <div className="bg-white w-96 h-[400px] mx-auto p-3 rounded-md">
      <header>
        <h1 className="font-bold text-2xl mb-2">Personal Details</h1>
      </header>
      <div>
        <label className="py-1 block"> 
        <span className="after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-bold text-slate-700">Full name</span>
        <input type="text" className="block bg-slate-100 w-full h-12 rounded-md px-3 my-1 border-2  focus:border-blue-600 focus:outline-none" placeholder="First and last name" value={personalDetails.fullname} onChange={(e) => handleInputChange("fullname", e.target.value)}/>
        </label>
        <label className="py-1 block"> 
        <span className="after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-bold text-slate-700">Email</span>
        <input type="email" className="block bg-slate-100 w-full h-12 rounded-md px-3 my-1 border-2  focus:border-blue-600 focus:outline-none" placeholder="Enter email address" value={personalDetails.email} onChange={(e) => handleInputChange("email", e.target.value)}/>
        </label>
        <label className="py-1 block"> 
        <span className="after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-bold text-slate-700">Phone number</span>
        <input type="tel" className="block bg-slate-100 w-full h-12 rounded-md px-3 my-1 border-2  focus:border-blue-600 focus:outline-none" placeholder="Enter phone number" value={personalDetails.telephone} onChange={(e) => handleInputChange("telephone", e.target.value)}/>
        </label>
        <label className="py-1 block"> 
        <span className="after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-bold text-slate-700">Address</span>
        <input type="text" className="block bg-slate-100 w-full h-12 rounded-md px-3 my-1 border-2  focus:border-blue-600 focus:outline-none text-sm" placeholder="City, Country" value={personalDetails.address} onChange={(e) => handleInputChange("address", e.target.value)}/>
        </label>
      </div> 
    </div>

  
  );
}

export default PersonalDetails;
