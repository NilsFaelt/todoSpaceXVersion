import * as styles from "./btnStyles.style";
import { useAuth0 } from "@auth0/auth0-react";
const LoginBtn = () => {
  const { loginWithPopup } = useAuth0();
  return <styles.Btn onClick={() => loginWithPopup()}>LOGIN</styles.Btn>;
};

export default LoginBtn;
