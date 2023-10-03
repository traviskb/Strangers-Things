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
        "Authorization": `Bearer ${Token}`
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch (`${API_URL}/users/register`, {
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
    })
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}



  