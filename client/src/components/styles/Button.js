import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "deepskyblue",
    "--accent": "white",
  },
  secondary: {
    "--main": "white",
    "--accent": "lightblue",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 25px;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 8px 14px;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 10%;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: #FFCAC8;
  color: #FF9E9E;
  &:hover {
    opacity: 0.8;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: darkblue;
  border: 2px solid var(--main);
  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

export default Button;