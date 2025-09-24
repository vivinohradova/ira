import styles from "./Main.module.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import scrollToElement from "../ScrollUtils/ScrollUtils";
import { GiHamburgerMenu } from "react-icons/gi";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import PaymentButton from "../PaymentButton/PaymentButton";

const Main = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    scrollToElement(targetId);
    setIsOpen(false);
  };

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main id="main" className={styles.popupOpen}>
        <div className={styles.container}>
          <div className={styles.menuWrapp}>
            <nav className={styles.menu}>
              <li>
                <a href="#services" onClick={(e) => handleClick(e, "services")}>
                  <button type="button">{t("menuService")}</button>
                </a>
              </li>

              <li>
                <a href="#about" onClick={(e) => handleClick(e, "about")}>
                  <button type="button">{t("menuAboutMe")}</button>
                </a>
              </li>

              <li>
                <a href="#reviews" onClick={(e) => handleClick(e, "reviews")}>
                  <button type="button">{t("menuReviews")}</button>
                </a>
              </li>

              <li>
                <a href="#contacts" onClick={(e) => handleClick(e, "contacts")}>
                  <button type="button">{t("menuContact")}</button>
                </a>
              </li>
            </nav>
            <PaymentButton />
          </div>

          <div className={styles.mobile}>
            <GiHamburgerMenu
              className={styles.gamburger}
              onClick={handleClickHamburger}
            />
            <nav className={`${styles.menu_mobile} ${isOpen ? styles.open : ""}`}>
              <li>
                <a href="#services" onClick={(e) => handleClick(e, "services")}>
                  <button type="button">{t("menuService")}</button>
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleClick(e, "about")}>
                  <button type="button">{t("menuAboutMe")}</button>
                </a>
              </li>

              <li>
                <a href="#reviews" onClick={(e) => handleClick(e, "reviews")}>
                  <button type="button">{t("menuReviews")}</button>
                </a>
              </li>

              <li>
                <a href="#contacts" onClick={(e) => handleClick(e, "contacts")}>
                  <button type="button">{t("menuContact")}</button>
                </a>
              </li>
            </nav>
          </div>

          <h1 className={styles.title}>{t("mainName")}</h1>
          <p className={styles.text}>{t("mainText")}</p>
          <WhatsAppButton
            className={styles.button}
            text={t("getConsultation")}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
