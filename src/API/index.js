
const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`


export async function fetchPost() {
    try {
      const response = await fetch(`${API_URL}/posts`);
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  export async function fetchSinglePosts(postsId) { 
  try {
    const response = await fetch(`${API_URL}/posts/${postsId}`);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const createPost = async (title, description) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

