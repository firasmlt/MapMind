import styles from "./Field.module.css";
import MagicWand from "./UI/MagicWand";

function Field({ text, fieldValues, setFieldValues, isValid }) {
  const onChangeHandler = (e) => {
    setFieldValues((prevValues) => {
      const newObj = { ...prevValues };
      newObj[text] = e.target.value;
      return newObj;
    });
  };
  return (
    <div className={styles.field}>
      <p style={{ color: "rgb(238, 238, 238)" }}>{text} : </p>
      <input type="text" onChange={onChangeHandler} value={fieldValues[text]} />
      <MagicWand isValid={isValid && fieldValues[text].length === 0} />
    </div>
  );
}
export default Field;
