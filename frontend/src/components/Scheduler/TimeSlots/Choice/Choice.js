import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Choice = ({ setChoice, nextStep }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setChoice(value);
    nextStep();
  };
  return (
    <div className="h-screen font-[Montserrat]">
      <div>
        <h2>Choose the Days from</h2>
        <p className="text-sm tracking-wide text-gray-700">
          Kindly choose a if schedule days are to be consecutive
        </p>
        <p className="text-sm tracking-wide text-gray-700">OR</p>
        <p className="text-sm tracking-wide text-gray-700">
          otherwise only select dates you are available for mentoring
        </p>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Select
            name="choice"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option>Chose</option>
            <option value="separate">separate</option>
            <option value="consecutive">consecutive</option>
          </Form.Select>
          <button
            type="submit"
            className=" py-1 px-4 border-2 mt-5 border-gray-800 rounded-md bg-orange-300 hover:bg-gray-800 hover:text-white transition ease-in-out delay-80 "
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Choice;
