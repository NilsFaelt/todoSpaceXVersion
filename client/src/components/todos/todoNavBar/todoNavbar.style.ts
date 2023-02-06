import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid white;
  align-items: center;
  text-decoration: underline 1px solid white;
  cursor: pointer;
`;
export const StyledLink = styled(Link)`
  font-family: "Prompt", sans-serif;
  color: ${(props) => props.theme.colors.white};
`;
