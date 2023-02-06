import styled from "styled-components";

export const CardContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 300px;
  width: clamp(300px, 50vw, 600px);
  height: 300px;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: ${(props) => props.theme.shadow};
`;
export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-family: "Prompt", sans-serif;
  padding-top: 100px;
`;
export const InfoText = styled.p`
  margin-top: 20px;
  font-family: "Prompt", sans-serif;
  color: ${(props) => props.theme.colors.white};
`;
