import styles from "./Options.module.css";

function Options({ setTemp }) {
  const optionChangeHandler = (e) => {
    setTemp(Number(e.target.value));
  };
  return (
    <div className={styles.optionsContainer}>
      <span className={styles.creativityDropdown}>
        <select onChange={optionChangeHandler}>
          <option value="0">Not Creative</option>
          <option value="0.5">Somewhat Creative</option>
          <option value="1">Very Creative</option>
        </select>
      </span>
    </div>
  );
}

export default Options;
