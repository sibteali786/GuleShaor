import React, { useState } from "react";
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
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";

const DateRange = () => {
  const schema = Yup.object().shape({
    availability: Yup.string().required("Please select availability option"),
    availableDays: Yup.number().when("availability", {
      is: "days",
      then: Yup.number().required("Please enter the number of available days"),
      otherwise: Yup.number().optional(),
    }),
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
    { label: "For how many days", value: "days" },
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
      availableDays: 0,
      startDate: moment(),
      endDate: moment(),
    },
    resolver: yupResolver(schema),
  });
  const handleDateRangeOption = (e) => {
    if (e.target.value === "days") {
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

    if (data?.availableDays === 0) {
      console.log(data?.availableDays);
      setError("availableDays", {
        type: {
          required: "This is required",
        },
        message: "Please enter the number of available days",
      });
    }
    console.log(data);
  };
  return (
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
          name="availableDays"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Available Days"
              variant="outlined"
              error={!!errors.availableDays}
              helperText={errors.availableDays?.message}
            />
          )}
        />
        <div>
          <Typography>days into the future</Typography>
        </div>
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
        <Grid container spacing={2} className="items-center">
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

      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Grid>
    </Box>
  );
};

export default DateRange;
