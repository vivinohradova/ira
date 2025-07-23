import styles from "./Main.module.scss";
import { useTranslation } from "react-i18next";
// import Popup from "../Popup/Popup";
import { useState } from "react";
import scrollToElement from "../ScrollUtils/ScrollUtils";
import { GiHamburgerMenu } from "react-icons/gi";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Main = () => {
  const { t } = useTranslation();
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

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
          <div className={styles.mobile}>
            <GiHamburgerMenu
              className={styles.gamburger}
              onClick={handleClickHamburger}
            />
            <nav className={` ${isOpen ? styles.menu_mobile : styles.menu}`}>
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
          {/* {!isPopupOpen && ( */}
            {/* <button className={styles.button} onClick={togglePopup}>
              {t("getConsultation")}
            </button> */}
          {/* )} */}
          {/* <Popup isPopupOpen={isPopupOpen} togglePopup={togglePopup} /> */}
          <WhatsAppButton className={styles.button} text={t('getConsultation')} />
        </div>
      </main>
    </>
  );
};

export default Main;
