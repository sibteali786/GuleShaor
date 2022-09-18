import { Avatar, Badge } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import FormSteps from "../../components/FormSteps/FormSteps";
import FormContainer from "../../components/FromContainer/FormContainer";
import RoundActionButton from "../../components/RoundActionButton/RoundActionButton";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { LinkContainer } from "react-router-bootstrap";
import { Alert } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import "./ProfileSetup.scss";
import { FilePond } from "react-filepond";
// Image setup

const ProfileSetup = () => {
  const [files, setFiles] = useState([]);
  const schema = yup.object().shape({
    image: yup
      .mixed()
      .required("Required")
      .test("maxSize", "Image size must be less than 1 MB", (value) => {
        return value?.size < 1024 * 1024 * 1;
      }),
  });
  const form = useForm({
    defaultValues: {
      image: null,
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { touchedFields, errors },
    watch,
  } = form;
  const image = watch("image", null);
  const onFilesUpdate = (e) => {
    const t = new DataTransfer();
    let loadedImage = null;
    if (e.length !== 0 && e[0].file) {
      setFiles(e);
      t.items.add(e[0].file);
      delete t.files[0]["_relativePath"];
      loadedImage = t.files[0];
    } else {
      setFiles([]);
    }
    setValue("image", loadedImage, {
      shouldTouch: true,
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  return (
    <FormContainer>
      <FormSteps step1 step2 step3 step4 />
      <Row className="d-flex flex-row align-items-center justify-content-end">
        <Col
          xs={12}
          sm={6}
          className="d-flex flex-column flex-sm-row align-items-center justify-content-start mb-3"
        >
          <div>
            <FilePond
              {...register("image", { required: true })}
              files={files}
              onupdatefiles={onFilesUpdate}
              imagePreviewHeight={170}
              imageCropAspectRatio="1:1"
              imageResizeTargetWidth={200}
              imageResizeTargetHeight={200}
              stylePanelLayout="compact circle"
              styleLoadIndicatorPosition="center bottom"
              styleButtonRemoveItemPosition="center bottom"
              styleProgressIndicatorPosition="right bottom"
              styleButtonProcessItemPosition="right bottom"
              allowMultiple={false}
              maxFiles={1}
              maxFileSize="1MB"
              name="image"
              credits={false}
              allowFileTypeValidation={true}
              acceptedFileTypes={["image/*"]}
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              className="filepond--root filepond--panel-root"
            />
            {errors.image && (
              <div className="my-2">
                <Alert
                  severity="error"
                  variant="outlined"
                  className="py-0 border-0"
                  style={{ fontSize: "0.8rem" }}
                >
                  {errors.image.message}
                </Alert>
              </div>
            )}
          </div>
          <div className="text-left text-sm-left mb-2 mb-sm-0 ms-2">
            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">Sibteali Baqar</h4>
            <p className="mb-0">@sibteali786</p>
          </div>
        </Col>
        <Col xs={12} sm={6} className="text-end text-sm-right">
          <small className=" text-muted fw-bold">Joined 09 Dec 2017</small>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default ProfileSetup;
