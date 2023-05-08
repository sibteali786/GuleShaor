import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormSteps from "../../MutliStepForms/FormSteps/FormSteps";
import FormContainer from "../../MutliStepForms/FromContainer/FormContainer";
import Success from "./SuccessPage/Success";
import WhatIsEvent from "../CreateEvent/WhatIsEvent";
import WhenPeopleCanBook from "../CreateEvent/WhenPeopleCanBook";
import {
  schedulerAddAction,
  schedulerAddReducer,
} from "../../../actions/mentorActions";

const MultiStepTimeSlots = () => {
  const [step, setStep] = React.useState(1);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const availabilityData = useSelector((state) => state.availabilityData);
  console.log(userInfo);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const stepsArray = [
    { name: "What is Event", to: "/info" },
    { name: "When people can book", to: "/details" },
  ];
  useEffect(() => {
    if (availabilityData && step === 3) {
      dispatch(schedulerAddAction(availabilityData));
    }
  });

  return (
    <div>
      <FormContainer>
        <FormSteps step={step} stepsArray={stepsArray} />
        {step === 1 && <WhatIsEvent nextStep={nextStep} />}
        {step === 2 && (
          <WhenPeopleCanBook nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 3 && <Success id={userInfo?._id} />}
      </FormContainer>
    </div>
  );
};

export default MultiStepTimeSlots;
