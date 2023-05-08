import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { updateStep2 } from "../../../actions/mentorActions";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import moment from "moment";
const WhenPeopleCanBook = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const timeSchema = Yup.date()
    .optional()
    .typeError("Invalid time format")
    .test("is-valid-time", "Invalid time format", (value) => {
      // Check if value is a valid Date object

      if (!(value instanceof Date && !isNaN(value)) && value !== "00:00") {
        return false;
      }

      // Check if hours and minutes are within the valid range
      const hours = value.getHours();
      const minutes = value.getMinutes();
      return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
    });
  const schema = Yup.object().shape({
    availability: Yup.string().required("Please select availability option"),
    date: Yup.date().when("availability", {
      is: "day",
      then: Yup.date().required("Please enter a valid date"),
      otherwise: Yup.date().optional(),
    }),
    dayStart: timeSchema,
    dayEnd: timeSchema,
    dateRangeOption: Yup.string().optional("Please select date range option"),
    startDate: Yup.date().when("availability", {
      is: "range",
      then: Yup.date().required("Please select a start date"),
      otherwise: Yup.date().optional(),
    }),
    endDate: Yup.date().when("availability", {
      is: "range",
      then: Yup.date()
        .min(
          Yup.ref("startDate"),
          "End date should be greater than or equal to start date"
        )
        .required("Please select an end date"),
      otherwise: Yup.date().optional(),
    }),
  });

  const availabilityOptions = [
    { label: "Select a Date", value: "day" },
    { label: "Within a date range", value: "range" },
  ];

  const dateRangeOptions = [
    { label: "Include weekends", value: "includeWeekends" },
    { label: "Exclude weekends", value: "excludeWeekends" },
  ];
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      availability: "",
      dateRangeOption: "",
      date: moment(),
      dayStart: "00:00",
      dayEnd: "00:00",
      startDate: moment(),
      endDate: moment(),
    },
    resolver: yupResolver(schema),
  });
  const handleDateRangeOption = (e) => {
    if (e.target.value === "day") {
      document.getElementById("days").classList.add("block");
      document.getElementById("days").classList.remove("hidden");
      document.getElementById("range").style.display = "none";
    } else if (e.target.value === "range") {
      document.getElementById("days").classList.add("hidden");
      document.getElementById("days").classList.remove("block");
      document.getElementById("range").style.display = "block";
    }
  };

  const onSubmit = (data) => {
    // TODO: Decide on basis of availability type to set which errors
    if (moment(data?.startDate).diff(data?.endDate) === 0) {
      setError("endDate", {
        type: {
          required: "This is required",
        },
        message: "End date should be greater than or equal to start date",
      });
    }

    if (data?.date === moment()) {
      setError("date", {
        type: {
          required: "This is required",
        },
        message: "Please enter the number of available days",
      });
    }

    const hours = data?.dayStart.getHours().toString().padStart(2, "0");
    const minutes = data?.dayStart.getMinutes().toString().padStart(2, "0");
    const hours_2 = data?.dayEnd.getHours().toString().padStart(2, "0");
    const minutes_2 = data?.dayEnd.getMinutes().toString().padStart(2, "0");
    data.dayStart = `${hours}:${minutes}`;
    data.dayEnd = `${hours_2}:${minutes_2}`;
    data.date = moment(data?.date).toISOString(true);
    data.startDate = moment(data?.startDate).toISOString(true);
    data.endDate = moment(data?.endDate).toISOString(true);
    console.log("WhenPeopleCanBook", data);
    dispatch(updateStep2(data));
    nextStep();
  };

  return (
    <div className="p-[2rem] bg-white flex flex-col justify-center border-2 border-gray-600 rounded-sm mb-[2rem] divide-y-2 space-y-4">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="py-[1rem] space-y-2"
      >
        <Grid item xs={12}>
          <Typography variant="h6">When People can book this event</Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="availability"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl
                component="fieldset"
                error={!!errors.availability}
                onChange={(e) => handleDateRangeOption(e)}
              >
                <FormLabel
                  component="legend"
                  className="text-lg md:text-xl font-semibold"
                >
                  Date Range
                </FormLabel>
                <RadioGroup row {...field}>
                  {availabilityOptions.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
                {errors.availability && (
                  <Typography color="error" variant="subtitle2">
                    {errors.availability.message}
                  </Typography>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid
          item
          xs={12}
          id="days"
          style={{ display: "block" }}
          className="flex items-center space-x-4"
        >
          <Controller
            name="date"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Date"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={!!errors.date}
                    helperText={errors.date?.message}
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} id="range" style={{ display: "none" }}>
          <div className="my-2">
            <Controller
              name="dateRangeOption"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormControl
                  component="fieldset"
                  error={!!errors.dateRangeOption}
                >
                  <FormLabel component="legend">
                    {`Date Range (${
                      field.value === "includeWeekends"
                        ? "including"
                        : "excluding"
                    } weekends)`}
                  </FormLabel>
                  <Select {...field}>
                    {dateRangeOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.dateRangeOption && (
                    <Typography color="error" variant="subtitle2">
                      {errors.dateRangeOption.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />
          </div>
          <Grid container spacing={2} className="items-center my-2">
            <Grid item xs={12} md={5}>
              <Controller
                name="startDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    label="Start Date"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        error={!!errors.startDate}
                        helperText={errors.startDate?.message}
                      />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" align="center">
                to
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Controller
                name="endDate"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    label="End Date"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        error={!!errors.endDate}
                        helperText={errors.endDate?.message}
                      />
                    )}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="items-center my-2">
          <Grid item xs={12} sm={6}>
            <Controller
              name="dayStart"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <TimePicker
                  {...field}
                  label="DayStart"
                  inputFormat="hh:mm"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      error={!!errors.dayStart}
                      helperText={errors.dayStart?.message}
                    />
                  )}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="dayEnd"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <TimePicker
                  {...field}
                  label="DayEnd"
                  inputFormat="hh:mm"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      error={!!errors.dayEnd}
                      helperText={errors.dayEnd?.message}
                    />
                  )}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} className="space-x-4">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => prevStep()}
          >
            Go Back
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default WhenPeopleCanBook;
