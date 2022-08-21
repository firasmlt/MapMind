import Subtopic from "./Subtopic";
import styles from "./Topic.module.css";
function Topic({ topic, addTopicInput, chapter, updateChapter, topicIndex }) {
  // console.log(topic);
  const topicChangeHandler = (e) => {
    const newChapter = { ...chapter };
    newChapter.topics[topicIndex] = {
      name: e.target.value,
      subtopics: newChapter.topics[topicIndex].subtopics,
    };
    updateChapter(chapter.id, { ...newChapter });
  };
  const addTopicHandler = (e) => {
    updateChapter(chapter.id, {
      ...chapter,
      topics: [...chapter.topics, { name: e.target.value, subtopics: [] }],
    });
  };
  return (
    <div className={styles.topic}>
      {topic !== null ? (
        <input
          type="text"
          defaultValue={topic.name}
          className={styles.topicInput}
          onChange={topicChangeHandler}
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
              subtopicIndex={i}
              addSubtopicInput={topic.subtopics.length === i + 1}
              updateChapter={updateChapter}
              chapter={chapter}
              topicIndex={topicIndex}
            />
          ) : (
            <></>
          );
        })
      ) : topic === null || topic.name === "" ? (
        <></>
      ) : (
        <Subtopic
          subtopic={null}
          addSubtopicInput={true}
          updateChapter={updateChapter}
          chapter={chapter}
          topicIndex={topicIndex}
        />
      )}
      {addTopicInput ? (
        <input
          type="text"
          placeholder="Add a new Topic"
          className={`${styles.topicInput} ${styles.addTopicInput}`}
          onChange={addTopicHandler}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Topic;
