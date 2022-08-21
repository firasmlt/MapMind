import styles from "./Subtopic.module.css";

function Subtopic({ subtopic, addSubtopicInput }) {
  return (
    <div className={styles.subtopic}>
      {subtopic !== null ? (
        <input
          type="text"
          defaultValue={subtopic}
          className={styles.subtopicInput}
        />
      ) : (
        <></>
      )}
      {addSubtopicInput ? (
        <input
          type="text"
          placeholder="Add a new SubTopic"
          className={`${styles.subtopicInput} ${styles.addsubtopicInput}`}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Subtopic;
