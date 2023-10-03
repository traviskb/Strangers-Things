import React, { useState } from "react";
import { createPost } from "../API";

export const NewPostForm = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const APIData = await createPost(title, description);
    if (APIData.success) {
      console.log("New Post: ", APIData.data.newPost);

      //Resetting all players manually
      const newPostList = [...posts, APIData.data.newPost];
      setPlayers(newPostList);

      setTitle("");
      setDescription("");
    } else {
      setError(APIData.error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <label>
      {error && <p>{error}</p>}
      <input
        value={title}
        type="text"
        name="title"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
      value={description}
      type="text"
      name="description"
      placeholder="description"
      onChange={(e) => setDescription(e.target.value)}
      />

      </label>

      <button>Submit</button>
    </form>
  );
}