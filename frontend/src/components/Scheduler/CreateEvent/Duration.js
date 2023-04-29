import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button,
  FormLabel,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  duration: yup.string().required(),
  hours: yup.number().when("duration", {
    is: "custom",
    then: yup.number().required(),
    otherwise: yup.number().nullable(),
  }),
  minutes: yup.number().when("duration", {
    is: "custom",
    then: yup.number().required(),
    otherwise: yup.number().nullable(),
  }),
  durationType: yup.string().required(),
});

const durations = [
  { value: "15", label: "15 min" },
  { value: "30", label: "30 min" },
  { value: "45", label: "45 min" },
  { value: "60", label: "60 min" },
  { value: "custom", label: "Custom" },
];

function Duration() {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [showCustomFields, setShowCustomFields] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  const options = [
    { value: "hrs", label: "hours" },
    { value: "min", label: "minutes" },
  ];
  const handleDurationChange = (event) => {
    const showCustom = event.target.value === "custom";
    setShowCustomFields(showCustom);
  };

  const handleDurationOptionChange = (event) => {
    const showCustom = event.target.value === "custom";
    setShowCustomFields(showCustom);
  };
  const durationType = watch("durationType");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Typography
        component="legend"
        className="text-lg md:text-xl font-semibold"
      >
        Duration
      </Typography>
      <FormControl fullWidth margin="normal" className="my-0">
        <Select
          labelId="duration-label"
          id="duration"
          {...register("duration")}
          control={control}
          onChange={handleDurationChange}
        >
          {durations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {errors.duration && <span>{errors.duration.message}</span>}
      </FormControl>

      {showCustomFields && (
        <>
          <div className="grid grid-cols-3 space-x-2">
            {durationType === "min" ? (
              <FormControl margin="normal" className="col-span-2 my-0">
                <TextField
                  className="focus:border-transparent focus:outline-offset-0"
                  label="Minutes"
                  {...register("minutes")}
                  control={control}
                  type="number"
                  inputProps={{ min: 0 }}
                />
                {errors.minutes && <span>{errors.minutes.message}</span>}
              </FormControl>
            ) : (
              <FormControl margin="normal" className="col-span-2 my-0">
                <TextField
                  label="Hours"
                  {...register("hours")}
                  control={control}
                  type="number"
                  inputProps={{ min: 0 }}
                />
                {errors.hours && <span>{errors.hours.message}</span>}
              </FormControl>
            )}
            <FormControl margin="normal" className="my-0">
              <Select
                labelId="duration-type-label"
                id="durationType"
                {...register("durationType")}
                control={control}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {errors.durationType && (
                <span>{errors.durationType.message}</span>
              )}
            </FormControl>
          </div>
        </>
      )}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default Duration;
