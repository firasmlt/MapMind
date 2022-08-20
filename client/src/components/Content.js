import { useEffect, useState } from "react";
import styles from "./Content.module.css";
import { Configuration, OpenAIApi } from "openai";
import Chapter from "./Chapter";
function Content() {
  const [content, setContent] = useState([
    {
      id: 0,
      name: "how to learn to skydive",
      topics: [
        {
          name: "topic 1: what is skydiving?",
          subtopics: ["subtopic 1: history of skydiving", "subtopic two"],
        },
        {
          name: "topic 2: what is skydiving?",
          subtopics: ["subtopic 1: history of skydiving", "subtopic two"],
        },
      ],
    },
    {
      id: 1,
      name: "how to learn to test",
      topics: [
        {
          name: "topic 1: what is testing?",
          subtopics: ["subtopic 1: history of test", "subt topic two"],
        },
        {
          name: "topic 2: what is test?",
          subtopics: ["subtopic 1: history of test", "subt topic two"],
        },
        {
          name: "topic 1: what is testing?",
          subtopics: ["subtopic 1: history of test", "subt topic two"],
        },
      ],
    },
    {
      id: 2,
      name: "how to learn to skydive",
      topics: [
        {
          name: "topic 1: what is skydiving?",
          subtopics: ["subtopic 1: history of skydiving", "subtopic two"],
        },
        {
          name: "topic 2: what is skydiving?",
          subtopics: ["subtopic 1: history of skydiving", "subtopic two"],
        },
      ],
    },
  ]);
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
  return (
    <div className={styles.content}>
      {content.map((ch) => (
        <Chapter chapter={ch} key={ch.id} />
      ))}
    </div>
  );
}

export default Content;
