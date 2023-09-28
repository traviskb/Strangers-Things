
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import AllPosts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <header className="links">
      <Link to="/">Home</Link>
          <Link to="/users/register">Registration</Link>
          <Link to="/users/login">Login</Link>
      </header>
      <h1>Stranger's Things:</h1>
      <Routes>
        <Route path="users/register" element={<Register />} />
        <Route  path="/users/login" element={<Login />} />
    <>
      
    
      <h4>(Possibly Stolen)</h4>
      
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<SinglePost />} />

      </Routes>
      
    </> 
  )

}

export default App;
