import { useForm } from "react-hook-form";
import "./Admissionform.css";

import React, { useState } from "react";
import Error from "./Error";
import validate from "../schema/Form";

const Admissionform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const schema = validate(register);
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  console.log(errors?.message);

  const [selectedvalue, setSelectedvalue] = useState("option1");
  const handleRadioChange = (value) => {
    setSelectedvalue(value);
  };
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Admission form</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Student name"
            {...register("Student_name", { required: true })}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Father's name"
            {...register("Father_name", { required: true })}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Mother's name"
            {...register("Mother_name", { required: true })}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Address"
            {...register("Address", { required: true })}
          />
        </div>
        <div className="input-box">
          <input type="number" placeholder="+91" {...schema.Phone_number} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Age" {...schema.age} />
        </div>
        <div className="input-box">
          <label style={{ fontSize: "25px" }}>
            Class :-
            <select
              style={{
                height: "100%",
                width: "100%",
                fontSize: "20px",
                border: "2px solid gray",
                background: "transparent",
                borderRadius: "20px",
              }}
            >
              <option value="">Class</option>
              <option value="">Class</option>
              <option value="">Class</option>
            </select>
          </label>
        </div>
        <div>
          <label style={{ fontSize: "30px" }}>Gender :- </label>
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedvalue === "option1"}
            onChange={() => handleRadioChange("option1")}
          />
          <label htmlFor="option1">Male</label>
          <input
            type="radio"
            id="option2"
            value="option2"
            checked={selectedvalue === "option2"}
            onChange={() => handleRadioChange("option2")}
          />
          <label htmlFor="option2">Female</label>
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedvalue === "option3"}
            onChange={() => handleRadioChange("option3")}
          />
          <label htmlFor="option3"> Other </label>
        </div>
        <Error errors={errors} />
        <div className="input-box">
          <input
            type="submit"
            style={{ background: "black", color: "white", fontSize: "25px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Admissionform;
