import * as styles from "./todoNavbar.style";

const TodoNavBar = () => {
  return (
    <styles.NavContainer>
      <styles.StyledLink to={"create"}>CREATE</styles.StyledLink>
      <styles.StyledLink to={"alltodos"}>ALL TODOS</styles.StyledLink>
    </styles.NavContainer>
  );
};

export default TodoNavBar;
