import Subtopic from "./Subtopic";

function Topic({ topic }) {
  console.log(topic);
  return (
    <div className="topic">
      <p>##{topic.name}</p>
      {topic.subtopics.map((subtopic, i) => {
        return <Subtopic subtopic={subtopic} key={i} />;
      })}
    </div>
  );
}

export default Topic;
