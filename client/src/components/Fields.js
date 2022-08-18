import Field from "./Field";
import { useState } from "react";

function Fields() {
  const fieldNames = [
    "The Problem",
    "The Solution",
    "The Persona",
    "The Promise",
  ];

  const [fieldValues, setFieldValues] = useState({
    problem: "",
    solution: "",
    persona: "",
    promise: "",
  });
  return (
    <div className="fields">
      {fieldNames.map((el) => (
        <Field text={el} />
      ))}
    </div>
  );
}
export default Fields;
