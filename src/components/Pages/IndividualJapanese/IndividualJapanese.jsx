import styles from "./IndividualJapanese.module.scss";
import { FaStar } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { IoBulbOutline } from "react-icons/io5";
// import Button from "../../Button/Button";
import ButtonMore from "../../ButtonMore/ButtonMore";
import WhatsAppButton from "../../WhatsAppButton/WhatsAppButton";
import { useTranslation } from "react-i18next";

const IndividualJapanese = () => {
  const { i18n, t } = useTranslation();
  // const individualGainTextItem6 = t("individualGainTextItem6");

  return (
    <>
      <div id="main" className={styles.page}>
        <section className={styles.headline}>
          <div className={styles.container}>
            <ButtonMore link={"/"} text={t("homeButton")} />
            <h1 className={styles.title}>{t("card1")}</h1>
            <div className={styles.wrap}>
              <h3>{t("individualMainText")}</h3>
              <h3>{t("individualMainText2")}</h3>
            </div>
          </div>
        </section>
        <section className={styles.offer}>
          <div className={styles.container}>
            <h2>{t("individualText1")}</h2>
          </div>
        </section>

        <section className={styles.card}>
          <div className={styles.container}>
            <h3>{t("individualOffer")}</h3>
            <div>
              <p>{t("individualOffer1")}</p>
              <ul>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualOfferText1")}
                </li>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualOfferText2")}
                </li>
              </ul>
            </div>
            <div>
              <p>{t("individualOffer2")}</p>
              <ul>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualOfferText3")}
                </li>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualOfferText4")}
                </li>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualOfferText5")}
                </li>
              </ul>
            </div>
            <div>
              <p>{t("individualOffer3")}</p>
              <ul>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualOfferText6")}
                </li>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualOfferText7")}
                </li>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualOfferText8")}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.card2}`}>
          <div className={styles.container}>
            <h3>{t("individualGain")}</h3>
            <div>
              <ul>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualGainTextItem1")}
                </li>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualGainTextItem2")}
                </li>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualGainTextItem3")}
                </li>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualGainTextItem4")}
                </li>
                <li>
                  <FaStar className={styles.star} />
                  {t("individualGainTextItem5")}
                </li>
                {i18n.language !== "ja" && (
                  <li>
                    <FaStar className={styles.star} />
                    {t("individualGainTextItem6")}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>

        <p className={styles.call}>{t("individualText2")}</p>

        <section className={styles.lessons}>
          <div className={styles.container}>
            <h2> {t("individualText3")}</h2>
            <p>{t("individualText4")}</p>
            <h2> {t("individualText5")}</h2>
            <ul>
              {t("individualText6")}
              {i18n.language !== "ja" && (
                <>
                  <li>
                    <IoIosJournal className={styles.icon} />
                    N5
                  </li>
                  <li>
                    <IoIosJournal className={styles.icon} />
                    N4
                  </li>
                  <li>
                    <IoIosJournal className={styles.icon} />
                    N3
                  </li>
                  <li>
                    <IoIosJournal className={styles.icon} />
                    N2 ({t("individualText7")})
                  </li>
                </>
              )}
            </ul>
            <p>{t("individualText8")}</p>

            <h2> {t("individualText9")}</h2>
            <h3>
              <IoBulbOutline className={styles.icon} />
              {t("individualText10")}
            </h3>
            <p> {t("individualText11")}</p>
            <h3>
              <IoBulbOutline className={styles.icon} />
              {t("individualText12")}
            </h3>
            <p>{t("individualText13")}</p>
            <WhatsAppButton text={t("individualButton")} />
          </div>
        </section>
      </div>
    </>
  );
};

export default IndividualJapanese;
