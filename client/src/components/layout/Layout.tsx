import { Spinner } from "../../ui/spinner/spinner.style";
import Header from "../header/Header";
import * as styles from "./layout.style";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <styles.MainContainer>
      <Header />

      {children}
    </styles.MainContainer>
  );
};

export default Layout;
