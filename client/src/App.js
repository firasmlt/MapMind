import Content from "./components/Content";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import Options from "./components/Options";
import DeleteVerificationOverlay from "./components/UI/DeleteVerificationOverlay";
import "./App.css";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
function App() {
  const [context, setContext] = useState("");
  const [content, setContent] = useState([]);
  const [temp, setTemp] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const deleteAllHandler = (x) => {
    if (content.length !== 0) setShowOverlay(true);
  };
  const ID = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const convertContentToMarkdown = (contentArray) => {
    if (contentArray.length === 0) return "";
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

  const convertMarkdownToContent = (markdownText, generated = false) => {
    const lines = markdownText.trim().split("\n");
    const newContent = [];
    let chapter = {};
    lines.forEach((l, i) => {
      const line = l.trim();
      if (!line.includes("###") && !line.includes("##") && line.includes("#")) {
        chapter = {
          id: ID(),
          generated,
          name: line.replace("#", ""),
          topics: [],
        };
        newContent.push(chapter);
      }
      if (line.includes("##") && !line.includes("###")) {
        chapter.topics.push({
          name: line.replace("##", ""),
          subtopics: [],
          generated,
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

  const promptContent = `we are creating a branching structure with multiple dimensions in the markdown format.\n    # = High-level \n    ## = Breakdown list of components that make up the high-level\n    ### = A further breakdown of the '##'\n    Context: ${context}\nContent:\n${convertContentToMarkdown(
    content
  )}# `;
  const getData = async () => {
    console.log(promptContent);
    const configuration = new Configuration({
      apiKey: "API",
    });
    const openai = new OpenAIApi(configuration);
    console.log("sending...");
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: promptContent,
      suffix: "",
      temperature: temp,
      max_tokens: 1056,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response);
    setContent((prev) => [
      ...prev,
      ...convertMarkdownToContent(`#${response.data.choices[0].text}`, true),
    ]);
  };

  return (
    <div className="App">
      <NavBar />
      <ToolBar
        deleteAllHandler={deleteAllHandler}
        setContext={setContext}
        getData={getData}
      />
      <Options setTemp={setTemp} />
      <Content
        content={content}
        setContent={setContent}
        context={context}
        ID={ID}
      />
      {showOverlay ? (
        <DeleteVerificationOverlay
          setShowOverlay={setShowOverlay}
          setContent={setContent}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
