import React, { useRef } from "react";
import "./TeacherOptions.scss";

const TeacherOptions = () => {
  const classSizeRef = useRef();

  return (
    <form className="teacherForm">
      <h3 className="teacherFormHeader">Enter Your Email</h3>
      <input type="email" id="email" name="email" />
    </form>
  );
};

export default TeacherOptions;
