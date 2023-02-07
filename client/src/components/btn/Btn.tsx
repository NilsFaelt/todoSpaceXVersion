import * as styles from "./btn.style";
interface Props {
  BtnText: string;
  clickEvent?: () => void;
}
const Btn = ({ BtnText, clickEvent }: Props) => {
  return (
    <styles.Btn onClick={() => (clickEvent ? clickEvent() : null)}>
      {BtnText}
    </styles.Btn>
  );
};

export default Btn;
