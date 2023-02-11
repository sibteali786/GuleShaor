import React, { useEffect, useState } from "react";
import Signup from "../../Pages/SignUp/Signup";
import FormSteps from "./FormSteps/FormSteps";
import FormContainer from "./FromContainer/FormContainer";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProfileSetup from "./ProfileSetup/ProfileSetup";
import QualificationForm from "./Qualification/QualificationForm";
import { useDispatch, useSelector } from "react-redux";
import SuccessPage from "./SuccessPage/SuccessPage";

// TODO: when user already exists should not move to next screen
const MultiStepForm = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const [step, setStep] = React.useState(4);
  const [UserDetails, setUserDetails] = useState({});
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  useEffect(() => {
    if (step === 5) {
      setStep(5);
    } else if (step === 4 || UserDetails?.about?.technical) {
      setStep(4);
    } else if (UserDetails?.about?.education?.length > 0 || step === 3) {
      setStep(3);
    } else if (userInfo || step === 2) {
      setStep(2);
    }
  }, [userInfo, UserDetails, step]);
  const stepsArray = [
    { name: "Sign Up", to: "/signup" },
    { name: "Personal Info", to: "/personalinfo" },
    { name: "Qualification", to: "/qualification" },
    { name: "Profile Setup", to: "/profileSetup" },
    { name: "Success", to: "/success" },
  ];
  return (
    <FormContainer>
      <FormSteps step={step} stepsArray={stepsArray} />
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
        <QualificationForm
          nextStep={nextStep}
          prevStep={prevStep}
          UserDetails={UserDetails}
          setUserDetails={setUserDetails}
        />
      )}
      {step === 4 && (
        <ProfileSetup
          nextStep={nextStep}
          prevStep={prevStep}
          UserDetails={UserDetails}
          setUserDetails={setUserDetails}
        />
      )}
      {step === 5 && (
        <SuccessPage
          nextStep={nextStep}
          prevStep={prevStep}
          UserDetails={UserDetails}
          setUserDetails={setUserDetails}
        />
      )}
    </FormContainer>
  );
};

export default MultiStepForm;
