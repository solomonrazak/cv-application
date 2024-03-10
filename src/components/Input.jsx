import React from 'react';
import Customize from './Customize';
import Example from './Example';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';
import SkillSet from './SkillSet';

const Input = () => {
  return (
    <div className="bg-transparent w-full p-4 space-y-8 flex flex-col min-h-full m-4 rounded-md">
      <Customize />
      <Example />
      <PersonalDetails />
      <Education />
      <Experience />
      <SkillSet />
    </div>
  )
}

export default Input;