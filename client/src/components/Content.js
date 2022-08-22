import { useState } from "react";
import styles from "./Content.module.css";
import { Configuration, OpenAIApi } from "openai";
import Chapter from "./Chapter";
function Content() {
  const [content, setContent] = useState([]);
  const promptContent = `we are creating a branching structure with multiple dimensions in the markdown format.
    # represents the first and high-level dimension
    ## represents a breakdown more detailed dimension of #
    ### represents a breakdown more detailed dimension of ## and so on.
    context: I am making a course called how to learn how to skydive.
    Fill in the branching structure bellow
    #`;
  const getData = async () => {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: promptContent,
      suffix: "",
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    console.log(response.data.choices[0].text.replace(/#/g, "-"));
  };
  // useEffect(() => {
  //   getData();
  // });

  // functions on chapters
  const addChapter = (chapterObj) => {
    chapterObj.id = content.length;

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
          />
        ))
      ) : (
        <Chapter
          chapter={null}
          addChapterInput={true}
          addChapter={addChapter}
          updateChapter={updateChapter}
        />
      )}
    </div>
  );
}

export default Content;
