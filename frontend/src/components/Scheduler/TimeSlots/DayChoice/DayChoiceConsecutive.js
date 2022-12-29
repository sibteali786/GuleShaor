import { TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import enumerateDaysBetweenDates from "../../../Utils/dateRangesCalc";
const DayChoiceConsecutive = ({ prevStep, setTimeSlots, nextStep }) => {
  // TODO: add dynamic filed addition for time slots as well
  const [start, setStart] = React.useState(moment().format("L"));
  const [end, setEnd] = React.useState(moment().format("L"));
  const [time, setTime] = useState(moment().format());
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    var timeSlots = [];
    const dates = enumerateDaysBetweenDates(start, end);
    timeSlots.push({
      date: moment(start).format("L"),
      time: moment(time).format("LT"),
    });
    dates.forEach((element) => {
      timeSlots.push({
        date: moment(element).format("L"),
        time: moment(time).format("LT"),
      });
    });
    timeSlots.push({
      date: moment(end).format("L"),
      time: moment(time).format("LT"),
    });
    setTimeSlots(timeSlots);
    nextStep();
  };
  return (
    <div className="h-screen font-[Montserrat]">
      <div>
        <h2>Choose the Date</h2>
        <p className="text-sm tracking-wide text-gray-700 my-0">
          Kindly choose a start date and an end date for your mentoring sessions
        </p>
        <p className="text-sm tracking-wide text-gray-600 mb-3">
          * You can aso choose the time for which you will do mentoring
        </p>
      </div>
      <Form onSubmit={(e) => onSubmitHandler(e)}>
        <div className="bg-white rounded-md border-[1px] border-slate-300 px-4 py-4">
          <Row>
            <Col className="flex flex-col">
              <Form.Label className="text-gray-800 text-md">
                Choose Start Date
              </Form.Label>
              <DatePicker
                openTo="year"
                views={["year", "month", "day"]}
                value={start}
                onChange={(newValue) => {
                  setStart(newValue.format("L"));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Col>
          </Row>

          <Row>
            <Col className="flex flex-col mt-3">
              <Form.Label className="text-gray-800 text-md">
                Choose End Date
              </Form.Label>
              <DatePicker
                openTo="year"
                views={["year", "month", "day"]}
                value={end}
                onChange={(newValue) => {
                  setEnd(newValue.format("L"));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Col>
          </Row>
          <Row>
            <Col className="flex flex-col my-2">
              <Form.Label className="text-gray-800 text-md">
                Choose Time
              </Form.Label>
              <TimePicker
                value={time}
                onChange={(value) => setTime(value.format())}
                renderInput={(params) => <TextField {...params} />}
              />
            </Col>
          </Row>
        </div>

        <div className="w-full text-right">
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

export default DayChoiceConsecutive;
