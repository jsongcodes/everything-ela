import { useState } from "react";
import { Button, Error, Input, FormField, Label } from "./styles";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }

  return (
    <form onSubmit={handleLogin}>
      <FormField>
      <Label htmlFor="username">username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
      </FormField>
      <FormField>
        <Label htmlFor="password">password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      
      <Button variant="fill" color="primary" type="submit">
          login
        </Button>
      
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
};

export default LoginForm;
