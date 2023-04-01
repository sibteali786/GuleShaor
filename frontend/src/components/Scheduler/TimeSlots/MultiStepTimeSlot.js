import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTimeslots } from "../../../actions/mentorActions";
import FormSteps from "../../MutliStepForms/FormSteps/FormSteps";
import FormContainer from "../../MutliStepForms/FromContainer/FormContainer";
import Choice from "./Choice/Choice";
import DayChoiceConsecutive from "./DayChoice/DayChoiceConsecutive";
import DayChoiceSeperate from "./DayChoice/DayChoiceSeperate";
import Success from "./SuccessPage/Success";
import WhatIsEvent from "../CreateEvent/WhatIsEvent";
import WhenPeopleCanBook from "../CreateEvent/WhenPeopleCanBook";

const MultiStepTimeSlots = () => {
  const [step, setStep] = React.useState(2);
  const userInfo = useSelector((state) => state?.userLogin?.userInfo);
  const dispatch = useDispatch();
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

  return (
    <div>
      <FormContainer>
        <FormSteps step={step} stepsArray={stepsArray} />
        {step === 1 && <WhatIsEvent nextStep={nextStep} />}
        {step === 2 && <WhenPeopleCanBook nextStep={nextStep} />}
        {step === 3 && <Success id={userInfo?._id} />}
      </FormContainer>
    </div>
  );
};

export default MultiStepTimeSlots;
