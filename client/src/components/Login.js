import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
// import { Button } from "./styles";

const Login = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-form">
      <Logo>Positive Place</Logo>
      <Wrapper>
        <h2 className="tagline">
          spread positivity within your virtual school community
        </h2>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <p className="accountquestion">new here?</p> &nbsp;
            <button onClick={() => setShowLogin(false)}>sign up</button>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <p className="accountquestion">have an account?</p> &nbsp;
            <button onClick={() => setShowLogin(true)}>log in</button>
          </>
        )}
      </Wrapper>
    </div>
  );
};

const Logo = styled.h1`
  font-family: "Bungee Outline", cursive;
  font-style: italic;
  color: white;
  text-shadow: 1px 1px 10px #ff8e8e;
  font-size: 100px;
  margin: 8px 0 16px;
  text-align: center;
  background-color: #fcffd1;
  padding: 50px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #fbeeac;
  margin: 16px 0;
`;

export default Login;
