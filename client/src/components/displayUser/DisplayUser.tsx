import * as styles from "./displayUser.style";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "../loginBtnLoggoutBtn/LoginBtn";
import { Spinner } from "../../ui/spinner/spinner.style";

const DisplayUser = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  return (
    <>
      {
        <styles.CardContainer>
          {isAuthenticated ? (
            <>
              <styles.Title>USERINFO</styles.Title>
              <styles.InfoText>
                Name: {user?.given_name} {user?.family_name}
              </styles.InfoText>
              <styles.InfoText>Email: {user?.email}</styles.InfoText>
            </>
          ) : (
            <>
              <styles.Title>LOGIN FOR USER</styles.Title>
              <LoginBtn />
            </>
          )}
          {isLoading && <Spinner />}
        </styles.CardContainer>
      }
    </>
  );
};

export default DisplayUser;
