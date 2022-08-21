import Subtopic from "./Subtopic";
import styles from "./Topic.module.css";
function Topic({ topic, addTopicInput }) {
  // console.log(topic);
  return (
    <div className={styles.topic}>
      {topic !== null ? (
        <input
          type="text"
          defaultValue={topic.name}
          className={styles.topicInput}
        />
      ) : (
        <></>
      )}
      {topic !== null && topic.subtopics.length > 0 ? (
        topic.subtopics.map((subtopic, i) => {
          return true ? (
            <Subtopic
              subtopic={subtopic}
              key={i}
              addSubtopicInput={topic.subtopics.length === i + 1}
            />
          ) : (
            <></>
          );
        })
      ) : topic === null ? (
        <></>
      ) : (
        <Subtopic subtopic={null} addSubtopicInput={true} />
      )}
      {addTopicInput ? (
        <input
          type="text"
          placeholder="Add a new Topic"
          className={`${styles.topicInput} ${styles.addTopicInput}`}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Topic;
