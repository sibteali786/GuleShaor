import * as React from "react";
import "devextreme/dist/css/dx.light.css";
import "./ReactScheduler.scss";
import { appointments } from "./data.js";
import { Editing, Scheduler, View } from "devextreme-react/scheduler";
const ReactScheduler = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date(2021, 4, 25));
  const handlePropertyChange = React.useCallback((e) => {
    if (e.name === "currentDate") {
      setCurrentDate(e.value);
    }
  }, []);
  const handleAppointmentChange = (e) => {
    console.log("I am called on both cases", e);
  };
  return (
    <Scheduler
      dataSource={appointments}
      className="h-[400px]"
      currentDate={currentDate}
      textExpr="title"
      allDayExpr="dayLong"
      recurrenceRuleExpr="recurrence"
      onOptionChanged={handlePropertyChange}
      defaultCurrentView="day"
      adaptivityEnabled={true}
      onAppointmentUpdating={(e) => handleAppointmentChange(e)}
      onAppointmentAdding={(e) => handleAppointmentChange(e)}
    >
      <View type="day" />
      <View type="week" />
      <View type="month" />
      {/* Configuration goes here */}
    </Scheduler>
  );
};

export default ReactScheduler;
