import ButtonMore from "../../ButtonMore/ButtonMore";
import styles from "./BusinessSupport.module.scss";
import business from "../../../assets/images/business.jpeg";
import business2 from "../../../assets/images/business2.jpeg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { SiGotomeeting } from "react-icons/si";
import { TbCloudDataConnection } from "react-icons/tb";
// import Button from "../../Button/Button";
import WhatsAppButton from "../../WhatsAppButton/WhatsAppButton";
import { Trans, useTranslation } from "react-i18next";

const BusinessSupport = () => {
  const { t } = useTranslation();

  return (
    <div id="main" className={styles.page}>
      <section className={styles.headline}>
        <div className={styles.container}>
          <ButtonMore link={"/"} text={"Home"} />
          <h1 className={styles.title}>{t("card3")}</h1>
          <h2>{t("businessMain")}</h2>
          <p>{t("businessMain2")}</p>
        </div>
      </section>

      <section className={styles.receive}>
        <div className={styles.container}>
          <h2> {t("businessAssistance")}</h2>
          <ul>
            <li>
              <MdOutlineSupportAgent className={styles.icon} />
              <Trans i18nKey="businessText.item1" />
            </li>
            <li>
              <IoDocumentAttachSharp className={styles.icon} />
              <Trans i18nKey="businessText.item2" />
            </li>
            <li>
              <SiGotomeeting className={styles.icon} />
              <Trans i18nKey="businessText.item3" />
            </li>
            <li>
              <TbCloudDataConnection className={styles.icon} />
              <Trans i18nKey="businessText.item4" />
            </li>
          </ul>
          <div className={styles.summari}>
            <img src={business} alt="Girls on a picnic" />
            <p>{t("businessText1")}</p>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <h2> {t("businessText2")}</h2>
          <div className={styles.wrappCorporate}>
            <img src={business2} alt="happy girl is working" />
            <p>{t("businessText3")}</p>
          </div>
          <WhatsAppButton className={styles.button} text={t("businessButton")} />
        </div>
      </section>
      <section className={styles.call}>
        <div className={styles.container}>
          <h2>
           {t("businessText4")}
          </h2>
        </div>
      </section>
    </div>
  );
};

export default BusinessSupport;
