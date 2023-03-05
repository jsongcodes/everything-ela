import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "blue",
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
  font-size: 20px;

  font-family: 'Patrick Hand SC', cursive;

  border: 1px solid transparent;
  border-radius: 20px;
  padding: 8px 14px;
  margin-left: 43%;
  margin-right: 40%;
  margin-bottom: 10%;
  text-decoration: none;
  
  
`;

const FillButton = styled(ButtonBase)`
  background-color: #FFCAC8;
  color: #FF9E9E;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 9px #FF9E9E;
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