import React, { useContext } from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { DataContext } from "../DataContext";

function Output() {
  // const [educationFormData, setEducationFormData] = useState([{
  //   school: "",
  //   degree: "",
  //   startDate: "",
  //   endDate: "",
  //   location: "",
  // }]);

  const {
    personalDetails,
    setPersonalDetails,
    skills,
    setSkills,
    newSkills,
    setNewSkills,
    educationInput,
    setEducationInput,
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
  } = useContext(DataContext);

  // function to format Date
  function formatDayandMonth(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleDateString("default", { month: "short" });
    const year = date.getFullYear();
    return `${month}  ${year}`;
  }

  return (
    <div className="w-full bg-white h-full m-4 mr-3">
      <header
        className="w-full h-[140px] flex flex-col text-white justify-center items-center gap-5"
        style={{ backgroundColor: currentColor }}
      >
        <h1 className="font-medium text-4xl">{personalDetails.fullname}</h1>
        <div id="sub-heading" className="flex justify-around gap-5">
          <div className="flex items-center gap-2">
            <MdOutlineMail />
            <p>{personalDetails.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <BsTelephoneFill />
            <p>{personalDetails.telephone}</p>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn />
            <p>{personalDetails.address}</p>
          </div>
        </div>
      </header>

      <main className="mt-8 w-[700px] mx-auto flex flex-col gap-10">
        <div id="education" className="flex flex-col">
          <div
            className="edu-title w-full bg-gray-100 text-center font-medium p-1 text-2xl rounded-md"
            style={{ color: currentColor }}
          >
            Education
          </div>
          {filledForms.map((form, index) => (
            <div className="grid grid-cols-3 mt-5" key={index}>
              <div className="col-span-1">
                <p>
                  {formatDayandMonth(form.startDate)} -{" "}
                  {formatDayandMonth(form.endDate)}
                </p>
                <p>{form.location}</p>
              </div>
              <div className="col-span-2">
                <p className="font-bold">{form.school}</p>
                <p>{form.degree}</p>
              </div>
            </div>
          ))}

          {/*second university */}
          {/* <div className="grid grid-cols-3 mt-5">
            <div className="col-span-1">
              <p>08/20 - present</p>
              <p>Legon-Accra, Ghana</p>
            </div>
            <div className="col-span-2">
              <p className="font-bold">Kwame Nkrumah University</p>
              <p>Bachelors in Engineering</p>
            </div>
          </div> */}
        </div>

        {/* experience*/}

        <div id="experience" className="flex flex-col">
          <div
            className="edu-title w-full bg-gray-100 text-center font-medium p-1 text-2xl rounded-md"
            style={{ color: currentColor }}
          >
            Experience
          </div>
          {experienceFilledForm.map((form, index) => (
            <div className="grid grid-cols-3 mt-5" key={index}>
              <div className="col-span-1">
                <p>
                  {formatDayandMonth(form.startDate)} -{" "}
                  {formatDayandMonth(form.endDate)}
                </p>
                <p>{form.location}</p>
              </div>
              <div className="col-span-2">
                <p className="font-bold">{form.companyName}</p>
                <p className="text-[17px]">{form.positionTitle}</p>
                <p>{form.description}</p>
              </div>
            </div>
          ))}

          {/*second second experience */}
          {/* <div className="grid grid-cols-3 mt-5">
            <div className="col-span-1">
              <p>08/20 - present</p>
              <p>Legon-Accra, Ghana</p>
            </div>
            <div className="col-span-2">
              <p className="font-bold">MTN Ghana</p>
              <p className="text-[17px]">FrontEnd Developer</p>
              <p>Supported senior researchers on accessibility standards for the open web. 
                Created and usability tested wireframes and prototypes. Produced interactive documentation for quick 
                onboarding of new researchers.</p>
            </div>
          </div> */}
        </div>
        {/* *skills */}
        <div id="education" className="flex flex-col">
          <div
            className="edu-title w-full bg-gray-100 text-center font-medium p-1 text-2xl rounded-md"
            style={{ color: currentColor }}
          >
            Skills
          </div>
          <div className="bg-gray-100 w-[300px] h-[200px] mx-auto mt-3">
            <ul className="text-start list-disc list-inside my-1 px-2">
              {skills.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
            <ul className="text-start list-disc list-inside my-1 px-2">
              {newSkills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Output;
