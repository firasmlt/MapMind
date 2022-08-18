import "./App.css";
import Fields from "./components/Fields";
import Head from "./components/Head";

function App() {
  return (
    <div className="App">
      <Head content={"Fill in at least 2 fields to continue..."} />
      <Fields />
    </div>
  );
}

export default App;
