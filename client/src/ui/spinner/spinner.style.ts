import styled from "styled-components";

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 60px;
  height: 60px;
  border: 5px solid ${(props) => props.theme.colors.white};
  border-bottom-color: black;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
