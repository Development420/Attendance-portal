import React from "react";

const Error = ({ errors }) => {
  const data = errors && Object.keys(errors);
  const key = data[0];

  if (key) {
    if (errors[key].type === "maxLength") {
      return <Message error={`*${key} length is 12`} />;
    }
    if (errors[key].type === "minLength") {
      return <Message error={`*${key} length is 10`} />;
    }
    if (errors[key].type === "max") {
      return <Message error={`*${key} is not valid`} />;
    }
    if (errors[key].type === "min") {
      return <Message error={`*${key} is not valid`} />;
    }
  }
  return null;
};

export default Error;
const Message = ({ error }) => {
  return <p style={{ color: "red", fontSize: "20px" }}>{error}</p>;
};
