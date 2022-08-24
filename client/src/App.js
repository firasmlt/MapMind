import Content from "./components/Content";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import "./App.css";
import { useState } from "react";

function App() {
  const [content, setContent] = useState([
    {
      id: "1",
      name: "chapter1",
      topics: [{ name: "topic1", subtopics: ["hello"] }],
    },
  ]);

  const deleteAllHandler = (x) => {
    const isYes = prompt("are you sure Y/N");
    if (isYes.toLocaleLowerCase() === "y") setContent([]);
  };
  return (
    <div className="App">
      <NavBar />
      <ToolBar deleteAllHandler={deleteAllHandler} />
      <Content content={content} setContent={setContent} />
    </div>
  );
}

export default App;
