import styles from "./Services.module.scss";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
const rewiewsName = {
  service1: [
    "general",
    "IT",
    "scientific",
    "medical",
    "legal",
    "publishingHouse",
  ],
  service2: [
    "interview",
    "business",
    "conference",
    "negotiations",
    "conversation",
  ],
  service3: [
    "television",
    "socialProjects",
    "conference",
    "negotiations",
    "business",
    "accompanying",
  ],
  service4: ["transcription", "subtitles", "voicing"],
};
const Services = () => {
  const { t } = useTranslation();

  const translateArray = (arr) => arr.map((item) => t(item));

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>{t("menuService")}</h2>
        {/* <p className={styles.text}>{t("serviceText")}</p> */}
        <div className={styles.card_container}>
          <Card
            title={t("card1")}
            price={t("fromWrittenTranslation")}
            menuItems={translateArray(rewiewsName.service1)}
            link="/IndividualJapanese"
          />
          <Card
            title={t("card2")}
            subtitle={t("online")}
            price={t("fromOralOnline")}
            menuItems={translateArray(rewiewsName.service2)}
            link="/GroupJapanese"
          />
          <Card
            title={t("card3")}
            subtitle={t("spot")}
            price={t("fromOralSpot")}
            menuItems={translateArray(rewiewsName.service3)}
            link="/BusinessSupport"
          />
          <Card
            title={t("card4")}
            price={t("fromVideoTranslation")}
            menuItems={translateArray(rewiewsName.service4)}
            link="/Translation"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
