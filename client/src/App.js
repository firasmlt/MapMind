import Content from "./components/Content";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import DeleteVerificationOverlay from "./components/UI/DeleteVerificationOverlay";
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
  const [showOverlay, setShowOverlay] = useState(false);
  const deleteAllHandler = (x) => {
    setShowOverlay(true);
  };
  return (
    <div className="App">
      <NavBar />
      <ToolBar deleteAllHandler={deleteAllHandler} />
      <Content content={content} setContent={setContent} />
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
