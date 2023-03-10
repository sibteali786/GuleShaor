import React, { useEffect, useState } from "react";
import "./PersonalInfo.scss";
import { Row, Col, Form, FormGroup, InputGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import SubmitButton from "../../SubmitButton/SubmitButton";
import { Controller } from "react-hook-form";
import { Alert, TextField } from "@mui/material";
import { FilePond } from "react-filepond";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../actions/userActions";
import SnakBar from "../../SnakBar/SnakBar";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { setProfileImage } from "../../../actions/imageActions";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import usePersonalInfo from "../../CustomHooks/Mentors/usePersonalInfo";
import MuiPhoneNumber from "material-ui-phone-number";
const PersonalInfo = ({ UserDetails, setUserDetails, nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const userDetails = useSelector((state) => state.userDetails);
  const {
    loading: loadingUserDetails,
    error: errorUserDetails,
    user,
  } = userDetails;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { touchedFields, errors },
    watch,
    control,
  } = usePersonalInfo({
    name: "",
    email: "",
    designation: "",
    userName: "",
    image: null,
    mobile: "",
    dob: moment().format(),
    city: "",
    country: "",
    gender: "",
    company: "",
    userType: user?.mentorDetails ? "mentor" : user?.studentDetails?.userType,
  });
  const name = watch("name", "");
  const email = watch("email", "");
  const city = watch("city", "");
  const country = watch("country", "");
  const gender = watch("gender", "");
  const dob = watch("dob", "");
  const designation = watch("designation", "");
  const company = watch("company", "");
  const userName = watch("userName", "");
  const mobile = watch("mobile", "");
  const userType = user?.mentorDetails
    ? "mentor"
    : user?.studentDetails?.userType;

  // steps state
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const submitHandler = async (data) => {
    // TODO: add submit handler
    const type = user?.mentorDetails
      ? "mentor"
      : user?.studentDetails?.userType;
    UserDetails =
      userType === "mentor"
        ? {
            name: data?.name,
            email: data?.email?.toLowerCase(),
            userDetails: {
              userType: type,
              username: userName,
              image: data?.image,
              designation: data?.designation,
            },
            about: {
              city: data?.city,
              country: data?.country,
              dob: data?.dob,
              gender: data?.gender,
              company: data?.company,
              contact: {
                mobile: data?.mobile,
              },
            },
          }
        : {
            name: data?.name,
            email: data?.email?.toLowerCase(),
            userDetails: {
              userType: type,
              username: userName,
              image: data?.image,
            },
            about: {
              city: data?.city,
              country: data?.country,
              dob: data?.dob,
              gender: data?.gender,
              contact: {
                mobile: data?.mobile,
              },
            },
          };
    dispatch(setProfileImage(data?.image));
    setUserDetails({
      ...UserDetails,
    });

    nextStep();
  };
  // user Details
  // User login info after we visit it here
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    // TODO: if we logout being here we make request to profile which is not there as we have no token so prevent it
    if (!user?.name) {
      dispatch(getUserDetails("profile"));
    } else {
      if (
        UserDetails?.userDetails?.username ||
        UserDetails?.about?.contact?.mobile
      ) {
        setValue("name", UserDetails.name);
        setValue("email", UserDetails.email);
        if (userType === "mentor") {
          setValue("designation", UserDetails?.userDetails?.designation);
          setValue("company", UserDetails?.about?.company);
        }
        setValue("gender", UserDetails?.about?.gender);
        setValue("city", UserDetails?.about?.city);
        setValue("country", UserDetails?.about?.country);
        setValue("dob", UserDetails?.about?.dob);
        setValue("mobile", UserDetails?.about?.contact?.mobile);
        setValue("userName", UserDetails?.userDetails?.username);
      } else if (
        user?.name ||
        user?.about?.username ||
        user?.about?.contact?.mobile ||
        user?.mentorDetails?.designation
      ) {
        setValue("name", user.name);
        setValue("email", user.email);
        setValue("gender", user?.about?.gender);
        if (userType === "mentor") {
          setValue("designation", user?.userDetails?.designation);
          setValue("company", user?.about?.company);
        }
        setValue("city", user?.about?.city);
        setValue("country", user?.about?.country);
        setValue("dob", user?.about?.dob);
        setValue("mobile", user?.about?.contact?.mobile);
        setValue("userName", user?.userDetails?.username);
      }
    }

    if (Object.keys(errors).length !== 0) {
      handleClick();
    }
    if (errors.image) {
      scroll();
    }
  }, [dispatch, userInfo, user, setUserDetails, setValue, UserDetails, errors]);
  const scroll = () => {
    const section = document.querySelector("#imageFile");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <SnakBar
        open={open}
        handleClose={handleClose}
        typeOfAlert="error"
        message="Submission Error"
      />
      <Row className="py-1 px-0 back">
        <Col>
          <Row>
            <Col className="mb-3">
              <Card className="card-settings">
                <Card.Body>
                  <div className="e-profile">
                    <Form onSubmit={handleSubmit(submitHandler)}>
                      <FilePond
                        {...register("image", { required: true })}
                        id="imageFile"
                        allowMultiple={false}
                        name="image"
                        stylePanelLayout="compact circle"
                        imagePreviewHeight={170}
                        imageCropAspectRatio="1:1"
                        imageResizeTargetWidth={150}
                        imageResizeTargetHeight={150}
                        allowFileTypeValidation={true}
                        allowFileSizeValidation={true}
                        maxFileSize="1MB"
                        labelMaxFileSizeExceeded={
                          "File must be lesser than 1MB"
                        }
                        credits={false}
                        className="w-1/2 text-sm"
                        acceptedFileTypes={["image/*", "file/*"]}
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        server={{
                          process: (fieldName, file, metadata, load) => {
                            const imageRef = ref(
                              storage,
                              `profile_pictures/${file.name}`
                            );
                            const metaData = {
                              contentType: file?.type,
                            };
                            uploadBytes(imageRef, file, metaData)
                              .then((response) => {
                                load(JSON.stringify(response.metadata));
                                getDownloadURL(imageRef).then((url) => {
                                  setValue("image", url);
                                  dispatch(setProfileImage(url));
                                });
                              })
                              .catch((error) => {
                                throw new Error(error.message);
                              });
                          },
                        }}
                      />
                      <small className="form-text text-muted">
                        For e.g : Your selfie or passport sized picture etc
                      </small>
                      {errors.image && (
                        <div className="">
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
                      {
                        // TODO: data from backend for given user would go here
                      }
                      <Row>
                        <Col xs={12} sm={6}>
                          <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                            {name}
                          </h4>
                          <p className="mb-0">{userName}</p>
                        </Col>
                        <Col
                          xs={12}
                          sm={6}
                          className="text-end text-sm-right pt-sm-2"
                        >
                          <small className="text-muted fw-bold">
                            {moment().format("DD-MM-YYYY")}
                          </small>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col xs={12} sm={6}>
                              <FormGroup>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                  {...register("name", { required: true })}
                                  name="name"
                                  placeholder="John Smith"
                                />
                                {touchedFields.name && errors.name && (
                                  <div className="">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.name.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                              <FormGroup>
                                <Form.Label>Username</Form.Label>
                                <InputGroup>
                                  <InputGroup.Text id="basic-addon1">
                                    @
                                  </InputGroup.Text>
                                  <Form.Control
                                    {...register("userName", {
                                      required: true,
                                    })}
                                    name="userName"
                                    placeholder="johnny.s"
                                  />
                                </InputGroup>
                                {touchedFields.userName && errors.userName && (
                                  <div className="">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.userName.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={6}>
                              <FormGroup>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  {...register("email", { required: true })}
                                  name="email"
                                  placeholder="user@example.com"
                                ></Form.Control>
                                {touchedFields.email && errors.email && (
                                  <div className="">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.email.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                              <FormGroup className="flex flex-col justify-center">
                                <Form.Label>Phone Number</Form.Label>
                                <Controller
                                  name="mobile"
                                  control={control}
                                  defaultValue=""
                                  render={({ field: { onChange, value } }) => (
                                    <MuiPhoneNumber
                                      name={name}
                                      value={mobile}
                                      onChange={(value) => onChange(value)}
                                      id="contactPhoneNumber"
                                      defaultCountry={"pk"}
                                      variant="outlined"
                                      size="small"
                                      error={Boolean(errors.mobile)}
                                    />
                                  )}
                                />
                                {touchedFields.mobile && errors.mobile && (
                                  <div className="">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.mobile.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={6}>
                              <FormGroup>
                                <Form.Label>Gender</Form.Label>
                                <Form.Select
                                  aria-label="Mentor"
                                  {...register("gender", { required: true })}
                                  name="gender"
                                  value={gender}
                                  size="md"
                                >
                                  <option>Choose a Gender</option>
                                  <option value="mentor">Male</option>
                                  <option value="student">Female</option>
                                  <option value="student">Other</option>
                                </Form.Select>
                                {touchedFields.gender && errors.gender && (
                                  <div className="">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.gender.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                              <FormGroup className="flex flex-col justify-center">
                                <Form.Label className="my-0">
                                  Date of Birth
                                </Form.Label>
                                <Controller
                                  name="dob"
                                  control={control}
                                  defaultValue={null}
                                  render={({
                                    field: { onChange, value },
                                    fieldState: { error, invalid },
                                  }) => (
                                    <DatePicker
                                      disableFuture
                                      value={dob}
                                      onChange={(value) =>
                                        onChange(
                                          moment(value).format("YYYY-MM-DD")
                                        )
                                      }
                                      renderInput={(params) => (
                                        <TextField
                                          size="small"
                                          {...register("dob", {
                                            required: true,
                                          })}
                                          error={invalid}
                                          helperText={
                                            invalid ? error.message : null
                                          }
                                          id="dob"
                                          margin="dense"
                                          color="primary"
                                          autoComplete="bday"
                                          {...params}
                                        />
                                      )}
                                    />
                                  )}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={6}>
                              <FormGroup>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                  {...register("city", {
                                    required: true,
                                  })}
                                  placeholder="Karachi"
                                  name="city"
                                />
                                {touchedFields.city && errors.city && (
                                  <div className="">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.city.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                              <FormGroup>
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                  {...register("country", {
                                    required: true,
                                  })}
                                  placeholder="Pakistan"
                                  name="country"
                                />
                                {touchedFields.country && errors.country && (
                                  <div className="">
                                    <Alert
                                      severity="error"
                                      variant="outlined"
                                      className="py-0 border-0"
                                    >
                                      {errors.country.message}
                                    </Alert>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row></Row>
                          {userType === "mentor" ? (
                            <Row>
                              <Col xs={12} sm={6}>
                                <FormGroup>
                                  <Form.Label>Current Job Title</Form.Label>
                                  <Form.Control
                                    {...register("designation", {
                                      required: true,
                                    })}
                                    name="designation"
                                    placeholder="Software Engineer"
                                  ></Form.Control>
                                  {touchedFields.designation &&
                                    errors.designation && (
                                      <div className="">
                                        <Alert
                                          severity="error"
                                          variant="outlined"
                                          className="py-0 border-0"
                                        >
                                          {errors.designation.message}
                                        </Alert>
                                      </div>
                                    )}
                                </FormGroup>
                              </Col>
                              <Col xs={6}>
                                <FormGroup>
                                  <Form.Label>Company</Form.Label>
                                  <Form.Control
                                    {...register("company", {
                                      required: true,
                                    })}
                                    name="company"
                                  />
                                  {touchedFields.company && errors.company && (
                                    <div className="">
                                      <Alert
                                        severity="error"
                                        variant="outlined"
                                        className="py-0 border-0"
                                      >
                                        {errors.company.message}
                                      </Alert>
                                    </div>
                                  )}
                                </FormGroup>
                              </Col>
                            </Row>
                          ) : null}
                        </Col>
                      </Row>

                      <div className="col d-flex justify-content-end mt-5">
                        <SubmitButton
                          variant="outlined"
                          type="submit"
                          onClick={() => {
                            setValue("name", name, { shouldTouch: true });
                            setValue("email", email.toLowerCase(), {
                              shouldTouch: true,
                            });
                            setValue("userName", userName, {
                              shouldTouch: true,
                            });
                            setValue("designation", designation, {
                              shouldTouch: true,
                            });
                            setValue("dob", dob, { shouldTouch: true });
                            setValue("mobile", mobile, { shouldTouch: true });
                            setValue("city", city, { shouldTouch: true });
                            setValue("gender", gender, { shouldTouch: true });
                            setValue("country", country, { shouldTouch: true });
                            setValue("company", company, { shouldTouch: true });
                          }}
                        >
                          Submit
                        </SubmitButton>
                      </div>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PersonalInfo;
