import { useEffect, useState } from "react";
import styles from "./Content.module.css";
import { Configuration, OpenAIApi } from "openai";

function Content() {
  const [content, setContent] = useState(`# Head
  ## sub head
  ### sub sub head
  `);
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
  useEffect(() => {
    getData();
  });
  return <h1>{content}</h1>;
}

export default Content;
