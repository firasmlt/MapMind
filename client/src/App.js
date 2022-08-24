import Content from "./components/Content";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToolBar />
      <Content />
    </div>
  );
}

export default App;
