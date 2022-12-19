import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTimeslots } from "../../../actions/mentorActions";
import FormSteps from "../../MutliStepForms/FormSteps/FormSteps";
import FormContainer from "../../MutliStepForms/FromContainer/FormContainer";
import Choice from "./Choice/Choice";
import DayChoiceConsecutive from "./DayChoice/DayChoiceConsecutive";
import DayChoice from "./DayChoice/DayChoiceConsecutive";
import DayChoiceSeperate from "./DayChoice/DayChoiceSeperate";

const MultiStepTimeSlots = () => {
  const [step, setStep] = React.useState(1);
  const { mentor } = useSelector((state) => state.mentorDetail);
  const dispatch = useDispatch();
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const stepsArray = [
    { name: "Day Choice", to: "/daychoice" },
    { name: "Date and Time Slots", to: "/days" },
  ];
  const [choice, setChoice] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  useEffect(() => {
    if (choice === "consecutive") {
      dispatch(addTimeslots("consecutive", mentor?._id, timeSlots));
    } else {
      dispatch(addTimeslots("separate", mentor?._id, timeSlots));
    }
  }, [choice, timeSlots, dispatch]);

  return (
    <div>
      <FormContainer>
        <FormSteps step={step} stepsArray={stepsArray} />
        {step === 1 && <Choice nextStep={nextStep} setChoice={setChoice} />}
        {step === 2 &&
          (choice === "consecutive" ? (
            <DayChoiceConsecutive
              prevStep={prevStep}
              nextStep={nextStep}
              setTimeSlots={setTimeSlots}
            />
          ) : (
            <DayChoiceSeperate
              prevStep={prevStep}
              nextStep={nextStep}
              setTimeSlots={setTimeSlots}
            />
          ))}
      </FormContainer>
    </div>
  );
};

export default MultiStepTimeSlots;
