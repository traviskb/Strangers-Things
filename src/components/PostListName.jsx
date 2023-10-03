import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostListName({ post }) {
  const navigate = useNavigate();
  console.log(post._id);

  return (
    <>
      <h3>{post.title}</h3>
      <button onClick={() => navigate(`/${post._id}`)}>See details</button>
    </>
  );
}