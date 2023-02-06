import styled from "styled-components";

export const CreateContainer = styled.div`
  margin: 0 auto;
  height: 500px;
  width: clamp(250px, 50%, 1200px);
  background-color: ;
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Input = styled.input`
  height: 30px;
  width: 90%;
  font-size: 1.1rem;
  font-family: "Prompt", sans-serif;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.dark};
  &:placeholder {
    color: ${(props) => props.theme.colors.white};
  }
`;
