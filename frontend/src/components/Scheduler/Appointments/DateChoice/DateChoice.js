import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

const DateChoice = ({ nextStep, schedules }) => {
  const schema = yup.object().shape({
    date: yup.string().required("Date is required"),
    time: yup.string().required("Time is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  console.log(errors);
  const onSubmit = (data) => {
    const selectedDateObj = new Date(selectedDate);
    const formData = {
      ...data,
      date: selectedDateObj.toISOString(),
    };
    console.log(formData);
  };

  const selectedSchedule = schedules.find(
    (schedule) => schedule.day === selectedDate
  );
  const timeSlots = [];

  if (selectedSchedule) {
    const startTime = parseFloat(selectedSchedule.dayStart);
    const endTime = parseFloat(selectedSchedule.dayEnd);
    const eventDuration = selectedSchedule.eventDuration / 60;

    for (let i = startTime; i <= endTime; i += eventDuration) {
      timeSlots.push(i.toFixed(1));
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 my-6"
    >
      <h5 className="font-[Montserrat] mb-4 text-2xl sm:text-3xl md:text-4xl md:font-semibold text-left">
        Choose from the given set of Dates
      </h5>
      {schedules ? (
        <FormControl className="w-2/3">
          <InputLabel id="date-label">Date</InputLabel>
          <Select
            labelId="date-label"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            {...register("date")}
            error={!!errors.date}
            defaultValue=""
          >
            {schedules.map((schedule, index) => (
              <MenuItem key={index} value={schedule.day}>
                {new Date(schedule.day).toLocaleDateString()}
              </MenuItem>
            ))}
          </Select>
          {errors.date && <p>{errors.date.message}</p>}
        </FormControl>
      ) : null}

      {selectedSchedule && (
        <FormControl className="w-2/3">
          <InputLabel id="time-label">Time</InputLabel>
          <Select
            labelId="time-label"
            id="time"
            {...register("time")}
            error={!!errors.time}
            defaultValue=""
          >
            {timeSlots.map((time, index) => (
              <MenuItem key={index} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
          {errors.time && <p>{errors.time.message}</p>}
        </FormControl>
      )}

      <Button
        type="submit"
        variant="contained"
        className="text-black bg-orange-300 hover:bg-orange-400 rounded-full w-1/6 mt-6"
      >
        Submit
      </Button>
    </form>
  );
};

export default DateChoice;
