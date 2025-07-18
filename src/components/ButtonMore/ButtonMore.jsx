import { Link } from "react-router-dom";
import styles from "./ButtonMore.module.scss";
const ButtonMore = ({ text, link }) => {
  return (
    <>
      <Link to={link} className={styles.button_more}>
        {text}
      </Link>
    </>
  );
};

export default ButtonMore;
