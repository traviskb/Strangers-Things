const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`
export const registerUser = async (username, password) => {
  console.log(username);
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        }
      })
    const result = await response.json();
    console.log(result);
    // sessionStorage.token = result.data.token;
    return result;
  } catch (error) {
    console.log(error);
  }
};



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
        user: {
          username: username,
          password: password,
        }
      })

