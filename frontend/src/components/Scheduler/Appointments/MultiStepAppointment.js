import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAppointmentAction } from "../../../actions/mentorActions";
import FormSteps from "../../MutliStepForms/FormSteps/FormSteps";
import FormContainer from "../../MutliStepForms/FromContainer/FormContainer";
import DateChoice from "./DateChoice/DateChoice";
import Success from "./SuccessPage/SuccessPage";

const MultiStepAppointment = () => {
  const [step, setStep] = React.useState(1);
  const userInfo = useSelector((state) => state?.userLogin?.userInfo);
  const dispatch = useDispatch();
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const stepsArray = [
    { name: "Date Choice", to: "/datechoice" },
    { name: "Details", to: "/appointmentdetails" },
  ];
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    console.log(appointment);
    if (appointment.length > 0) {
      dispatch(addAppointmentAction(appointment));
    }
  }, [appointment, dispatch]);

  return (
    <div>
      <FormContainer>
        <FormSteps step={step} stepsArray={stepsArray} />
        {step === 1 && <DateChoice nextStep={nextStep} />}
        //{" "}
        {
          // step === 2 &&
          //   (choice === "consecutive" ? (
          //     <DayChoiceConsecutive
          //       prevStep={prevStep}
          //       nextStep={nextStep}
          //       setTimeSlots={setTimeSlots}
          //     />
          //   ) : (
          //     <DayChoiceSeperate
          //       prevStep={prevStep}
          //       nextStep={nextStep}
          //       setTimeSlots={setTimeSlots}
          //     />
          //   ))
        }
        {step === 3 && <Success id={userInfo?._id} />}
      </FormContainer>
    </div>
  );
};

export default MultiStepAppointment;
