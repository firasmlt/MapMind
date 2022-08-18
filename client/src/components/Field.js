import styles from "./Field.module.css";
import MagicWand from "./UI/MagicWand";

function Field({ text }) {
  return (
    <div className={styles.field}>
      <p style={{ color: "rgb(238, 238, 238)" }}>{text} : </p>
      <input type="text" />
      <MagicWand />
    </div>
  );
}
export default Field;
