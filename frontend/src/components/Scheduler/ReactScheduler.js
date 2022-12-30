import * as React from "react";
import "devextreme/dist/css/dx.light.css";
import "./ReactScheduler.scss";
// import { appointments } from "./data.js";
import { Scheduler, View } from "devextreme-react/scheduler";
import { useSelector } from "react-redux";
import moment from "moment";
import getTimeRange from "../Utils/timeRangeCalc";

const ReactScheduler = () => {
  const [currentDate, setCurrentDate] = React.useState(moment());
  const mentorSlots = useSelector((state) => state.mentorSlots);
  const [timeSlots, setTimeSlots] = React.useState([]);
  const [startHour, setStartHour] = React.useState(0);
  const [endHour, setEndHour] = React.useState(0);
  const [minDate, setMinDate] = React.useState("");
  const [maxDate, setMaxDate] = React.useState("");
  const appointments = [
    {
      text: "Planning",
      startDate: moment().format(),
      endDate: moment().format(),
    },
  ];
  const handlePropertyChange = React.useCallback((e) => {
    if (e.name === "currentDate") {
      setCurrentDate(e.value);
    }
  }, []);
  const handleAppointmentChange = (e) => {
    console.log("I am called on both cases", e);
  };
  React.useEffect(() => {
    console.log("Min Date", minDate, "\n", "Max Date ", maxDate);
    if (mentorSlots !== null) {
      const { slots } = mentorSlots;
      setTimeSlots(slots?.timeSlots);
    }
    console.log(timeSlots);
    if (timeSlots?.length > 0) {
      const arr = getTimeRange(timeSlots);
      const difference = arr[arr.length - 1] - arr[0];
      setEndHour(difference);
      setStartHour(arr[0]);
      const dateArr = [];
      timeSlots.forEach((element) => {
        dateArr.push(moment(element?.date).format("YYYY-MM-DD"));
      });
      setMinDate(dateArr[0]);
      setMaxDate(dateArr[dateArr.length - 1]);
    }
  }, [startHour, endHour, minDate, maxDate, timeSlots]);

  return (
    <>
      <Scheduler
        min={minDate}
        max={maxDate}
        dataSource={appointments}
        className="h-[400px]"
        textExpr="title"
        allDayExpr="dayLong"
        recurrenceRuleExpr="recurrence"
        onOptionChanged={handlePropertyChange}
        defaultCurrentView="day"
        adaptivityEnabled={true}
        onAppointmentUpdating={(e) => handleAppointmentChange(e)}
        onAppointmentAdding={(e) => handleAppointmentChange(e)}
      >
        {startHour > 0 ? (
          startHour + 1 >= 24 ? (
            <View type="day" startDayHour={startHour} />
          ) : (
            <View
              type="day"
              startDayHour={startHour}
              endDayHour={startHour > 0 ? startHour + endHour + 1 : 20}
            />
          )
        ) : (
          <View type="day" startDayHour={18} endDayHour={19} />
        )}
        {/* Configuration goes here */}
      </Scheduler>
    </>
  );
};

export default ReactScheduler;
