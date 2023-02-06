import * as styles from "./btn.style";
interface Props {
  BtnText: string;
}
const Btn = ({ BtnText }: Props) => {
  return <styles.Btn>{BtnText}</styles.Btn>;
};

export default Btn;
