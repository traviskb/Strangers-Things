import { useState, useEffect } from "react";
import { fetchPosts } from "../API";
import { NewPostForm } from "./NewPostForm";
import PostListName from "./PostListName";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  console.log(posts);
  console.log(searchParams);

  useEffect(() => {
    async function getAllPosts() {
      const response = await fetchPosts();
      if (response.success) {
        setPosts(response.data.posts);
      } else setError(response.error.message);
    }
    getAllPosts();
  }, []);

  const postsToDisplay = searchParams
    ? posts.filter((post) => post.title.toLowerCase().includes(searchParams))
    : posts;

  return (
    <>
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      <NewPostForm posts={posts} setPosts={setPosts} />
      {error && <p>{error}</p>}
      {postsToDisplay.map((post) => {
        return (
          <div>
            <PostListName key={post.id} post={post} />
          </div>
        );
      })}
    </>
  );
}
