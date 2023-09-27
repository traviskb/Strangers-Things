const cohortName = "2306-ftb-et-web-am";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export const registerUser = async (username, password) => {
  console.log(username);
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
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
    const response = await fetch(`${BASE_URL}/users/login`, {
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
    // sessionStorage.token = result.data.token;
    return result;
  } catch (error) {
    console.log(error);
  }
};
