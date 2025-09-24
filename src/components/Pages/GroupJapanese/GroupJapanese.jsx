import ButtonMore from "../../ButtonMore/ButtonMore";
import styles from "./GroupJapanese.module.scss";
import globus from "../../../assets/images/globus.jpeg";
import atmosphera from "../../../assets/images/atmosphera.jpeg";
import learn2 from "../../../assets/images/learn2.jpg";
import learn3 from "../../../assets/images/learn3.jpeg";
import man from "../../../assets/images/learnman.jpeg";
import girl from "../../../assets/images/learngirl.jpg";
import { FaGrin } from "react-icons/fa";
import { FaGrinAlt } from "react-icons/fa";
import { FaGrinHearts } from "react-icons/fa";
import { RiGroup2Fill } from "react-icons/ri";
import { GiOpenBook } from "react-icons/gi";
import { Trans, useTranslation } from "react-i18next";
import PaymentButton from "../../PaymentButton/PaymentButton";

const GroupJapanese = () => {
  const { t } = useTranslation();

  return (
    <div id="main" className={styles.page}>
      <section className={styles.headline}>
        <div className={styles.container}>
          <nav className={styles.buttons}>
            <ButtonMore link={"/"} text={t("homeButton")} />
            <PaymentButton />
          </nav>
          <h1 className={styles.title}>{t("card2")}</h1>
          <h3>{t("groupMain")}</h3>
          <div className={styles.levelWrapp}>
            <img src={learn3} alt="Girl learning" />
            <ul className={styles.level}>
              {t("groupLevelText")}
              <li>
                <FaGrin className={styles.icon} />
                <Trans i18nKey="groupLevel.item1" />
              </li>
              <li>
                <FaGrinAlt className={styles.icon} />
                <Trans i18nKey="groupLevel.item2" />
              </li>
              <li>
                <FaGrinHearts className={styles.icon} />
                <Trans i18nKey="groupLevel.item3" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.goals}>
        <div className={styles.container}>
          <div className={styles.right}>
            <img className={styles.image} src={globus} alt="Globe" />
            <h3>{t("groupText1")}</h3>
          </div>
          <div className={styles.left}>
            <img className={styles.image} src={man} alt="Learning man" />
            <h3>{t("groupText2")}</h3>
          </div>
          <div className={styles.right}>
            <img
              className={styles.image}
              src={atmosphera}
              alt="cozy atmosphere with coffee"
            />
            <h3>{t("groupText3")}</h3>
          </div>
          <div className={styles.left}>
            <img className={styles.image} src={girl} alt="Learning girl" />
            <h3>{t("groupText4")}</h3>
          </div>
        </div>
      </section>

      <section className={styles.offer}>
        <div className={styles.container}>
          <h2>{t("groupText5")}</h2>
          <p>{t("groupText6")}</p>
          <img src={learn2} alt="Learning" />
        </div>
      </section>

      <section className={styles.prefer}>
        <div className={styles.container}>
          <div className={styles.wrapp}>
            <div className={styles.companies}>
              <div>
               
                <RiGroup2Fill className={styles.iconGroup} />
                <h2>{t("groupText7")}</h2>
              </div>
              <p>{t("groupText8")}</p>
              <p>{t("groupText9")}</p>
            </div>

            <div className={styles.individual}>
              <div>
               
                <GiOpenBook className={styles.iconBook} />
                <h2>{t("groupText10")}</h2>
              </div>
              <p>{t("groupText11")}</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <PaymentButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupJapanese;
