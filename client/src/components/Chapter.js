import Topic from "./Topic";
import styles from "./Chapter.module.css";
function Chapter({ chapter, lastIndex }) {
  console.log(chapter);
  return (
    <div className={styles.chapter}>
      <input type="text" value={chapter.name} className={styles.chapterInput} />
      {chapter.topics.map((topic, i) => {
        return (
          <Topic
            topic={topic}
            key={i}
            lastIndex={chapter.topics.length === i + 1}
          />
        );
      })}
      {lastIndex ? (
        <input
          type="text"
          placeholder="add a new Chapter"
          className={styles.chapterInput}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Chapter;
