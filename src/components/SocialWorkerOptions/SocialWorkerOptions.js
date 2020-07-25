import React, { useState } from "react";
import "./SocialWorkerOptions.scss";

const areasOfInterest = [
  "World Hunger",
  "Civil Rights",
  "Education",
  "Wealth Distribution",
  "Environment",
  "Systemic Corruption",
  "Diplomacy",
  "Outreach"
];

const SocialWorkerOptions = () => {
  const generateInitialState = () => {
    let complexState = {};
    areasOfInterest.forEach(area => {
      complexState = { ...complexState, [area]: false };
    });

    return complexState;
  };

  const [checkboxOpts, setCheckboxOpts] = useState(generateInitialState());

  return (
    <form className="socialWorkerForm">
      <div className="socialWorkerFormLS">
        <h3 className="SWBodyHeader">Your Focus</h3>
        {areasOfInterest.map(interest => {
          return (
            <label>
              <input
                className="socialWorkerInput"
                name={interest}
                type="checkbox"
                checked={checkboxOpts[interest]}
                onChange={() =>
                  setCheckboxOpts({
                    ...checkboxOpts,
                    [interest]: !checkboxOpts[interest]
                  })
                }
              />
              <h3 className="SWText">{interest}</h3>
            </label>
          );
        })}
      </div>
      <div className="socialWorkerFormRS">
        <h3 className="SWBodyHeader">About Yourself</h3>
        <textarea
          className="socialWorkerDescription"
          placeholder="Describe yourself here!"
          name="Text1"
        ></textarea>
      </div>
    </form>
  );
};

export default SocialWorkerOptions;
