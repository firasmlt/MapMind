import Field from "./Field";
import { useState } from "react";

function Fields() {
  const fieldNames = ["problem", "solution", "persona", "promise"];

  const [fieldValues, setFieldValues] = useState({
    problem: "",
    solution: "",
    persona: "",
    promise: "",
  });
  const [isValid, setIsValid] = useState(false);
  let validFields = [];
  for (const key in fieldValues) {
    if (fieldValues[key].length > 0) {
      validFields.push(key);
    }
  }
  if (validFields.length >= 2 && !isValid) {
    setIsValid(true);
  }
  if (validFields.length < 2 && isValid) {
    setIsValid(false);
  }
  return (
    <div className="fields">
      {fieldNames.map((el, i) => (
        <Field
          key={i}
          isValid={isValid}
          text={el}
          fieldValues={fieldValues}
          setFieldValues={setFieldValues}
        />
      ))}
    </div>
  );
}
export default Fields;
