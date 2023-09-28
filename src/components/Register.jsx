import { useState } from "react";
import { registerUser } from "../API";

export default function Register() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  console.log(username);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(username, password);
      const result = response.json();
      console.log(result);
      setToken(result.token);
    } catch {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
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
