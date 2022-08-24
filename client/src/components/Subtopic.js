import styles from "./Subtopic.module.css";
import Trash from "../images/Trash.svg";

function Subtopic({
  subtopic,
  subtopicIndex,
  addSubtopicInput,
  topicIndex,
  updateChapter,
  chapter,
}) {
  const addSubtopicHandler = (e) => {
    const newChapter = { ...chapter };
    newChapter.topics[topicIndex].subtopics = [
      ...newChapter.topics[topicIndex].subtopics,
      e.target.value,
    ];
    updateChapter(chapter.id, newChapter);
  };
  const changeSubtopicHandler = (e) => {
    const newChapter = { ...chapter };
    newChapter.topics[topicIndex].subtopics[subtopicIndex] = e.target.value;
    updateChapter(chapter.id, newChapter);
  };
  const deleteSubtopicHandler = (e) => {
    const newChapter = { ...chapter };
    newChapter.topics[topicIndex].subtopics = newChapter.topics[
      topicIndex
    ].subtopics.filter((el, i) => i !== subtopicIndex);
    updateChapter(chapter.id, newChapter);
  };

  return (
    <div className={styles.subtopic}>
      {subtopic !== null ? (
        <>
          <input
            type="text"
            value={subtopic}
            className={`${styles.subtopicInput} ${
              chapter.topics[topicIndex].generated ? styles.generated : ""
            }`}
            onChange={changeSubtopicHandler}
            autoFocus
          />
          <img
            alt="trash_icon"
            src={Trash}
            width="30px"
            className={styles.trash}
            onClick={deleteSubtopicHandler}
          />
        </>
      ) : (
        <></>
      )}
      {addSubtopicInput ? (
        <input
          type="text"
          placeholder="Add a new SubTopic"
          className={`${styles.subtopicInput} ${styles.addsubtopicInput}`}
          onChange={addSubtopicHandler}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Subtopic;
