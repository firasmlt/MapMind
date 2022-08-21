import Topic from "./Topic";
import styles from "./Chapter.module.css";
function Chapter({ chapter, id, addChapterInput, addChapter, updateChapter }) {
  // console.log(chapter);
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
              addTopicInput={chapter.topics.length === i + 1}
            />
          );
        })
      ) : chapter === null || chapter.name === "" ? (
        <></>
      ) : (
        <Topic topic={null} addTopicInput={true} />
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
