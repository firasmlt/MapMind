import Subtopic from "./Subtopic";
import arrow from "../images/arrow.svg";

import styles from "./Topic.module.css";
function Topic({ topic, addTopicInput, chapter, updateChapter, topicIndex }) {
  const arrowClickHandler = () => {
    if (!topic) {
      return;
    }
    const newChapter = { ...chapter };
    newChapter.topics[topicIndex].show = !newChapter.topics[topicIndex].show;
    updateChapter(chapter.id, { ...newChapter });
  };
  const topicChangeHandler = (e) => {
    const newChapter = { ...chapter };
    newChapter.topics[topicIndex] = {
      ...newChapter.topics[topicIndex],
      name: e.target.value,
    };
    updateChapter(chapter.id, { ...newChapter });
  };
  const addTopicHandler = (e) => {
    updateChapter(chapter.id, {
      ...chapter,
      topics: [
        ...chapter.topics,
        { name: e.target.value, subtopics: [], show: true },
      ],
    });
  };
  return (
    <div className={styles.topic}>
      {topic !== null ? (
        <img
          alt="arrow"
          src={arrow}
          className={
            topic && topic.show === true ? styles.arrow_show : styles.arrow_hide
          }
          onClick={arrowClickHandler}
          width="15px"
        />
      ) : (
        <></>
      )}
      {topic !== null ? (
        <input
          type="text"
          defaultValue={topic.name}
          className={styles.topicInput}
          onChange={topicChangeHandler}
          onLoad={() => console.log("hello")}
          autoFocus
        />
      ) : (
        <></>
      )}
      {topic !== null && topic.subtopics.length > 0 && topic.show ? (
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
      ) : topic === null || topic.name === "" || !topic.show ? (
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
