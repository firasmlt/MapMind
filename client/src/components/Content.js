import { useEffect, useState } from "react";
import styles from "./Content.module.css";
// import { Configuration, OpenAIApi } from "openai";
import Chapter from "./Chapter";

function Content() {
  const [content, setContent] = useState([
    {
      id: "1",
      name: "chapter1",
      topics: [{ name: "topic1", subtopics: ["hello"] }],
    },
  ]);
  const ID = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  const deleteAllContent = () => {
    setContent([]);
  };
  const convertContentToMarkdown = (contentArray) => {
    if (contentArray === []) return "";
    let contentMarkdown = "";
    contentArray.forEach((chapter) => {
      let chapterMarkdown = `#${chapter.name}`;
      chapter.topics.forEach((topic) => {
        chapterMarkdown += `\n##${topic.name}`;
        topic.subtopics.forEach((subtopic) => {
          chapterMarkdown += `\n###${subtopic}`;
        });
      });
      contentMarkdown += `${chapterMarkdown}\n`;
    });
    return contentMarkdown;
  };

  const convertMarkdownToContent = (markdownText) => {
    const lines = markdownText.split("\n");
    const newContent = [];
    let chapter = {};
    lines.forEach((l, i) => {
      const line = l.trim();
      if (!line.includes("###") && !line.includes("##") && line.includes("#")) {
        chapter = {
          id: ID(),
          generated: true,
          name: line.replace("#", ""),
          topics: [],
        };
        newContent.push(chapter);
      }
      if (line.includes("##") && !line.includes("###")) {
        chapter.topics.push({
          name: line.replace("##", ""),
          subtopics: [],
          generated: true,
        });
      }
      if (line.includes("###")) {
        chapter.topics[chapter.topics.length - 1].subtopics.push(
          line.replace("###", "")
        );
      }
    });
    return newContent;
  };
  const markdownExampleText = `#chapter1
  ##topic1
  ###subtopic1
  ###subtopic2
  ###subtopic3
  ##topic2
  ###subtopic1
  ###subtopic2
  #chapter2
  ##topic1
  ###subtopic1
  ###subtopic2
  ##topic2
  ###subtopic1
  fdsafdsafsda`;

  useEffect(() => {
    setContent((prev) => [
      ...prev,
      ...convertMarkdownToContent(markdownExampleText),
    ]);
  }, []);
  console.log(convertMarkdownToContent(markdownExampleText));
  // console.log(convertContentToMarkdown(content));
  // const promptContent = `we are creating a branching structure with multiple dimensions in the markdown format.
  //   # represents the first and high-level dimension
  //   ## represents a breakdown more detailed dimension of #
  //   ### represents a breakdown more detailed dimension of ## and so on.
  //   context: I am making a course called how to learn how to skydive.
  //   Fill in the branching structure bellow
  //   #`;
  // const getData = async () => {
  //   const configuration = new Configuration({
  //     apiKey: "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",
  //   });
  //   const openai = new OpenAIApi(configuration);
  //   const response = await openai.createCompletion({
  //     model: "text-davinci-002",
  //     prompt: promptContent,
  //     suffix: "",
  //     temperature: 0.9,
  //     max_tokens: 150,
  //     top_p: 1,
  //     frequency_penalty: 0,
  //     presence_penalty: 0.6,
  //     stop: [" Human:", " AI:"],
  //   });
  //   console.log(response.data.choices[0].text.replace(/#/g, "-"));
  // };
  // useEffect(() => {
  //   getData();
  // });

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
  console.log(content);

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
