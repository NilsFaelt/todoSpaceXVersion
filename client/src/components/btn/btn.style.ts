import styled from "styled-components";

export const Btn = styled.button`
  align-self: center;
  border-radius: 0px;
  color: white;
  background-color: black;
  border: 1px solid white;
  font-family: "Prompt", sans-serif;
  padding: 10px;
  cursor: pointer;
  margin: 60px;
  width: 100px;
  height: 50px;
  &:hover {
    transition: 0.5s;
    color: black;
    background-color: white;
    border: 1px solid black;
  }
  :active {
    transition: 0.1s;
    color: white;
    background-color: black;
    border: 1px solid white;
  }
`;
