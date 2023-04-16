import React from "react";
import DateRange from "./DateRange";
import Duration from "./Duration";

const WhenPeopleCanBook = () => {
  const onSubmit = (data) => {
    console.log(data);
    // Call API to update Calendly event type with form data
  };

  return (
    <div className="p-[2rem] bg-white flex flex-col justify-center border-2 border-gray-600 rounded-sm mb-[2rem] divide-y-2">
      <DateRange />
      <Duration />
    </div>
  );
};

export default WhenPeopleCanBook;
