import Topic from "./Topic";
import styles from "./Chapter.module.css";
function Chapter({ chapter }) {
  console.log(chapter);
  return (
    <div className={styles.chapter}>
      <input type="text" value={chapter.name} className={styles.chapterInput} />
      {chapter.topics.map((topic, i) => {
        return <Topic topic={topic} key={i} />;
      })}
    </div>
  );
}

export default Chapter;

/*
<div className="topic">
        {element.topics.map((topic) => {
          return (
            <>
              <input type="text" value={topic.name} />
              <div className="subtopic">
                {topic.subtopics.map((subtopic) => {
                  return <input type="text" value={subtopic} />;
                })}
              </div>
            </>
          );
        })}
      </div>
*/
