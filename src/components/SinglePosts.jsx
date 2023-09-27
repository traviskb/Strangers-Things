import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePosts } from "../API";
import { useNavigate } from "react-router-dom";

export default function SinglePost() {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null)

    const {_id} = useParams()
    const navigate = useNavigate();
    const backButton = () => {
        navigate(-1);
    }

    useEffect(() => {
        async function getSinglePost() {
            const response = await fetchSinglePosts(_id);
            if (response.success) {
                setPost(response.data.post);
            } else {
                setError(response.error.message);
            }
        }

        getSinglePost();
    }, [])

    return (
        <>
        <h1>{post && post.title}</h1>
        <h2>{post && post.description}</h2>
        <button onClick={backButton}>Back to all posts</button>

        </>
    )
}