import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
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
import { useDispatch, useSelector } from "react-redux";
import { createEventAction } from "../../../../actions/mentorActions";

const DateChoice = ({ nextStep, schedules }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Title is required").min(3),
    description: yup.string().required("Description is required").min(10),
    date: yup.string().required("Date is required"),
    time: yup.string().required("Time is required"),
  });
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [selectedDate, setSelectedDate] = useState("");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const onSubmit = (data) => {
    const selectedDateObj = new Date(selectedDate);
    const res = schedules.find((schedule) => schedule.day === selectedDate);
    const timeComponents = data?.time.split(":");
    const hour = parseInt(timeComponents[0]);
    const minute = parseInt(timeComponents[1].split(" ")[0]);
    const isPM = timeComponents[1].includes("PM");

    const adjustedHour = isPM
      ? hour === 12
        ? 12
        : hour + 12
      : hour === 12
      ? 0
      : hour;

    const totalMinutes = adjustedHour * 60 + minute;
    const endMinutes = totalMinutes + res?.eventDuration;
    const endHour = Math.floor(endMinutes / 60);
    const endMinute = endMinutes % 60;

    const formattedStart = `${adjustedHour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
    const formattedEnd = `${endHour.toString().padStart(2, "0")}:${endMinute
      .toString()
      .padStart(2, "0")}`;

    const formData = {
      title: data?.title,
      description: data?.description,
      menteeEmail: userInfo?.email,
      mentorId: res?.mentor,
      schedule: res?._id,
      day: selectedDateObj.toISOString(),
      start: formattedStart,
      end: formattedEnd,
    };
    dispatch(createEventAction(formData));
    nextStep();
  };

  const selectedSchedule = schedules.find(
    (schedule) => schedule.day === selectedDate
  );
  const timeSlots = [];

  if (selectedSchedule) {
    const startTime = parseFloat(selectedSchedule.dayStart);
    const endTime = parseFloat(selectedSchedule.dayEnd);
    const eventDuration = selectedSchedule.eventDuration;

    const startMinutes = startTime * 60;
    const endMinutes = endTime * 60;

    let currentMinutes = startMinutes;
    const hours = Math.floor(currentMinutes / 60);
    const minutes = currentMinutes % 60;
    const time = new Date(0, 0, 0, hours, minutes).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    timeSlots.push(time);
    currentMinutes += eventDuration;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 my-6"
    >
      <h5 className="font-[Montserrat] mb-4 text-2xl sm:text-3xl md:text-4xl md:font-semibold text-left">
        Schedule an Event
      </h5>
      <div className="flex flex-col space-y-2">
        <h6 className="font-[Montserrat] mb-4 text-xl sm:text-2xl md:text-3xl md:font-semibold text-left">
          Event Details
        </h6>
        <p className="text-sm tracking-wide text-black my-0">
          What is the title for your meeting
        </p>
        <FormControl className="w-2/3">
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                labelId="title-label"
                variant="outlined"
                id="title"
                error={!!errors.title}
                {...field}
              />
            )}
          />
        </FormControl>
        <p className="text-sm tracking-wide text-black my-0">
          please share anything which can be helpful for our meeting
        </p>
        <FormControl className="w-2/3">
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                labelId="description-label"
                variant="outlined"
                id="description"
                multiline
                rows={5}
                error={!!errors.description}
                {...field}
              />
            )}
          />
        </FormControl>
      </div>
      <h6 className="font-[Montserrat] mb-4 text-xl sm:text-2xl md:text-3xl md:font-semibold text-left">
        Choose the Date
      </h6>
      <p className="text-sm tracking-wide text-black my-0">
        Kindly choose a date and time for your mentoring session
      </p>

      <div className="flex flex-col space-y-2">
        {schedules ? (
          <FormControl className="w-2/3">
            <Select
              labelId="date-label"
              id="date"
              value={selectedDate}
              onChange={(event) => {
                const dateValue = event.target.value;
                setSelectedDate(dateValue);
                // Update the controller's value
                setValue("date", dateValue);
              }}
              error={!!errors.date}
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
      </div>

      {selectedSchedule && (
        <div className="flex flex-col space-y-2">
          <h6 className="font-[Montserrat] mb-4 text-xl sm:text-2xl md:text-3xl md:font-semibold text-left">
            Choose the Time
          </h6>
          <p className="text-sm tracking-wide text-black/80 mb-3">
            * You can aso choose the time for which you will be mentored after
            selecting a date
          </p>
          <div className="flex flex-col space-y-2">
            <FormControl className="w-2/3">
              <InputLabel id="time-label">Time</InputLabel>
              <Controller
                name="time"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    labelId="time-label"
                    id="time"
                    error={!!errors.time}
                    {...field}
                  >
                    {timeSlots.map((time, index) => (
                      <MenuItem key={index} value={time}>
                        {time}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.time && <p>{errors.time.message}</p>}
            </FormControl>
          </div>
        </div>
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
