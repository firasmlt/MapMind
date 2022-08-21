import Topic from "./Topic";
import styles from "./Chapter.module.css";
import { useState } from "react";
function Chapter({ chapter, id, addChapterInput, addChapter, updateChapter }) {
  const addChapterHandler = (e) => {
    addChapter({
      name: e.target.value,
      topics: [],
    });
  };
  const chapterNameChange = (e) => {
    updateChapter(id, { name: e.target.value });
  };
  return (
    <div className={styles.chapter}>
      {chapter !== null ? (
        <input
          type="text"
          value={chapter.name}
          onChange={chapterNameChange}
          className={styles.chapterInput}
        />
      ) : (
        <></>
      )}
      {chapter !== null &&
      chapter.topics &&
      chapter.topics.length > 0 &&
      chapter.name !== "" ? (
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
      ) : chapter === null || chapter.name === "" ? (
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
