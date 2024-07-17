import React, { useState } from "react";
import "./Admissionform.css";
import { useForm } from "react-hook-form";
import validate from "../schema/Form";
import Error from "./Error";

const Addteacher = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
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
        <h1>Tracher Registration</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Teacher name"
            {...register("Teacher_name", { required: true })}
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
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
          <input
            type="number"
            placeholder="Phone no."
            {...schema.Phone_number}
          />
        </div>

        <div className="input-box">
          <label style={{ fontSize: "25px" }}>
            Classes :-
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
              <option value="">a to b</option>
              <option value="">b to c</option>
              <option value="">c to d</option>
            </select>
          </label>
        </div>
        <div className="input-box">
          <label style={{ fontSize: "25px" }}>
            Salary :-
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
              <option value="">Salary</option>
              <option value="">Salary</option>
              <option value="">Salary</option>
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
        <div className="input-box">
          <input
            type="submit"
            value={"Confirm"}
            style={{ background: "black", color: "white", fontSize: "25px" }}
          />
        </div>
        <Error errors={errors} />
      </form>
    </div>
  );
};

export default Addteacher;
