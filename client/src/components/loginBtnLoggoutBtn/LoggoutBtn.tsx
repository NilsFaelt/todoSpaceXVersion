import * as styles from "./btnStyles.style";
import { useAuth0 } from "@auth0/auth0-react";

const LoggoutBtn = () => {
  const { logout } = useAuth0();

  return <styles.Btn onClick={() => logout()}>LOGGOUT</styles.Btn>;
};

export default LoggoutBtn;
