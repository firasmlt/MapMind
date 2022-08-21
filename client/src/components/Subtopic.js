import styles from "./Subtopic.module.css";

function Subtopic({ subtopic, lastIndex }) {
  console.log(subtopic);
  return (
    <div className={styles.subtopic}>
      <input type="text" value={subtopic} className={styles.subtopicInput} />
      {lastIndex ? (
        <input
          type="text"
          placeholder="Add a new SubTopic"
          className={styles.subtopicInput}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Subtopic;
