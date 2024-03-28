import React, { useState, useContext } from "react";
import { SketchPicker } from "react-color";
import { HiDocumentText } from "react-icons/hi2";
import { TiEdit } from "react-icons/ti";
import { DataContext } from "../DataContext";

function Customize() {
  const [displayCustomize, setDisplayCustomize] = useState(false);
  const [displaySketchPicker, setDisplaySketchPicker] = useState(false);
  const [font, setFont] = useState("sans");
  // const [currentColor, setCurrentColor] = useState("#0A0111");

  const {
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
  } = useContext(DataContext);

  useEffect(() => {
    let propertyFont = font === "sans" ? "NotoSans, sans-serif" : font;
    let boldFont = font === "sans" ? "NotoSans-Bold, sans-serif" : font;

    document.body.style.setProperty("--resume-font", propertyFont);
    document.body.style.setProperty("--resume-bold", boldFont);
  }, [font]);

  function displayCustomizeButtons() {
    setDisplayCustomize(true);
    setShowPersonalDetails(false);
    setShowEducation(false);
    setShowExperience(false);
    setShowSkills(false);
    setShowExample(false);
  }

  function displaySketchPickerNow() {
    setDisplaySketchPicker(!displaySketchPicker);
  }

  function handleColorChange(color) {
    setCurrentColor(color.hex);
  }

  function displayContentBack() {
    setShowPersonalDetails(true);
    setShowEducation(true);
    setShowExperience(true);
    setShowSkills(true);
    setShowExample(true);
    setDisplayCustomize(false);
    
  }
  return (
    <div>
      <div className="flex flex-col bg-white items- p-4 rounded-md mx-4">
        <div
          className="bg-slate-100 flex flex-col items-center w-full p-2 rounded-md cursor-pointer"
          onClick={displayContentBack}
        >
          <HiDocumentText />
          <p className="text-2xl text-black">Content</p>
        </div>
        <div
          className="bg-transparent flex flex-col items-center w-full p-2 cursor-pointer group"
          onClick={displayCustomizeButtons}
        >
          <TiEdit />
          <p className="text-2xl text-red cursor-pointer">Customize</p>
        </div>
      </div>
      {displayCustomize && (
        <div className="flex flex-col bg-transparent">
          <div className="flex flex-col gap-5 mt-10 items-center">
            <div className="flex flex-col bg-white text-slate-900 w-[300px] p-5 rounded-md">
              <h1
                className="font-medium text-[21px]"
                style={{ color: currentColor }}
              >
                Color
              </h1>
              <div className="flex gap-3 items-center">
                <p style={{ color: currentColor }}>Accent Color</p>
                <div
                  className="w-[20px] h-[20px] bg-red-200 rounded-full mt-1 cursor-pointer"
                  style={{ backgroundColor: currentColor }}
                  onClick={displaySketchPickerNow}
                ></div>
              </div>
            </div>
            <div className="bg-white w-[100px] h-[100px]">
              <h1> font sjjdjdjdj</h1>
              <div></div>
            </div>
          </div>
          {displaySketchPicker && (
            <div className="flex justify-end ml-[20px] z-10 absolute top-[21rem] left-[11rem]">
              <SketchPicker
                color={currentColor}
                onChangeComplete={handleColorChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Customize;
