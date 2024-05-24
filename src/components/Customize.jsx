import React, { useState, useEffect, useContext } from "react";
import { SketchPicker } from "react-color";
import { HiDocumentText } from "react-icons/hi2";
import { TiEdit } from "react-icons/ti";
import { DataContext } from "../DataContext";

function Customize() {
  const [displayCustomize, setDisplayCustomize] = useState(false);
  const [displaySketchPicker, setDisplaySketchPicker] = useState(false);
  // const [font, setFont] = useState("sans");
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
    font,
    setFont
  } = useContext(DataContext);

  useEffect(() => {
    let propertyFont = font === "sans" ? "NotoSans, sans-serif" : font;

    // document.body.style.setProperty("--resume-font", propertyFont);
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
      <div className="flex flex-col bg-white items-center p-4 rounded-md w-[24rem] md:w-full mx-auto">
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
          <div className="flex flex-col gap-8 mt-10 items-center">
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
            <div className="bg-white w-[300px] py-3 px-4 rounded-md">
              <h1 className="font-medium text-[21px]" style={{color: currentColor}}>Font</h1>
              <div className="flex justify-between mt-2">
              <div
                  className={`flex flex-col border-red-300 border-2 w-[60px] items-center p-1 rounded-lg cursor-pointer ${font === "serif" && "font-bold"}`}
                  style={{
                    color: currentColor,
                    borderColor: currentColor,
                  }}
                  onClick={() => setFont("serif")}
                >
                  <p className="font-medium">Aa</p>
                  <p>Serif</p>
                </div>
                <div
                  className={`flex flex-col  border-2 w-[60px] items-center p-1 rounded-lg cursor-pointer ${font === "sans" && "font-bold"}`}
                  style={{
                    color: currentColor,
                    borderColor: currentColor,
                  }}
                  onClick={() => setFont("sans")}
                >
                  <p className="font-medium">Aa</p>
                  <p>Sans</p>
                </div>
                <div
                  className={`flex flex-col border-red-400 border-2 w-[60px] items-center p-1 rounded-lg cursor-pointer ${font === "mono" && "font-bold"}`}
                  style={{
                    color: currentColor,
                    borderColor: currentColor,
                  }}
                  onClick={() => setFont("mono")}
                >
                  <p className="font-medium">Aa</p>
                  <p>Mono</p>
                </div>

              </div>
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
