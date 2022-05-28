import React from "react";

export interface IErrorInputProps {
  text: string;
}

const ErrorInput: React.FC<IErrorInputProps> = ({ text }) => {
  return <span style={{ fontSize: "14px", color: "red" }}>{text}</span>;
};

export default ErrorInput;
