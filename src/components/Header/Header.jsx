import logo from "../../assets/images/logo.png";
import { useLanguage } from "../LanguageContext";
import scrollToElement from "../ScrollUtils/ScrollUtils";
import styles from "./Header.module.scss";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Header = () => {
  const {  language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
     if (selectedLanguage !== language) {
    changeLanguage(selectedLanguage);
  }
  }, [changeLanguage, language, selectedLanguage]);

  const languages = ["en", "jp", "ua", "ru"];

  const handleClick = (e, targetId) => {
    e.preventDefault();
    scrollToElement(targetId);
    setIsOpen(false);
  };

  // const handleClickHamburger = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <header>
        <div className={styles.container}>
          <a href="#main" onClick={(e) => handleClick(e, "main")}>
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
          <div>
            {languages.map((lang, index) => (
              <button
                className={`${styles.buttonLang} ${
                  selectedLanguage === lang ? styles.selected : ""
                }`}
                key={index}
                onClick={() => {
                  changeLanguage(lang);
                  setSelectedLanguage(lang);
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          {/* <nav className={styles.menu}>
            <li>
              <a href="#services" onClick={(e) => handleClick(e, "services")}>
                <button type="button">{t("menuService")}</button>
              </a>
            </li>

            <li>
              <a href="#about" onClick={(e) => handleClick(e, "about")}>
                <button type="button">{t("menuAboutMe")}</button>
              </a>
            </li> */}

            {/* <li>
              <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
                <button type="button">{t("menuProjects")}</button>
              </a>
            </li> */}

            {/* <li>
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
              </li> */}

              {/* <li>
                <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
                  <button type="button">{t("menuProjects")}</button>
                </a>
              </li> */}

              {/* <li>
                <a href="#reviews" onClick={(e) => handleClick(e, "reviews")}>
                  <button type="button">{t("menuReviews")}</button>
                </a>
              </li>

              <li>
                <a href="#contacts" onClick={(e) => handleClick(e, "contacts")}>
                  <button type="button">{t("menuContact")}</button>
                </a>
              </li>
            </nav> */}
          {/* </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
