import styles from "./Subtopic.module.css";

function Subtopic({ subtopic }) {
  console.log(subtopic);
  return (
    <div className={styles.subtopic}>
      <input type="text" value={subtopic} className={styles.subtopicInput} />
    </div>
  );
}

export default Subtopic;
