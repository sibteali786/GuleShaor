import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateStep1 } from "../../../actions/mentorActions";

const schema = yup.object().shape({
  duration: yup.number().required(),
  location: yup.string().required(),
});

function WhatIsEvent({ nextStep }) {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { touchedFields, errors },
  } = useForm({
    defaultValues: {
      duration: "60",
      location: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    dispatch(updateStep1(data));
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mx-[4rem] p-[2rem] bg-white flex flex-col justify-center border-2 border-gray-600 rounded-sm mb-[2rem]"
    >
      <Box mb={2}>
        <Typography variant="h5">Create Event Type</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
            name="duration"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Duration (minutes)"
                fullWidth
                type="number"
                error={!!errors.duration}
                helperText={errors.duration?.message}
                {...field}
                variant="filled"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="location"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <Select
                  label="Location"
                  fullWidth
                  error={!!errors.location}
                  helperText={errors.location?.message}
                  variant="filled"
                  {...field}
                >
                  <MenuItem value="Google Meet">Google Meet</MenuItem>
                  <MenuItem value="Zoom">Zoom</MenuItem>
                </Select>
                <FormHelperText className="text-red-600">
                  {errors.location?.message}
                </FormHelperText>
              </>
            )}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button
          type="submit"
          variant="outlined"
          className="text-white bg-gray-600 border-gray-800 hover:bg-white hover:text-gray-800 "
        >
          Create
        </Button>
      </Box>
    </form>
  );
}

export default WhatIsEvent;
