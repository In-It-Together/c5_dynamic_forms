import React, { useState, useRef } from "react";
import "./RPGeneralInfo.scss";
import SelectionOptions from "../SelectionOptions/SelectionOptions";
import SocialWorkerOptions from "../SocialWorkerOptions/SocialWorkerOptions";
import DoctorOptions from "../DoctorOptions/DoctorOptions";
import TeacherOptions from "../TeacherOptions/TeacherOptions";

const vocationOptions = ["social worker", "doctor", "teacher"];

const RPGeneralInfo = () => {
  const [vocation, setVocation] = useState("social worker");
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const renderSelectedOption = () => {
    switch (vocation) {
      case "social worker":
        return <SocialWorkerOptions collectFormInfo={collectFormInfo}/>;
      case "doctor":
        return <DoctorOptions collectFormInfo={collectFormInfo}/>;
      case "teacher":
        return <TeacherOptions collectFormInfo={collectFormInfo}/>;
    }
  };

  const submitInformation = () => {
    // collectFormInfo
    // do stuff with it
  }

  const collectFormInfo = () => {
    const aggregateData = {}
      // spread data from component and add to firstname lastname
      // return object
  }

  return (
    <div className="formContainer">
      <h3 className="formHeader">Who Are You?</h3>
      <div className="nameInputs">
        <input type="text" ref={firstNameRef} placeholder="First Name" />
        <input type="text" ref={lastNameRef} placeholder="Last Name" />
      </div>
      <SelectionOptions
        options={vocationOptions}
        currentOptionSelected={vocation}
        setStateHook={setVocation}
        customStyling="vocationOptions"
      />

      {renderSelectedOption()}

      <button onClick={() => submitInformation()}className="startButton">Start My Adventure</button>
    </div>
  );
};

export default RPGeneralInfo;
