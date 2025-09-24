import ButtonMore from "../../ButtonMore/ButtonMore";
import styles from "./BusinessSupport.module.scss";
import business from "../../../assets/images/business.jpeg";
import business2 from "../../../assets/images/business2.jpeg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { SiGotomeeting } from "react-icons/si";
import { TbCloudDataConnection } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";
import WhatsAppButton from "../../WhatsAppButton/WhatsAppButton";
import { useTranslation } from "react-i18next";
import PaymentButton from "../../PaymentButton/PaymentButton";

const BusinessSupport = () => {
  const { t } = useTranslation();
  const businessTextItem5 = t("businessTextItem5");

  return (
    <div id="main" className={styles.page}>
      <section className={styles.headline}>
        <div className={styles.container}>
          <nav className={styles.buttons}>
            <ButtonMore link={"/"} text={t("homeButton")} />
            <PaymentButton />
          </nav>
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
              {t("businessTextItem1")}
            </li>
            <li>
              <IoDocumentAttachSharp className={styles.icon} />
              {t("businessTextItem2")}
            </li>
            <li>
              <SiGotomeeting className={styles.icon} />
              {t("businessTextItem3")}
            </li>
            <li>
              <TbCloudDataConnection className={styles.icon} />
              {t("businessTextItem4")}
            </li>
            {businessTextItem5 !== "businessTextItem5" && (
              <li>
                <FaNetworkWired className={styles.icon} />
                {businessTextItem5}
              </li>
            )}
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
          <WhatsAppButton
            className={styles.button}
            text={t("businessButton")}
          />
        </div>
      </section>
      <section className={styles.call}>
        <div className={styles.container}>
          <h2>{t("businessText4")}</h2>
          <div className={styles.buttons}>
            <PaymentButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSupport;
