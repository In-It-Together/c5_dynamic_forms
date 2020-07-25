import React from "react";

const SelectionOptions = ({
  setStateHook,
  currentOptionSelected,
  options,
  customStyling
}) => {
  return (
    <form className={customStyling}>
      {options.map(option => {
        return (
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value={option}
                checked={currentOptionSelected === option}
                onChange={() => setStateHook(option)}
                className="form-check-input"
              />
              {option}
            </label>
          </div>
        );
      })}
    </form>
  );
};

export default SelectionOptions;
