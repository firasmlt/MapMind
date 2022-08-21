import Subtopic from "./Subtopic";
import styles from "./Topic.module.css";
function Topic({ topic, lastIndex }) {
  console.log(topic);
  return (
    <div className={styles.topic}>
      <input type="text" value={topic.name} className={styles.topicInput} />
      {topic.subtopics.map((subtopic, i) => {
        return true ? (
          <Subtopic
            subtopic={subtopic}
            key={i}
            lastIndex={topic.subtopics.length === i + 1}
          />
        ) : (
          <></>
        );
      })}
      {lastIndex ? (
        <input
          type="text"
          placeholder="Add a new Topic"
          className={styles.topicInput}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Topic;
