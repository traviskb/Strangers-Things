const cohortName = "2306-ftb-et-web-am";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSinglePost = async (_id) => {
  try {
    const response = await fetch(`${APIURL}/posts/${_id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (title, description) => {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
