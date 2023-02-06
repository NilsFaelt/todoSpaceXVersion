import styled from "styled-components";

export const TodoContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: clamp(300px, 80vw, 1200px);
  height: 500px;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: ${(props) => props.theme.shadow};
`;
