import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import AllPosts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <h1>Stranger's Things:</h1>
      <Routes>
        <Route path="/" element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default App;
