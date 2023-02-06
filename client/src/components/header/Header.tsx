import LoginBtn from "../loginBtnLoggoutBtn/LoginBtn";
import * as styles from "./header.style";
import { useAuth0 } from "@auth0/auth0-react";
import LoggoutBtn from "../loginBtnLoggoutBtn/LoggoutBtn";
import { Spinner } from "../../ui/spinner/spinner.style";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <styles.Header>
      <styles.StyledLink to='/displaycard'>USER</styles.StyledLink>
      <styles.StyledLink to='/todos'>TODOS</styles.StyledLink>
      {isAuthenticated ? <LoggoutBtn /> : <LoginBtn />}
    </styles.Header>
  );
};

export default Header;
