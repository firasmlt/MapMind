import Topic from "./Topic";
import arrow from "../images/Arrow.svg";
import Trash from "../images/Trash.svg";

import styles from "./Chapter.module.css";
function Chapter({
  chapter,
  id,
  addChapterInput,
  addChapter,
  updateChapter,
  deleteChapter,
}) {
  const addChapterHandler = (e) => {
    addChapter({
      name: e.target.value,
      topics: [],
      show: true,
    });
  };
  const chapterNameChange = (e) => {
    updateChapter(id, { name: e.target.value });
  };

  const arrowClickHandler = () => {
    if (!chapter) {
      return;
    }
    updateChapter(id, { show: !chapter.show });
  };
  const deleteChapterHandler = () => {
    deleteChapter(chapter.id);
  };
  return (
    <div className={styles.chapter}>
      {chapter !== null ? (
        <img
          alt="arrow"
          src={arrow}
          className={
            chapter && chapter.show === true
              ? styles.arrow_show
              : styles.arrow_hide
          }
          onClick={arrowClickHandler}
          width="15px"
        />
      ) : (
        <></>
      )}
      {chapter !== null ? (
        <>
          <input
            autoFocus
            type="text"
            value={chapter.name}
            onChange={chapterNameChange}
            className={`${styles.chapterInput} ${
              chapter.generated ? styles.generated : ""
            }`}
          />
          <img
            alt="trash_icon"
            src={Trash}
            width="38px"
            className={styles.trash}
            onClick={deleteChapterHandler}
          />
        </>
      ) : (
        <></>
      )}
      {chapter !== null &&
      chapter.topics &&
      chapter.topics.length > 0 &&
      chapter.show ? (
        chapter.topics.map((topic, i) => {
          return (
            <Topic
              topic={topic}
              key={i}
              topicIndex={i}
              addTopicInput={chapter.topics.length === i + 1}
              updateChapter={updateChapter}
              chapter={chapter}
            />
          );
        })
      ) : chapter === null || chapter.name === "" || !chapter.show ? (
        <></>
      ) : (
        <Topic
          topic={null}
          addTopicInput={true}
          updateChapter={updateChapter}
          chapter={chapter}
        />
      )}
      {addChapterInput ? (
        <input
          onChange={addChapterHandler}
          type="text"
          placeholder="add a new Chapter"
          className={`${styles.chapterInput} ${styles.addChapterInput}`}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Chapter;
