import { TextField } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DayChoiceSeperate = ({ prevStep, setTimeSlots }) => {
  const [formValues, setFormValues] = useState([
    { date: moment().format(), time: moment().format() },
  ]);
  const handleChange = (i, e) => {
    // date
    let newFormValues = [...formValues];
    newFormValues[i]["date"] = e?.format(); // Changes the way date is displayed on the field
    newFormValues[i]["time"] = e?.format("LT");
    setFormValues(newFormValues);
  };
  const addFormFields = () => {
    setFormValues([
      ...formValues,
      { date: moment().format(), time: moment().format() },
    ]);
  };

  const removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const timeSlots = [];
    if (formValues.length !== 0) {
      formValues.forEach((element) => {
        timeSlots.push({
          date: moment(element.date).format("L"),
          time: moment(element.date).format("LT"),
        });
      });
    }
    if (timeSlots.length === 0) {
      setTimeSlots(formValues);
    } else {
      setTimeSlots(timeSlots);
    }
  };

  // TODO: add dynamic filed addition for time slots as well
  return (
    <div>
      <Form onSubmit={(e) => onSubmitHandler(e)}>
        {formValues.map((element, index) => (
          <div className="flex flex-col my-4" key={index}>
            <Row className="flex flex-row justify-center items-center">
              <Col xs={10} sm={11}>
                <Row>
                  <Col xs={12} sm={3} className="flex self-center">
                    <Form.Label className="text-gray-800 text-md">
                      Choose Date
                    </Form.Label>
                  </Col>
                  <Col xs={12} sm={9}>
                    <DateTimePicker
                      className="w-[100%]"
                      value={element.date || null}
                      label="Date and Time"
                      onError={console.log}
                      onChange={(value) => handleChange(index, value)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={2} sm={1}>
                {index ? (
                  <button
                    className=" py-1 px-2 border-2 border-white rounded-md bg-red-700 text-white hover:bg-white hover:text-red-700 hover:border-red-700 transition ease-in-out delay-80 xs:mt-[1rem]"
                    onClick={() => removeFormFields(index)}
                  >
                    <i className="fas fa-x"></i>
                  </button>
                ) : null}
              </Col>
            </Row>
          </div>
        ))}
        <div className="button-section">
          <button
            className=" py-1 px-2 border-2 border-gray-800 rounded-md mt-[3rem] bg-orange-300 hover:bg-gray-800 hover:text-white transition ease-in-out delay-80 "
            type="button"
            onClick={() => addFormFields()}
          >
            Add a Date-Time Slot
          </button>
        </div>
        <div className="w-full text-right mb-[2rem]">
          <button
            onClick={() => prevStep()}
            className=" py-1 px-4 border-2 border-gray-800 rounded-md mt-[3rem] bg-orange-300 hover:bg-gray-800 hover:text-white transition ease-in-out delay-80 "
          >
            Previous
          </button>
          <button
            type="submit"
            className="ml-4 py-1 px-4 border-2 border-gray-800 rounded-md mt-[3rem] bg-orange-300 hover:bg-gray-800 hover:text-white transition ease-in-out delay-80 "
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default DayChoiceSeperate;
