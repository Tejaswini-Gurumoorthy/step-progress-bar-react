import React from "react";
import "../App.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === "pageone") {
    stepPercentage = 0;
  } else if (page === "pagetwo") {
    stepPercentage = 25;
  } else if (page === "pagethree") {
    stepPercentage = 50;
  } else if (page === "pagefour") {
    stepPercentage = 75;
  } else if (page === "pagefive") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <div className="progress-bar-wrapper">
      <ProgressBar percent={stepPercentage}>
        <Step>
          {({ accomplished }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null} stepper-item`}
              onClick={() => onPageNumberClick("1")}
            >
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null} stepper-item`}
              onClick={() => onPageNumberClick("2")}
            >
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null} stepper-item`}
              onClick={() => onPageNumberClick("3")}
            >
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null} stepper-item`}
              onClick={() => onPageNumberClick("4")}
            >
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : null} stepper-item`}
              onClick={() => onPageNumberClick("5")}
            >
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
            </div>
          )}
        </Step>
      </ProgressBar>
      <div className="progress-bar-headings-wrapper">
        <div className="progress-bar-headings">Pet Owner Details</div>
        <div className="progress-bar-headings">Pet Information</div>
        <div className="progress-bar-headings">Pet Proof</div>
        <div className="progress-bar-headings">Pet Medical Records</div>
        <div className="progress-bar-headings">Terms and Conditions</div>
      </div>
    </div>
  );
};

export default MultiStepProgressBar;
