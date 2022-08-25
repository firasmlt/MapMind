import { useEffect, useState } from "react";
import styles from "./Content.module.css";
import { Configuration, OpenAIApi } from "openai";
import Chapter from "./Chapter";

function Content({ content, setContent, context }) {
  console.log('context', context)
  const ID = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  



  // functions on chapters

  const addChapter = (chapterObj) => {
    chapterObj.id = ID();

    const newContent = [...content, chapterObj];
    setContent(newContent);
  };

  const updateChapter = (id, newValue) => {
    setContent((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, ...newValue } : item;
      })
    );
  };
  const deleteChapter = (id) => {
    setContent((prev) => {
      return prev.filter((chapter) => chapter.id !== id);
    });
  };

  return (
    <div className={styles.content}>
      {content.length > 0 ? (
        content.map((ch, index) => (
          <Chapter
            chapter={ch}
            key={ch.id}
            id={ch.id}
            addChapterInput={content.length === index + 1}
            addChapter={addChapter}
            updateChapter={updateChapter}
            deleteChapter={deleteChapter}
          />
        ))
      ) : (
        <Chapter
          chapter={null}
          addChapterInput={true}
          addChapter={addChapter}
          updateChapter={updateChapter}
          deleteChapter={deleteChapter}
        />
      )}
    </div>
  );
}

export default Content;
