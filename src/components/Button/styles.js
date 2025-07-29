import styled from "styled-components";
import { Background } from "../TopBackground/styles";

export const Button = styled.button`
  border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    ${(props) =>
      props.theme === "primary"
        ? "opacity: 0.8"
        : "background-color: #fff; color: #181f36"};
  }

  &:active {
    ${(props) =>
      props.theme === "primary"
        ? "transform: scale(0.97); background-color: #e45b3a;"
        : "background-color: #ddd; color: #000;"}
    
  }
`
  