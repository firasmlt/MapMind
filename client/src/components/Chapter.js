import Topic from "./Topic";

function Chapter({ chapter }) {
  console.log(chapter);
  return (
    <div className="chapter">
      <p>#{chapter.name}</p>
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
