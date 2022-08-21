import Topic from "./Topic";
import arrow from "../images/arrow.svg";
import styles from "./Chapter.module.css";
import { useState } from "react";
function Chapter({ chapter, id, addChapterInput, addChapter, updateChapter }) {
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
      chapter.name !== "" &&
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
