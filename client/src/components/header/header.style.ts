import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
  text-decoration: underline 1px solid white;
  width: 100vw;
  height: 80px;
  background: ${(props) => props.theme.colors.dark};
  box-shadow: ${(props) => props.theme.shadow};
`;
export const StyledLink = styled(Link)`
  font-family: "Prompt", sans-serif;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  margin: 50px;
  &:hover {
  }
`;
export const Login = styled.p`
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  margin: 50px;
`;
