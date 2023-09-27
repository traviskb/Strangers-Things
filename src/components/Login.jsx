import { useState } from "react";
import { loginUser } from "../API";

export default function Login() {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login!</h2>
      {error && <p>{error}</p>}
      <label>
        Username:{" "}
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:{" "}
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  );
}
