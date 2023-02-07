import styled from "styled-components";

export const TodoContainer = styled.div`
  position: relative;
  text-align: center;
  margin: 0 auto;
  margin-top: 70px;
  width: clamp(300px, 80vw, 1200px);
  height: 500px;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: ${(props) => props.theme.shadow};
`;
export const Title = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  font-family: "Prompt", sans-serif;
  padding-top: 100px;
`;
