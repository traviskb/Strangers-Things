import { useNavigate } from "react-router-dom";

export default function PostsListsName ({post}) {
  const navigate = useNavigate();
  console.log(post)
  return (
    <>
    <h3>{post.title}</h3>
    <h6>{post.description}</h6>
    <button onClick={() => navigate(`/${post._id}`)} posts={post}>Click For More Details</button>
    </>
  )
}