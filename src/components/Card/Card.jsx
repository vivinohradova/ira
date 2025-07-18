import styles from "./Card.module.scss";
import { useTranslation } from "react-i18next";
import ButtonMore from "../ButtonMore/ButtonMore";

const Card = ({ className, title, menuItems, price, link }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`${styles.card} ${className}`}>
        <h3>{title}</h3>
        <ul className={`${styles.menu} ${className}`}>
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <div className={styles.price}>{price}</div>
        </ul>
        <ButtonMore text={t("details")} link={link} />
      </div>
    </>
  );
};

export default Card;
