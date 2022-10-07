import React, { useEffect, useState } from "react";
import Signup from "../../Pages/SignUp/Signup";
import FormSteps from "./FormSteps/FormSteps";
import FormContainer from "./FromContainer/FormContainer";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProfileSetup from "./ProfileSetup/ProfileSetup";
import QualificationForm from "./Qualification/QualificationForm";
import { useDispatch, useSelector } from "react-redux";
const MultiStepForm = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const [step, setStep] = React.useState(1);
  const [UserDetails, setUserDetails] = useState({});
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  useEffect(() => {
    if (userInfo) {
      setStep(2);
    }
  }, [userInfo]);
  console.log(UserDetails);
  return (
    <FormContainer>
      <FormSteps step={step} />
      {step === 1 && (
        <Signup
          nextStep={nextStep}
          UserDetails={UserDetails}
          setUserDetails={setUserDetails}
        />
      )}
      {step === 2 && (
        <PersonalInfo
          nextStep={nextStep}
          prevStep={prevStep}
          UserDetails={UserDetails}
          setUserDetails={setUserDetails}
        />
      )}
      {step === 3 && (
        <QualificationForm nextStep={nextStep} prevStep={prevStep} />
      )}
      {step === 4 && <ProfileSetup nextStep={nextStep} prevStep={prevStep} />}
    </FormContainer>
  );
};

export default MultiStepForm;
