import React, { useRef } from "react";
import "./DoctorOptions.scss";

const DoctorOptions = () => {
  const fileRef = useRef();
  return (
    <div className="doctorForm">
      <h3 className="doctorFormHeader">Upload Your Resume</h3>
      <input type="file" ref={fileRef} />
    </div>
  );
};

export default DoctorOptions;
