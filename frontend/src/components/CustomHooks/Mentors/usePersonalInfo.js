import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import { useForm } from "react-hook-form";
import mentorSchema from "../../Resolvers/Menotors/personalInfo";
import studentSchema from "../../Resolvers/Students/personalInfo";

function usePersonalInfo(props) {
  const form = useForm({
    defaultValues: {
      ...props,
    },
    mode: "all",
    resolver: yupResolver(
      props?.userType === "mentor" ? mentorSchema : studentSchema
    ),
  });
  return form;
}

export default usePersonalInfo;
