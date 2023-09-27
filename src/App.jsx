import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Posts from "./components/Posts"
import SinglePost from './components/SinglePosts'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      
      <h1 className="title">STRANGERS THINGS</h1>
      <h4>(Possibly Stolen)</h4>
      
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<SinglePost />} />
      </Routes>
      
    </> 
  )
}

export default App
