import { fetchPost } from "../API";
import { useState, useEffect } from "react";
import PostsListsName from "./PostsListsName";
import { NewPostForm } from "./NewPostForm";

export default function AllPosts(params) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useState("");
    console.log(posts)

    useEffect(() => {
        async function getAllPosts() {
            const APIresponse = await fetchPost();
            if (APIresponse.success) {
                setPosts(APIresponse.data.posts);
            } else {
                setError(APIresponse.error.message)
            }
        }
        getAllPosts()
    }, []);

    const displayedPosts = searchParams 
       ? posts.filter((post) => 
         post.title.toLowerCase().includes(searchParams)
         )
       : posts;

    return (
        <>
        <div>
          <label>
            Search Posts:{" "}
            <input type="text" 
            placeholder="search for posts"
            onChange={(e) => setSearchParams (e.target.value.toLowerCase())}
            />
          </label>
        </div>

        <NewPostForm posts={posts} setPosts={setPosts} />
      {error && <p>{error}</p>}
      
        {displayedPosts.map((post) => {
            return (
                <>
                 <PostsListsName  key={post.id} post={post} />
                 </>
            )
        })}
        </>
      )
}