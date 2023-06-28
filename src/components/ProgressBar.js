import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ProgressBar() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const getPageContent = () => {
    switch (activeStep) {
      case 1:
        return <div>Page 1</div>;
      case 2:
        return <div>Page 2</div>;
      case 3:
        return <div>Page 3</div>;
      case 4:
        return <div>Page 4</div>;
      case 5:
        return <div>Page 5</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="stepper-wrapper">
        <div className={`stepper-item ${activeStep === 1 ? 'active' : 'completed'}`}>
          {activeStep === 1 ? (
            <FontAwesomeIcon icon={faCheck} className="check-icon step-counter" />
          ) : (
            <div className="step-counter">1</div>
          )}
          <div className="step-name progress-bar-headings">Pet Owner Details</div>
        </div>
        <div className={`stepper-item ${activeStep === 2 ? 'active' : (activeStep > 2 ? 'completed' : '')}`}>
          {activeStep === 2 ? (
            <div className="step-counter">2</div>
          ) : (
            <FontAwesomeIcon icon={faCheck} className="check-icon step-counter" />
          )}
          <div className="step-name progress-bar-headings">Pet Information</div>
        </div>
        <div className={`stepper-item ${activeStep === 3 ? 'active' : (activeStep > 3 ? 'completed' : '')}`}>
          {activeStep === 3 ? (
            <div className="step-counter">3</div>
          ) : (
            <FontAwesomeIcon icon={faCheck} className="check-icon step-counter" />
          )}
          <div className="step-name progress-bar-headings">Pet Proof</div>
        </div>
        <div className={`stepper-item ${activeStep === 4 ? 'active' : (activeStep > 4 ? 'completed' : '')}`}>
          {activeStep === 4 ? (
            <div className="step-counter">4</div>
          ) : (
            <FontAwesomeIcon icon={faCheck} className="check-icon step-counter" />
          )}
          <div className="step-name progress-bar-headings">Pet Medical Records</div>
        </div>
        <div className={`stepper-item ${activeStep === 5 ? 'active' : (activeStep > 5 ? 'completed' : '')}`}>
          {activeStep === 5 ? (
            <div className="step-counter">5</div>
          ) : (
            <FontAwesomeIcon icon={faCheck} className="check-icon step-counter" />
          )}
          <div className="step-name progress-bar-headings">Terms and Conditions</div>
        </div>
      </div>
      {getPageContent()}
      {activeStep !== 5 && <button onClick={handleNext}>Next</button>}
    </div>
  );
}

export default ProgressBar;
