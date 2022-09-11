import { Avatar, Badge } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import FormSteps from "../../components/FormSteps/FormSteps";
import FormContainer from "../../components/FromContainer/FormContainer";
import RoundActionButton from "../../components/RoundActionButton/RoundActionButton";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ProfileSetup = () => {
  const uploadHandler = () => {
    document.getElementById("fileUpload").click();
  };
  const [imgSrc, setImgSrc] = React.useState(null);
  return (
    <FormContainer>
      <FormSteps step1 step2 step3 step4 />
      <Row className="d-flex flex-row align-items-center justify-content-end">
        <Col
          xs={12}
          sm={6}
          className="d-flex flex-column flex-sm-row align-items-center justify-content-start mb-3"
        >
          <input
            type="file"
            id="fileUpload"
            value={imgSrc}
            onChange={(e) => setImgSrc(e.target.value)}
            hidden
          />
          <Badge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={
              <RoundActionButton
                aria-label="upload picture"
                size="medium"
                styleCode={{
                  background: "#fff",
                  color: "#252C33",
                }}
              >
                <CameraAltIcon fontSize="medium" onClick={uploadHandler} />
              </RoundActionButton>
            }
          >
            <Avatar
              sx={{
                width: 140,
                height: 140,
              }}
            />
          </Badge>
          <div className="text-left text-sm-left mb-2 mb-sm-0 ms-2">
            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
            <p className="mb-0">@johnny.s</p>
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
