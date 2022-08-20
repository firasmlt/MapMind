import Subtopic from "./Subtopic";
import styles from "./Topic.module.css";
function Topic({ topic, key }) {
  console.log(topic, key);
  return (
    <div className={styles.topic}>
      <input type="text" value={topic.name} className={styles.topicInput} />
      {topic.subtopics.map((subtopic, i) => {
        return true ? <Subtopic subtopic={subtopic} key={i} /> : <></>;
      })}
    </div>
  );
}

export default Topic;
