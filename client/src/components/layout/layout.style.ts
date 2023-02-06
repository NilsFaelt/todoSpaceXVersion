import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.theme.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
`;
