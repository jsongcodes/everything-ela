import {useState} from 'react';
import { Button, Error, Input, FormField, Label } from "./styles";

const SignUpForm = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSignup(e) {
      e.preventDefault();
      setErrors([]);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password
        }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((student) => onLogin(student));
        } else {
          res.json().then((error) => setErrors(error.errors));
        }
      });
    }

    return (
      <form onSubmit={handleSignup}>
        <FormField>
          <Label htmlFor="username">username</Label>
          <Input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </FormField>
        <FormField>
        <Button type="submit">sign up</Button>
        </FormField>
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
    );
  }
  
  export default SignUpForm;