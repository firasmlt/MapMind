import styles from "./Content.module.css";
import Chapter from "./Chapter";

function Content({ content, setContent, context, ID }) {
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
