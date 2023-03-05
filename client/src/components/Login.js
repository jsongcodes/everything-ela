import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "./styles";

const Login = ({ onLogin}) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="main-container">
    <div className="header-div">
    <h1 className="header-blurb">EVERYTHING ELA</h1>
      <h2 className="header-message">
        a virtual space to spread ELA knowledge
      </h2>
    </div>
      <Wrapper>

        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <p className="accountquestion">new here?</p> 
            <Button onClick={() => setShowLogin(false)}>sign up</Button>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <Button onClick={() => setShowLogin(true)}>log in</Button>
          </>
        )}
      </Wrapper>
    </div>
  );
};


const Wrapper = styled.section`
  max-width: 600px;
  margin: 20px auto 0;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 2px solid white;
  margin: 16px 0;
`;

export default Login;
